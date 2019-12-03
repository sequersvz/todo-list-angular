import { Component } from '@angular/core';

export interface todoItem {
  id: number,
  task: string,
  date: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  staticId: number = 1
  tasksArray : Array<todoItem> = []
  editValue : todoItem


  addTask(task: string){
    let taskItem = {
      id: this.staticId++,
      task,
      date: new Date().toLocaleString()
   }
   this.tasksArray = [...this.tasksArray, taskItem]
  }

  actionToDo(param: {action: string, id: number}){
    let funcToDo = {
      done: (id: number) => {
        this.tasksArray = this.tasksArray.filter(e => e.id !== id)
      },
      delete: (id: number) => {
        this.tasksArray = this.tasksArray.filter(e => e.id !== id)
      },
      edit: (id: number) => {
        this.editValue =  this.tasksArray.filter(e => e.id === id)[0]
        this.tasksArray = this.tasksArray.filter(e => e.id !== id)
      }
    }

    if(funcToDo.hasOwnProperty(param.action)){
      funcToDo[param.action](param.id)
    }

  }
}
