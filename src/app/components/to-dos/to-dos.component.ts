import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {
  todos: Todo[];

  constructor(private TodoServic:TodoService) { }

  ngOnInit() {
    this.TodoServic.getTodos().subscribe(todos =>{
      this.todos = todos;
    });
  }

}
