import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {TodoItem} from '../model/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listArray: TodoItem[]
  @Output() actionEv = new EventEmitter<{action: string, id: number}>()

  constructor() { }

  ngOnInit() {
  }

  public onEdit(id: number) {
    this.actionEv.emit({action: 'edit', id})
  }

  public onDone(id: number) {
    this.actionEv.emit({action: 'done', id})
  }

}
