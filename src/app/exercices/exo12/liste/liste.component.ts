import { PersonneService } from './../personne.service';
import { Component } from '@angular/core';
import { Personne } from '../personne.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {

  listePersonne! : Personne[]

  constructor(private _service : PersonneService){}

  ngOnInit() {
    this.listePersonne = this._service.liste
  }
}
