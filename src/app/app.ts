import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { FormPage } from './form-page/form-page';
import { SignupPage } from './signup-page/signup-page';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginPage,FormPage,SignupPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular21-app');
}
