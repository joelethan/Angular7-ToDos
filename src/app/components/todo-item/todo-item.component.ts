import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private TodoService:TodoService) { }

  ngOnInit() {
  }

  //set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    //Toggle in UI
    todo.completed = !todo.completed;
    //Toggle on server
    this.TodoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    })
  }

  onDelete(todo){
    this.deleteTodo.emit(todo)
  }

}
