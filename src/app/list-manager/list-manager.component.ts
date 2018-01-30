import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
    <div class="todo-app"> <h1 *ngIf="userLoggedIn">Welcome!</h1>
    <todo-input (submit)="addItem($event)"></todo-input>
    <ul>
      <li *ngFor="let item of todoList">
        <todo-item [todoItem]="item" (remove)="removeItem($event)" ></todo-item>
      </li>
    </ul></div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'todo';
  todoList: any;
  userLoggedIn = true;
  constructor(private todoListService: TodoListService) { }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }
  addItem(title: string) {
    this.todoList = this.todoListService.addItem({ title });
  }

}
