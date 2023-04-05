import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  list : string[] = [];

  constructor(private _todo_serv : TodoService){}

  ngOnInit(): void {
    //récupère liste de tâches
    this.list = this._todo_serv.list;
  }


}
