import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  isConnected : boolean = JSON.parse(localStorage.getItem('isConnected') ?? 'false')

  //isConnectedSubject : Subject<boolean> = new Subject<boolean>()
  isConnectedSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected)

  listeArticle : any[] = [
    {nom : "Pc", prix : 800},
    {nom : "Mac", prix : 8000},
    {nom : "Smartphone", prix : 500},
  ]

  constructor() { }

  login() {
    this.isConnected = true
    sessionStorage.setItem('isConnected', JSON.stringify(this.isConnected))
    localStorage.setItem('isConnected', JSON.stringify(this.isConnected))
    this.isConnectedSubject.next(this.isConnected)

  }

  logout() {
    this.isConnected = false
    localStorage.clear()
    localStorage.removeItem('isConnected')
    this.isConnectedSubject.next(this.isConnected)

  }

  getByIndex(index : number) : any {
    return this.listeArticle[index]
  }
}
