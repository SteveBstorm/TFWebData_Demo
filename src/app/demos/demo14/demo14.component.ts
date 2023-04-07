import { Router } from '@angular/router';
import { FakeauthService } from './fakeauth.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html',
  styleUrls: ['./demo14.component.scss']
})
export class Demo14Component {

  isConnected! : boolean

  listeArticle! :any[]

  isConnectedSub! : Subscription

  constructor(
    private _service : FakeauthService,
    private _router : Router
  ){}

  ngOnInit(){
    this.listeArticle = this._service.listeArticle
    //this.isConnected = JSON.parse(localStorage.getItem('isConnected') ?? 'false')
    //this.isConnected = this._service.isConnected
    this.isConnectedSub = this._service.isConnectedSubject.subscribe({
      next : (data :boolean) => this.isConnected = data,
      error : () => console.log("erreur"),
      complete : () => console.log("fin de vie")
    })

  }

  ngOnDetroy() {
    this.isConnectedSub.unsubscribe()

  }

  annuler() {
  }

  login() {
    this._service.login()
    //this.isConnected = this._service.isConnected
  }

  logout() {
    this._service.logout()

    //this.isConnected = this._service.isConnected
    //this._router.navigate(["/demos/demo05"])
  }
}
