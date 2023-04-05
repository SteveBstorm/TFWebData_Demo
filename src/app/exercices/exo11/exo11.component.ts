import { Component, OnInit } from '@angular/core';
import { Article } from '../exo09/article.model';
import { PanierService } from './services/panier.service';

@Component({
  selector: 'app-exo11',
  templateUrl: './exo11.component.html',
  styleUrls: ['./exo11.component.scss']
})
export class Exo11Component implements OnInit{
  panier: Article[] = [];

  name_product! : string;
  qty_product! : number;

  constructor(private _panier_serv : PanierService){}

  ngOnInit(): void {
    this.qty_product = 1;
    this.panier = this._panier_serv.panier;
  }

  addItem():void{
    if(!this.name_product || this.name_product.trim().length <= 0) return;
    if(this.qty_product < 1) return;
    let article : Article = {name: this.name_product.trim(), qty : this.qty_product, dateAdd: new Date()};
    try{
      this._panier_serv.insert(article);
    }
    catch{
      this._panier_serv.update(article.name, article);
    }
    this.name_product = "";
    this.qty_product = 1;

    const html_input_name : HTMLInputElement = document.getElementById("name_product") as HTMLInputElement;
    html_input_name.focus();
    this.refresh();
  }

  refresh(){
    this.panier = this._panier_serv.panier;
  }
}
