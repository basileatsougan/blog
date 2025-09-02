import { Injectable, Logger } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { getEmailConfig } from '../config/email.config';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(private readonly emailService: EmailService) {
    // Debug: Log environment variables and config on service initialization
    // this.logger.log('=== ENVIRONMENT VARIABLES DEBUG ===');
    // this.logger.log(`ADMIN_EMAIL from process.env: ${process.env.ADMIN_EMAIL}`);
    // this.logger.log(`SMTP_HOST from process.env: ${process.env.SMTP_HOST}`);
    // this.logger.log(`SMTP_USER from process.env: ${process.env.SMTP_USER}`);
    // this.logger.log(`SMTP_PASS from process.env: ${process.env.SMTP_PASS ? '[SET]' : '[NOT SET]'}`);
    // this.logger.log('=== EMAIL CONFIG DEBUG ===');
    const config = getEmailConfig();
    // this.logger.log(`emailConfig.adminEmail: ${config.adminEmail}`);
    // this.logger.log(`emailConfig.smtp.host: ${config.smtp.host}`);
    // this.logger.log(`emailConfig.smtp.auth.user: ${config.smtp.auth.user}`);
    // this.logger.log(`emailConfig.smtp.auth.pass: ${config.smtp.auth.pass ? '[SET]' : '[NOT SET]'}`);
    // this.logger.log('=== END DEBUG ===');
  }

  async submitContactForm(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    // Log the contact form submission
    this.logger.log(
      `New contact form submission from ${formData.name} (${formData.email})`,
    );
    this.logger.log(`Subject: ${formData.subject}`);
    this.logger.log(`Message: ${formData.message}`);

    try {
      // Send email notification
      const emailSent = await this.emailService.sendContactFormNotification(formData);
      
      if (emailSent) {
        this.logger.log('Email notification sent successfully');
      } else {
        this.logger.warn('Failed to send email notification');
      }

      // Maybe Later
      // 1. Save to database
      // 2. Store in CRM system

      return {
        success: true,
        message:
          'Votre message a été envoyé avec succès. Nous vous répondrons dans maximum 24 heures.',
      };
    } catch (error) {
      this.logger.error('Error processing contact form submission:', error);
      return {
        success: false,
        message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.',
      };
    }
  }

  getAllSubmissions(): ContactFormData[] {
    // In a real application, this would fetch from database
    // For demo purposes, return empty array
    this.logger.log('Fetching all contact form submissions');
    return [];
  }
}
