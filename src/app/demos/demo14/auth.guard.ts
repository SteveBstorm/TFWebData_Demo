import { FakeauthService } from './fakeauth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _auth : FakeauthService,
    private _router : Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

      if(!this._auth.isConnected)
        this._router.navigate(["demos/demo14"])
      return true
      //return this._auth.isConnected ? true : false

  }

}
