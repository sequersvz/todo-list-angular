import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import {TodoItem} from '../model/item.model';
import {ListService} from '../services/list.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  inputValue: string;
  @Output() inputEvent = new EventEmitter<string>();
  @Input() editValue: TodoItem;

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.inputValue = '';
  }

  public onSubmit() {
    if (this.inputValue.length >= 1) {
      this.inputEvent.emit(this.inputValue);
      this.inputValue = '';
    }
  }

}
