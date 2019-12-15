import { Component, Input, Output, EventEmitter } from '@angular/core';

import {TodoItem, ActionEvObj} from '../model/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() listArray: TodoItem[];
  @Output() actionEv = new EventEmitter<ActionEvObj>();

  constructor() { }

  public onEdit(id: number): void {
    this.actionEv.emit({action: 'edit', id});
  }

  public onDone(id: number): void {
    this.actionEv.emit({action: 'done', id});
  }

}
