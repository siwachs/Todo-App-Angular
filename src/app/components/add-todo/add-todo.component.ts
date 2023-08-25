import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title!: String;
  desc!: String;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  submitTodo() {
    if (!this.title) {
      return;
    }
    console.log('trigger title is ', this.title);
    const todo = {
      sno: 1,
      title: this.title,
      desc: this.desc,
      active: true,
    };

    this.todoAdd.emit(todo);
  }
}
