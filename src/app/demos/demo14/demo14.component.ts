import { Router } from '@angular/router';
import { FakeauthService } from './fakeauth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html',
  styleUrls: ['./demo14.component.scss']
})
export class Demo14Component {

  isConnected! : boolean

  listeArticle! :any[]

  constructor(
    private _service : FakeauthService,
    private _router : Router
  ){}

  ngOnInit(){
    this.listeArticle = this._service.listeArticle
    this.isConnected = this._service.isConnected

  }
  login() {
    this._service.login()
    this.isConnected = this._service.isConnected
  }

  logout() {
    this._service.logout()

    this.isConnected = this._service.isConnected
    this._router.navigate(["/demos/demo05"])
  }
}
