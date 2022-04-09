import { Component } from '@angular/core';
import { TodoInterface } from 'src/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  textValue = ''
  todoList: TodoInterface[] = [
    {
      id: 1,
      name: "learn 1",
      date: new Date()
    },
    {
      id: 2,
      name: "learn 2",
      date: new Date()
    },
  ]

  addItem() {
    if (this.textValue) {
      const newItem = {
        id: this.todoList[this.todoList.length - 1].id + 1,
        name: this.textValue,
        date: new Date()
      }
      this.todoList.push(newItem)
      this.textValue = ''
    }
  }

  deleteItem(id: number) {
    this.todoList = this.todoList?.filter(item => item.id !== id)
  }
}
