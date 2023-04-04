import { Component } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.scss']
})
export class Demo11Component {
  public messages : Message[] = [];

  constructor(){
    this.messages.push({autor:"Prof",content:"Voici les notes de cours concernant l'@Input et l'@output!", date : new Date(2023,3,4,12,3,0)});
    this.messages.push({autor:"Elèves",content:"Merci mais j'ai toujours rien compris...", date : new Date(2023,3,4,12,5,0)});
  }

  addMessage(new_message : Message) : void{
    this.messages.push(new_message);
  }
}
