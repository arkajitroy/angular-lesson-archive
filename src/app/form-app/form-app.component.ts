import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-app',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-app.component.html',
  styleUrl: './form-app.component.css',
})
export class FormAppComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', []),
  });

  handleOnSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
      this.form.reset();
    } else {
      console.log('Form Invalid!');
      this.form.markAllAsTouched(); // show validation errors
    }
  }
}
