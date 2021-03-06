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
  deleteTodo(todo: Todo){
    // Remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Remove from server
    this.TodoServic.deleteTodo(todo).subscribe();
  }
  addTodo(todo:Todo){
    this.TodoServic.addTodo(todo).subscribe(todo=>{
      this.todos.push(todo)
    })
  }
}
