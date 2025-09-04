import { Component } from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-page',
  imports: [ReactiveFormsModule],
  template:`<form [formArray]="form">
  @for(_ of form.controls; track $index){
    <input type="text" [formControlName]="$index">
  }
  </form>`,
  styleUrl: './form-page.css'
})
export class FormPage {
form = new FormArray([
  new FormControl('fish'),
  new FormControl('crab'),
  new FormControl('shark')
]);
}
