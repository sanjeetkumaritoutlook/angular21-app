import { Component, signal } from '@angular/core';
import {form,Control} from '@angular/forms/signals';
import { passwordEqual } from './helper';
@Component({
  selector: 'app-registration-page',
  imports: [Control],
  template: `<form>
    <label for="email">Email:</label>
    <input id="email"  type="email" [control]="form.email" />
   <label for="password">Password:</label>
    <input id="password" type="password" [control]="form.password" />
   <label for="confirmPassword">Confirm Password:</label>
    <input id="confirmPassword" type="password" [control]="form.confirmPassword" />
    @for(error of form().errors(); track error.kind){
      <span class="error">{{error.message}}</span>
    }
    <button type="submit" [disabled]="form().invalid()">Login</button>
    </form>`,
  styleUrl: './registration-page.css'
})
export class RegistrationPage {
private credentials = signal({
  email: '' ,
  password: '',
  confirmPassword: ''  
});
protected readonly form = form(
  this.credentials,
  credentials=>{
    passwordEqual(credentials.confirmPassword,credentials.password);
});
}
