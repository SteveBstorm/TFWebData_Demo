import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent {
  todo! : string;
  @Output() refresh_emitter : EventEmitter<null> = new EventEmitter();

  constructor(private _todo_serv : TodoService){

  }

  add():void{
    //sauvegarder dans la liste des tâches
    this._todo_serv.insert(this.todo);
    this.refresh_emitter.next(null);
    this.todo = "";
  }
}
