import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/exercices/exo09/article.model';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-exo11-list-item',
  templateUrl: './exo11-list-item.component.html',
  styleUrls: ['./exo11-list-item.component.scss']
})
export class Exo11ListItemComponent implements OnInit {
  item! : Article;
  @Input() article_name! : string;
  @Output() refresh_emitter : EventEmitter<null> = new EventEmitter();

  constructor(private _panier_serv : PanierService){}

  ngOnInit(): void {
    this.item = this._panier_serv.get_one(this.article_name);
  }

  lessItem():void{
    //demande de diminuer la quantité au service
    this._panier_serv.lessQty(this.item.name);
    this.refresh_emitter.next(null);
  }
  
  moreItem():void{
    //demande de augmenter la quantité au service
    this._panier_serv.moreQty(this.item.name);
    this.refresh_emitter.next(null);
  }
  
  delItem():void{
    //demande de suppression au service
    this._panier_serv.delete(this.item.name);
    this.refresh_emitter.next(null);
  }
}
