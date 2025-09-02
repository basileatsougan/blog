import { Controller, Post, Get, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service';
import type { ContactFormData } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('submit')
  @HttpCode(HttpStatus.OK)
  submitContactForm(@Body() formData: ContactFormData) {
    return this.contactService.submitContactForm(formData);
  }

  @Get('submissions')
  getAllSubmissions() {
    return this.contactService.getAllSubmissions();
  }
}
