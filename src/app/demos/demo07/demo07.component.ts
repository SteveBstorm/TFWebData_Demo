import { Component } from '@angular/core';

@Component({
  selector: 'app-demo07',
  templateUrl: './demo07.component.html',
  styleUrls: ['./demo07.component.scss']
})
export class Demo07Component {

  nbSecondes: number = 89999;

  myArray: any[] = [
    { id: '001', nom: 'Geerts', prenom: 'Quentin' },
    { id: '002', nom: 'Santos', prenom: 'Pierre' },
    { id: '003', nom: 'Person', prenom: 'Michaël' },
    { id: '004', nom: 'Legrain', prenom: 'Samuel' },
  ];

}
