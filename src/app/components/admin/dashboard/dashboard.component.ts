import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { materialModules } from '../../../material';
import { BrowserModule } from '@angular/platform-browser';
import { SliderComponent } from '../../../material-components/slider/slider.component';
import { InputComponent } from '../../../material-components/input/input.component';
import { TextareaComponent } from '../../../material-components/textarea/textarea.component';
import { SelectComponent } from '../../../material-components/select/select.component';
import { CheckboxComponent } from '../../../material-components/checkbox/checkbox.component';
import { RadioButtonComponent } from '../../../material-components/radio-button/radio-button.component';
import { SlideComponent } from '../../../material-components/slide/slide.component';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [materialModules,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    SliderComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    CheckboxComponent,
    RadioButtonComponent,
    SlideComponent,
    NgxPrintModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {
  
  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      input: ['', [Validators.required]],
      textarea: ['My textarea', [Validators.required]],
      select: ['', [Validators.required]],
      checkbox: ['', [Validators.required]],
      radio: ['', Validators.required],
      slide: [true, Validators.required],
      slider: ['30', Validators.required]
    })
  }

  resetControl(control: string) {
    this.form?.get(control)?.reset('');
  }

  print() {
    alert("print");
  }


}