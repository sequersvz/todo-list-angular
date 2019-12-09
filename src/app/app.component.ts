import { Component, OnInit, DoCheck } from '@angular/core';

import {TodoItem} from './model/item.model';
import { ListService } from './services/list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck {
  test = 1;
  tasksArray: TodoItem[];
  editValue: TodoItem;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.onGetList();
  }

  ngDoCheck(): void {
    if (this.tasksArray.length !== this.listService.TodoList.length) {
      this.onGetList();
      console.log(this.test++);
    }
  }

  private onGetList(): void {
    this.tasksArray = this.listService.getList();
  }


  public addTask(task: string): void {
    this.listService.add(task);
  }

  public actionToDo(param: {action: string, id: number}) {

    if (param.action === 'done') {this.listService.done(param.id); } else {
      this.editValue = this.listService.edit(param.id);
    }

  }
}
