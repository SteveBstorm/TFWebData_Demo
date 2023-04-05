import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _list : string[] = [];

  get list() : string[]{
    //Retourne la liste telle quel : mauvaise pratique, la liste n'est pas protégée...
    //return this._list;

    //Shadow-copy : Créer une copie de la liste, mais si il y a à l'intérieur de la liste des objets référenciels, ce seront bel et bien les même objets que l'on récupère...
    //reste dangereux car les modifications se font à l'extérieur du service
    //return [...this._list];

    //Deep-copy :  clonage du tableau en perdant toute références au tableau originel
    //Excellent si on veut protéger les données
    return JSON.parse(JSON.stringify(this._list));
  }

  constructor() { }

  get_one(index : number) : string{
    return this._list[index];
  }

  insert(new_todo : string):void{
    this._list.push(new_todo);
    console.log(this._list)
  }

  update(index : number, new_todo : string) : void{
    this._list[index] = new_todo;
  }

  delete(index : number):void{
    this._list.splice(index,1);
  }
}
