import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { materialModules } from '../../material';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-slide',
   standalone: true,
   imports: [materialModules,
    ReactiveFormsModule,
     CommonModule,
    FormsModule
  ],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() form!: FormGroup;

  disableControl: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  disable() {
    this.disableControl = ! this.disableControl;
  }

  change(event: { checked: any; }) {
    console.log('slide : ', event.checked);
  }

}