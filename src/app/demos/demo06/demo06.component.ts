import { Component } from '@angular/core';
import localeFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-demo06',
  templateUrl: './demo06.component.html',
  styleUrls: ['./demo06.component.scss']
})
export class Demo06Component {

  maVariable1: string = "Hello TOUT le monde !";
  maVariable2: number = 12345.6789;
  maVariable3: Date = new Date();
  maVariable4: number = 0.8656325;
  maVariable5: string[] = ["Poivre", "Sel", "Sucre", "Epices"];
  maVariable6: {} = { nom: "Geerts", prenom: "Quentin" };

}
