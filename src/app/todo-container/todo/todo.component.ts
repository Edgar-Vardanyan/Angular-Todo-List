import {Component, Input, OnInit} from '@angular/core';

import { TodoService } from "../../todo.service";
import {SearchInputService} from "../../search-input.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public todoList = []

  constructor(private todos: TodoService, public searchInput: SearchInputService) { }

  ngOnInit(): void {
  this.todoList = this.todos.todos
  }

  public toggleDone(index:number):void {
    this.todoList.forEach((el, i) => {
      if (i === index) el.completed = !el.completed
    })
  }

  public removeTodo(index: number) {
    this.todoList.splice(index, 1)
  }

}
