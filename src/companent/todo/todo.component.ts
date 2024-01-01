import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todos: Todo[] = [];

  constructor(private todoServices: TodoService) { }
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.todoServices.getAll().subscribe(result => {
      this.todos = result["todos"];
    })
  }

}
