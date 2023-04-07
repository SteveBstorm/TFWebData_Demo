import { Router } from '@angular/router';
import { Personne } from './personne.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  liste : Personne[] = []

  constructor(
    private _router : Router
  ) { }

  getByIndex(index : number) : Personne {
    return this.liste[index]
  }

  addPersonne(newP : Personne) {
    this.liste.push(newP)
    this._router.navigate(["exos/listepersonne"])
  }
}
