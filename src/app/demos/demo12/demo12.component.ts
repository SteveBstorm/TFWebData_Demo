import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  providers: [TodoService],
  selector: 'app-demo12',
  templateUrl: './demo12.component.html',
  styleUrls: ['./demo12.component.scss']
})
export class Demo12Component {
  show : boolean = true;


  refresh(){
    //Solution temporaire
    setTimeout(()=>this.show= false , 100);
    setTimeout(()=>this.show= true , 100);
  
    //La vraie solution réside à l'utilisation de BehaviorSubject
    //Vue dans les chapitres suivant
  }
}
