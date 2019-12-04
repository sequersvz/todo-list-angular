import { Component } from '@angular/core';

export interface TodoItem {
  id: number;
  task: string;
  date: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  staticId = 1;
  tasksArray: Array<TodoItem> = [];
  editValue: TodoItem;


  addTask(task: string) {
    const taskItem = {
      id: this.staticId++,
      task,
      date: new Date().toLocaleString()
   };
    this.tasksArray = [...this.tasksArray, taskItem];
  }

  actionToDo(param: {action: string, id: number}) {
    const funcToDo = {
      done: (id: number) => {
        this.tasksArray = this.tasksArray.filter(e => e.id !== id);
      },
      delete: (id: number) => {
        this.tasksArray = this.tasksArray.filter(e => e.id !== id);
      },
      edit: (id: number) => {
        this.editValue =  this.tasksArray.filter(e => e.id === id)[0];
        this.tasksArray = this.tasksArray.filter(e => e.id !== id);
      }
    };

    if (funcToDo.hasOwnProperty(param.action)) {
      funcToDo[param.action](param.id);
    }

  }
}
