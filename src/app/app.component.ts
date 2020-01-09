import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

import {TodoItem, ActionEvObj} from './model/item.model';
import { ListService } from './services/list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  tasksArray: TodoItem[];
  editValue: TodoItem;
  private listSubscription: Subscription;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.onGetList();
    this.listSubscription = this.listService.listEvent.subscribe((listItem: TodoItem[]) => {
      this.tasksArray = listItem;
    });
  }

  ngOnDestroy(): void {
    this.listSubscription.unsubscribe();
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
