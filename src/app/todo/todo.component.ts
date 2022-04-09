import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoInterface } from 'src/interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todoList: TodoInterface[] = []
  @Output() onDeleteItem = new EventEmitter<number>();

  editMode = false

  delete(id: number) {
    this.onDeleteItem.emit(id)
  }

  changeEditMode() {
    this.editMode = !this.editMode
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
