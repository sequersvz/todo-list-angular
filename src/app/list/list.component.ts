import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {todoItem} from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listArray: Array<todoItem>;
  @Output() actionEv = new EventEmitter<{action: string, id: number}>();

  constructor() { }

  ngOnInit() {
  }

  onEdit(id: number) {
    this.actionEv.emit({action: 'edit', id});
  }

  onDone(id: number) {
    this.actionEv.emit({action: 'done', id});
  }

  onDelete(id: number) {
    this.actionEv.emit({action: 'delete', id});
  }

}
