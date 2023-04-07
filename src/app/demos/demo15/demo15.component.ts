import { ActivatedRoute } from '@angular/router';
import { PokeService } from './poke.service';
import { Component } from '@angular/core';
import { ErrorManager } from './errormanager';

@Component({
  selector: 'app-demo15',
  templateUrl: './demo15.component.html',
  styleUrls: ['./demo15.component.scss']
})
export class Demo15Component {

  constructor(private _poke : PokeService, private _ar: ActivatedRoute){}

  pokedex : any

  isLoading : boolean = true

  ngOnInit() {

    this.pokedex = this._ar.snapshot.data['monPokedex']
    // this._poke.getAll().subscribe({
    //   next : (data : any) => this.pokedex = data,
    //   error : (err) => {
    //     ErrorManager(err)
    //   },
    //   // complete : () => this.isLoading = false
    // })
  }
}
