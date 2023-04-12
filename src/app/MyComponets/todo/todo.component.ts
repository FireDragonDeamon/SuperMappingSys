import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

title = 'todo'
  constructor(){
    setTimeout(() => {
      this.title = "Chnaged" 
    }, 2000);
  }

}
