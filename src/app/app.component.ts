import { Component, OnInit, DoCheck } from '@angular/core';

import {TodoItem, ActionEvObj} from './model/item.model';
import { ListService } from './services/list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck {
  tasksArray: TodoItem[];
  editValue: TodoItem;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.onGetList();
  }

  ngDoCheck(): void {
    if (this.tasksArray.length !== this.listService.TodoList.length) {
      this.onGetList();
    }
  }

  private onGetList(): void {
    this.tasksArray = this.listService.getList();
  }


  public addTask(task: string): void {
    this.listService.add(task);
  }

  public actionToDo(param: ActionEvObj): void {

    param.action === 'done' ? this.listService.done(param.id) : (this.editValue = this.listService.edit(param.id));

  }
}
