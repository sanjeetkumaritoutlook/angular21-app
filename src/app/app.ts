import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { FormPage } from './form-page/form-page';
import { SignupPage } from './signup-page/signup-page';
import { LoginForm } from './login-form/login-form';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginPage,FormPage,SignupPage,LoginForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular21-app');
}
