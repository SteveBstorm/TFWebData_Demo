import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-exo09',
  templateUrl: './exo09.component.html',
  styleUrls: ['./exo09.component.scss']
})
export class Exo09Component {

  article: Article = { name: 'Poire', qty: 1, dateAdd: new Date() }

}
