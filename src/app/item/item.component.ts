import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <input type="checkbox" (click)="completeItem()"/>
    <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">
      {{ todoItem.title }}
    </p>
    <button (click)="removeItem()">
      remove
    </button>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  isComplete: boolean = false;

  completeItem() {
    this.isComplete = !this.isComplete;
  }

  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Input() todoItem: any;

  removeItem() {
    this.remove.emit(this.todoItem);
  }

  constructor() { }

  ngOnInit() {
  }

}
