import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  isConnected! : boolean

  listeArticle : any[] = [
    {nom : "Pc", prix : 800},
    {nom : "Mac", prix : 8000},
    {nom : "Smartphone", prix : 500},
  ]

  constructor() { }

  login() {
    this.isConnected = true
  }

  logout() {
    this.isConnected = false
  }

  getByIndex(index : number) : any {
    return this.listeArticle[index]
  }
}
