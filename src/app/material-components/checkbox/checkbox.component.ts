import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { materialModules } from '../../material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkbox',
   standalone: true,
   imports: [materialModules,
      ReactiveFormsModule,
      CommonModule,
      FormsModule
    ],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() form!: FormGroup;

  disableControl: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  disable() {
    this.disableControl = ! this.disableControl;
  }

  change(event: { checked: any; }) {
    console.log('checkbox : ', event.checked);
  }
}