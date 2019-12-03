import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import {todoItem} from '../app.component'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  inputValue: string
  @Output() inputEvent = new EventEmitter<string>()
  @Input() editValue : todoItem

  constructor() { 
    this.inputValue = ''
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.inputValue.length >= 1){
      this.inputEvent.emit(this.inputValue)
      this.inputValue = ''
    }
  }

}
