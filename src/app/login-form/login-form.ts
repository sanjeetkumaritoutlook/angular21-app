import { ChangeDetectionStrategy, Component,effect,signal } from '@angular/core';
import {form,Control, submit} from '@angular/forms/signals';

export interface User { name: string; username: string; }

@Component({
  selector: 'app-login-form',
  imports: [Control],
 template:`<form>
  <label>Username: <input [control]="userForm.username"/></label>
  <label>Name: <input [control]="userForm.name"/></label> 
  <button (click)="submitForm()">Reset</button>
 </form>`,
  styleUrl: './login-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginForm {
userModel= signal<User>({name:'',username:''});

userForm = form(this.userModel);

constructor(){
  effect(() => {
    console.log('User Model Changed:', this.userModel());
  });
}

submitForm(){
  submit(this.userForm,()=>new Promise(resolve=> resolve()));
}
}
