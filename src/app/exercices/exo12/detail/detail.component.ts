import { ActivatedRoute, Router } from '@angular/router';
import { PersonneService } from './../personne.service';
import { Personne } from './../personne.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  currentPersonne! : Personne
  parentComponent : any
  constructor(
    private _personne : PersonneService,
    private _ar : ActivatedRoute,
    private _router : Router
  ){}

  ngOnInit() {
    let index = this._ar.snapshot.params["index"]
    this.parentComponent = this._ar.url
    console.log(this.parentComponent)
    this.currentPersonne = this._personne.getByIndex(index)
  }

  retour() {
    //this._router.navigate(['/exos/listepersonne'])
    history.back()
  }
}
