import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.submitMessage = '';
    this.submitSuccess = false;

    // Send to backend API
    this.http.post(`${environment.apiUrl}/contact/submit`, this.contactForm)
      .subscribe({
        next: (response: any) => {
          this.submitSuccess = true;
          this.submitMessage = response.message;
          this.resetForm();
        },
        error: (error) => {
          this.submitSuccess = false;
          this.submitMessage = 'Une erreur est survenue. Veuillez réessayer.';
          console.error('Error submitting form:', error);
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
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
