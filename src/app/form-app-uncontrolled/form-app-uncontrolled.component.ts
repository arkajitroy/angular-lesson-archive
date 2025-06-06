import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

type TFormFields = 'username' | 'email';

@Component({
  selector: 'app-form-app-uncontrolled',
  imports: [CommonModule],
  templateUrl: './form-app-uncontrolled.component.html',
  styleUrl: './form-app-uncontrolled.component.css',
})
export class FormAppUncontrolledComponent {
  @ViewChild('username') usernameRef!: ElementRef<HTMLInputElement>;
  @ViewChild('email') emailRef!: ElementRef<HTMLInputElement>;

  formData: Record<TFormFields, string> = {
    username: '',
    email: '',
  };

  errors: any = {};

  handleInputChange(field: TFormFields, event: Event): void {
    const input = event.target as HTMLInputElement;
    this.formData[field] = input.value;
  }

  handleValidate(): boolean {
    this.errors = {};
    if (!this.formData.username) this.errors.username = 'Username is required!';
    if (!this.formData.email) this.errors.email = 'Email is required!';
    else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
      this.errors.email = 'Invalid email';
    }
    return Object.keys(this.errors).length === 0;
  }

  handleSubmit(event: Event): void {
    event.preventDefault(); // Prevent default form submission
    const isValid = this.handleValidate();
    if (isValid) console.log('Form submitted:', this.formData);
    else console.log('Form validation failed:', this.errors);
  }
}
