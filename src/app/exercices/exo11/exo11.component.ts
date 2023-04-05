import { Component } from '@angular/core';
import { Article } from '../exo09/article.model';

@Component({
  selector: 'app-exo11',
  templateUrl: './exo11.component.html',
  styleUrls: ['./exo11.component.scss']
})
export class Exo11Component {
  article: Article = { name: 'Poire', qty: 1, dateAdd: new Date() }

  panier: Article[] = [];

  name_product! : string;
  qty_product : number;

  constructor(){
    this.qty_product = 1;
  }

  addItem():void{
    if(!this.name_product || this.name_product.trim().length <= 0) return;
    if(this.qty_product < 1) return;
    let index : number = this.panier.findIndex(a => a.name ==this.name_product);
    if( index < 0)
      this.panier.push(
        { name: this.name_product.trim(), qty: this.qty_product, dateAdd: new Date() }
      );
    else
        this.panier[index].qty += this.qty_product;
    this.name_product = "";
    this.qty_product = 1;

    const html_input_name = document.getElementById("name_product");
    html_input_name?.focus();
  }

  delItem(article : Article):void{
    this.panier = this.panier.filter(a => a != article);
  }

  delItemWithIndex(index : number):void{
    this.panier.splice(index,1);
  }

  lessItem(index : number):void{
    this.panier[index].qty --;
    if(this.panier[index].qty <= 0) this.delItemWithIndex(index);
  }

  moreItem(index : number):void{
    this.panier[index].qty ++;
  }
}
