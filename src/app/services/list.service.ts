// import { Injectable } from '@angular/core';
import {TodoItem} from '../model/item.model';


export class ListService {
  public TodoList: TodoItem[] = [
    {
      id: 1,
      task: 'saludos desde services',
      date: new Date().toLocaleString()
    }
  ];
  private staticId: number = this.TodoList.length + 1;

  public getList(): TodoItem[] {
    return this.TodoList;
  }

  public add(task: string): void {

  this.TodoList = [...this.TodoList, {
    id: this.staticId++,
    task,
    date: new Date().toLocaleString()
  }];

}

  public done(id: number): void {
    this.TodoList = this.TodoList.filter(e => e.id !== id);
  }

  public edit(id: number): TodoItem {
    const valToEdit = this.TodoList.filter(e => e.id === id)[0];
    this.TodoList = this.TodoList.filter(e => e.id !== id);
    return valToEdit;
  }

}
