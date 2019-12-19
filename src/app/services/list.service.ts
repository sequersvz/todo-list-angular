import { EventEmitter } from '@angular/core';
import {TodoItem} from '../model/item.model';


export class ListService {
  public listEvent = new EventEmitter<TodoItem[]>();
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

  this.TodoList.push({
      id: this.staticId++,
      task,
      date: new Date().toLocaleString()
    });

  this.listEvent.emit(this.TodoList);
}

  public done(id: number): void {
    this.TodoList = this.TodoList.filter(e => e.id !== id);
    this.listEvent.emit(this.TodoList);
  }

  public edit(id: number): TodoItem {
    const valToEdit = this.TodoList.filter(e => e.id === id)[0];
    this.TodoList = this.TodoList.filter(e => e.id !== id);
    this.listEvent.emit(this.TodoList);
    return valToEdit;
  }

}
