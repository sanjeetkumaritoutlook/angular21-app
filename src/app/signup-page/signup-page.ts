import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { JsonPipe } from '@angular/common';
import { Control, form, pattern, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signup-page',
  imports: [Control, JsonPipe],
  template: `
<h2>Signup Form using Angular Signal Forms in 21</h2>

    <label>Username: </label>
    <input [control]="form.username" />
    <br>
    <label>First Name: </label>
    <input [control]="form.firstName" />
    <br>
    <label>age: </label>
    <input type="number" [control]="form.age" />
    <br>

    <h5>Valid:</h5>
    <pre>{{ form().valid() }}</pre>

    <h5>Errors:</h5>
    @let errors = form().errorSummary();
    @for (error of errors; track $index) {
      <p>{{ error | json }}</p>
    }

    <h5>Value:</h5>
    <pre>{{ form().value() | json }}</pre>
    
  `,
    styleUrl: './signup-page.css'
})
export class SignupPage {
// define the form with signal
  formData = signal({
    username: '',
    firstName: 'Tomer',
    lastName: '',
    age: 35,
  });

  // create the form + validators
  form = form(this.formData, (user) => {
    required(user.username);
    pattern(user.firstName, /^[A-Za-z]+$/, { message: 'Only A-Z allowed' });
  });

}
