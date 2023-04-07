import { FakeauthService } from './../fakeauth.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cible',
  templateUrl: './cible.component.html',
  styleUrls: ['./cible.component.scss']
})
export class CibleComponent {

  article! : any
  constructor(
    private _service : FakeauthService,
    private _ar : ActivatedRoute
  ){}

  ngOnInit() {
    let index = this._ar.snapshot.params["index"]
    this.article = this._service.getByIndex(index)
  }
}
