import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { TodoService } from "../todo.service";
import {SearchInputService} from "../search-input.service";

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {
  inputText = ''
  searchText = ''

  constructor(private todo:TodoService, private searchInput: SearchInputService) { }

  ngOnInit(): void {
  }

  public addTodo() {
    if(this.inputText !== '') {
      this.todo.todos.push(
        {
          content: this.inputText,
          completed: false
        }
      )
      this.inputText = ''
    }
  }

  public searchTodo() {
    this.searchInput.searchInput = this.searchText
  }

}
