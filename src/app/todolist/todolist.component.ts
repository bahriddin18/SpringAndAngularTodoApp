import {Component, OnInit} from '@angular/core';

export class Todo {
  constructor(
    public rate: number,
    public name: string,
    public love: boolean,
    public date: Date
  ) {
  }

}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos = [
    new Todo(1, 'Attack on Titan', true, new Date()),
    new Todo(2, 'Naruto', true, new Date()),
    new Todo(3, 'Bleach', true, new Date()),
    new Todo(4, 'Code Geese', true, new Date()),
    new Todo(5, 'Your Name', true, new Date()),
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
