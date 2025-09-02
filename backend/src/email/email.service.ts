import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { getEmailConfig } from '../config/email.config';

export interface EmailData {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor() {
    // Create a test account using Ethereal Email (for development)
    // In production, use real SMTP credentials
    this.setupTransporter();
  }

  private async setupTransporter() {
    try {
      const config = getEmailConfig();
      // Check if we have real SMTP credentials
      if (config.smtp.auth.user && config.smtp.auth.pass) {
        // Use real SMTP credentials
        this.transporter = nodemailer.createTransport({
          host: config.smtp.host,
          port: config.smtp.port,
          secure: config.smtp.secure,
          auth: config.smtp.auth,
        });
        
        this.logger.log('Email transporter configured with real SMTP credentials');
      } else {
        // For development/testing - creates a test account
        const testAccount = await nodemailer.createTestAccount();
        
        this.transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });

        this.logger.log('Email transporter configured with test account');
        this.logger.log(`Test account: ${testAccount.user}`);
      }
    } catch (error) {
      this.logger.error('Failed to setup email transporter:', error);
    }
  }

  async sendEmail(emailData: EmailData): Promise<boolean> {
    try {
      if (!this.transporter) {
        this.logger.error('Email transporter not configured');
        return false;
      }

      const mailOptions = {
        from: '"Blog Contact Form" <noreply@yourblog.com>',
        to: emailData.to,
        subject: emailData.subject,
        text: emailData.text,
        html: emailData.html || emailData.text,
      };

      const info = await this.transporter.sendMail(mailOptions);
      
      this.logger.log('Email sent successfully');
      this.logger.log(`Message ID: ${info.messageId}`);
      this.logger.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
      
      return true;
    } catch (error) {
      this.logger.error('Failed to send email:', error);
      return false;
    }
  }

  async sendContactFormNotification(contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<boolean> {
    const config = getEmailConfig();
    
    // Debug: Log the email configuration being used
    this.logger.log('=== SENDING CONTACT FORM NOTIFICATION ===');
    this.logger.log(`Admin email from config: ${config.adminEmail}`);
    this.logger.log(`Admin email length: ${config.adminEmail?.length || 0}`);
    this.logger.log(`Admin email trimmed: "${config.adminEmail?.trim()}"`);
    this.logger.log(`SMTP host: ${config.smtp.host}`);
    this.logger.log(`SMTP user: ${config.smtp.auth.user}`);
    this.logger.log(`SMTP pass set: ${config.smtp.auth.pass ? 'YES' : 'NO'}`);
    
    if (!config.adminEmail || config.adminEmail.trim() === '') {
      this.logger.error('ADMIN_EMAIL is not set or is empty!');
      return false;
    }

    const emailData: EmailData = {
      to: config.adminEmail,
      subject: config.templates.contactForm.subject.replace('{subject}', contactData.subject),
      text: `
New contact form submission received:

Name: ${contactData.name}
Email: ${contactData.email}
Subject: ${contactData.subject}
Message: ${contactData.message}

---
Sent from Basile Blog contact form
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${contactData.name}</p>
<p><strong>Email:</strong> ${contactData.email}</p>
<p><strong>Subject:</strong> ${contactData.subject}</p>
<p><strong>Message:</strong></p>
<p>${contactData.message.replace(/\n/g, '<br>')}</p>
<hr>
<p><em>Sent from Basile Blog contact form</em></p>
      `,
    };

    this.logger.log(`Email data prepared - To: ${emailData.to}, Subject: ${emailData.subject}`);
    return this.sendEmail(emailData);
  }
}
