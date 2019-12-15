import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import {TodoItem} from '../model/item.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() inputEvent = new EventEmitter<string>();
  @Input() editValue: TodoItem;
  inputValue: string;

  constructor() {}

  ngOnInit(): void {
    this.inputValue = '';
  }

  public onSubmit(): void {
    if (this.inputValue.length >= 1) {
      this.inputEvent.emit(this.inputValue);
      this.inputValue = '';
    }
  }

}
