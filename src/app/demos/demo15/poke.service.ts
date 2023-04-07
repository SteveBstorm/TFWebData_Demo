import { delay, filter, map, mergeMap, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorManager } from './errormanager';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  url : string = "https://pokeapi.co/api/v2/pokemon"
  constructor(
    private _client : HttpClient
  ) { }

  getAll() : Observable<any> {
    return this._client.get<any>(this.url)
    .pipe(tap((data) => console.log(data.count)),
          delay(2000),
          // map((data : any)=> {
          //   new
          // })
          // mergeMap((data) => {return this._client.get("autreurl", data.results.url)}),
          // filter((data) => data != null)
    )

  }
}
