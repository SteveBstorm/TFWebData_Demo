import { Component, EventEmitter, Output } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent {
  author! : string;
  content! : string;

  @Output() new_message_emitter : EventEmitter<Message> = new EventEmitter<Message>();

  onSend(){
    let new_message : Message = {autor : this.author, content : this.content, date : new Date()};
    this.new_message_emitter.next(new_message);
  }
}
