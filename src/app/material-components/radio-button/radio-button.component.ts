import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { materialModules } from '../../material';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-radio-button',
   standalone: true,
   imports: [materialModules,
    ReactiveFormsModule,
     CommonModule,
    FormsModule
  ],
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {
  @Input() form!: FormGroup;

  selectedValue = '1';

  constructor() { }

  ngOnInit() {
  }

  changeGroup(selection: any) {
     this.selectedValue = selection.value;
    console.log('radio-button group :', selection.value);
  }

  changeButton(selection: any) {
    console.log('radio-button :', selection);
  }

}