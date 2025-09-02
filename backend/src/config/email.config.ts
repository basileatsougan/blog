export const getEmailConfig = () => ({
  // Admin email to receive contact form notifications
  adminEmail: process.env.ADMIN_EMAIL || '',

  // For production, use real SMTP settings instead of Ethereal
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.ethereal.email',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  },

  // Email templates
  templates: {
    contactForm: {
      subject: 'New Contact Form Submission: {subject}',
      from: '"Blog Contact Form" <noreply@basileblog.com>',
    },
  },
});

// For backward compatibility, export a function that returns the current config
export const emailConfig = getEmailConfig();

// Debug logging
console.log("=== EMAIL CONFIG DEBUG ===");
console.log("adminEmail:", emailConfig.adminEmail);
console.log("smtp:", emailConfig.smtp);
console.log("=== END EMAIL CONFIG DEBUG ===");