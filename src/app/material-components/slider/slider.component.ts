import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { materialModules } from '../../material';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-slider',
   standalone: true,
   imports: [materialModules,
    ReactiveFormsModule,
     CommonModule,
    FormsModule
  ],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() form!: FormGroup;

  disableControl: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  disable() {
    this.disableControl = ! this.disableControl;
  }

  change(event: any) {
    console.log('slide : ', event.value);
  }

}