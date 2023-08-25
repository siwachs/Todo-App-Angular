import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo = new Todo(0, '', '', false);
  @Input() index: number = 0;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoMarkDone: EventEmitter<Todo> = new EventEmitter();

  deleteMethod(todo: Todo) {
    // It use Output To parent component.
    this.todoDelete.emit(todo);
  }

  markAsDone(todo: Todo) {
    this.todoMarkDone.emit(todo);
  }
}
