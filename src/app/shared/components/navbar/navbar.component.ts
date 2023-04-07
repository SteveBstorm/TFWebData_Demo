import { FakeauthService } from './../../../demos/demo14/fakeauth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isConnected! : boolean

  constructor(private _auth : FakeauthService){}

  ngOnInit() {
    this.isConnected = this._auth.isConnected

    this._auth.isConnectedSubject.subscribe({
      next : (data : boolean) => this.isConnected = data
    })
  }
}
