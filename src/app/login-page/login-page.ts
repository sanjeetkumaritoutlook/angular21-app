import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {form,Control} from '@angular/forms/signals';
export interface LoginForm {
  login: string;
  password: string;
}
@Component({
  selector: 'app-login-page',
  imports: [Control,JsonPipe],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
loginForm = form(signal<LoginForm>({
  login: '',
  password: ''  
})
);
}
