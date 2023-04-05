import { Article } from './../../exo09/article.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _panier : Article[] = []

  get panier() : Article[] {
    return JSON.parse(JSON.stringify(this._panier));
  }

  constructor() { }

  get_one(article_name : string): Article{
    let article : Article| undefined = this._panier.find(a => a.name == article_name);
    if(!article) throw new Error(`No article named ${article_name}`);
    return article;
  }

  insert(article : Article): void{
    let old_article :Article | undefined = this._panier.find(a => a.name == article.name);
    if(old_article) throw new Error(`There is already a article named ${article.name}`)
    this._panier.push(article);
  }

  update(article_name: string, article : Article) : void{
    // let old_article :Article | undefined = this._panier.find(a => a.name == article_name);
    // if(!old_article) throw new Error(`No article named ${article_name}`);
    let old_article = this.get_one(article_name);
    old_article.name = article.name;
    old_article.qty = article.qty;
    old_article.dateAdd = article.dateAdd;
  }

  delete(article_name : string):void{
    let old_article = this.get_one(article_name);
    this._panier = this._panier.filter(a => a.name != article_name);
  }

  lessQty(article_name : string):void{
    let article = this.get_one(article_name);
    article.qty --;
    if (article.qty <= 0) this.delete(article_name);
  }

  moreQty(article_name : string):void{
    let article = this.get_one(article_name);
    article.qty ++;
  }
}
