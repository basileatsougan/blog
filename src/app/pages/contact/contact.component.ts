import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Contact form submitted:', this.contactForm);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    this.resetForm();
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
