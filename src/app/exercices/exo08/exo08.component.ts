import { Component } from '@angular/core';

@Component({
  selector: 'app-exo08',
  templateUrl: './exo08.component.html',
  styleUrls: ['./exo08.component.scss']
})
export class Exo08Component {

  min: number = 50;
  max: number = 250;

  longueur: number = 50;
  largeur: number = 50;
  couleur: string = "#000000";

  borderWidth: number = 1;

  isCircle: boolean = false;

  style: any = {
    'width': this.largeur + 'px',
    'height': this.longueur + 'px',
    'background-color': this.couleur,

    'border': this.borderWidth + 'px solid black'
  };

  update (): void {
    this.style = {
      'width': this.largeur + 'px',
      'height': this.longueur + 'px',
      'background-color': this.couleur,

      'border': this.borderWidth + 'px solid black'
    };
  }

}
