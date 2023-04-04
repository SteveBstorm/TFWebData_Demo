import { Component, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent {
  @Input() message! : Message;
}
