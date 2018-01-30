import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';
const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable()
export class TodoListStorageService {

  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }

  /**
   * get items
   * @returns {any[]}
   */
  get() {
    return [...this.todoList];
  }

  /**
   * Add a new todo item
   * @param item
   * @returns {any[]}
   */
  post(item) {
    this.todoList.push(item);
    return this.update();
  }

  /**
   * Syncronize the local storage with the current list
   * @returns {any[]}
   */
  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }

  /**
   * find the index of an item in the array
   * @param item
   * @returns {number}
   */
  private findItemIndex(item) {
    return this.todoList.indexOf(item);
  }
  /**
   * Update an existing item
   * @param item
   * @param changes
   * @returns {any[]}
   */
  put(item, changes) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }
  /**
   * Remove an item from the list
   * @param item
   * @returns {any[]}
   */
  destroy(item) {
    this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();
  }
}
