import { Injectable } from '@angular/core';

interface Todo {
  content: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todos: Todo[] = [
    {
      content: 'First Todo',
      completed: false
    },
    {
      content: 'Second Todo',
      completed: false
    },
    {
      content: 'Third Todo',
      completed: false
    }
  ]
  constructor() { }

}
