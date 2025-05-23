import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { materialModules } from '../../material';
import { CommonModule } from '@angular/common';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input',
   standalone: true,
  
  imports: [materialModules,
        ReactiveFormsModule,
         CommonModule,
        FormsModule
      ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input()
  form!: FormGroup;

  @Output() reset: EventEmitter<any> = new EventEmitter<any>();

  readonlyState: boolean = false;
  disableControl: boolean = false;

  floatLabel= 'auto';
  matcher = new MyErrorStateMatcher();

  get control() {
    return this.form.get('input');
  }

  get controlValue() {
    return this.form.value.input;
  }

  get controlLength() {
    return this.control?.value.length;
  }

  get errorMessage() {
    return this.control?.hasError('required') ? 'You must enter a value' : '';
  }

  constructor() { }

  ngOnInit() {
  }

  changeReadonlyState() {
    this.readonlyState = !this.readonlyState;
  }
  disable() {
    this.disableControl = ! this.disableControl;
  }

  resetControl() {
    this.reset.emit('input');
  }

}