import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newTodo: Todo;
  todos: Todo[] = [];
  constructor() {
    this.todos.push(new Todo('Was geht '));
    this.todos.push(new Todo('Was geht 2!'));
    this.todos.push(new Todo('Moin!'));
    this.newTodo = new Todo('');
  }

  ngOnInit() {
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;
  }

  save() {
    this.todos.push(this.newTodo);
    this.newTodo = new Todo('');
  }

  delete(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}
