import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(nbSecondes: number): string {

    let jours = Math.floor(nbSecondes / 86400);
    nbSecondes = nbSecondes - (jours * 86400);

    let heures = Math.floor(nbSecondes / 3600);
    nbSecondes = nbSecondes - (heures * 3600);

    let minutes = Math.floor(nbSecondes / 60);
    nbSecondes = nbSecondes - (minutes * 60);

    let secondes = nbSecondes;

    let format = ""

    // 2 jours, 01 heure, 02 minutes et 05 secondes

    format += `${jours} ${jours > 1 ? 'jours' : 'jour'}, `;
    format += `${heures < 10 ? '0' + heures : heures} ${heures > 1 ? 'heures' : 'heure'}, `;
    format += `${minutes < 10 ? '0' + minutes : minutes} ${minutes > 1 ? 'minutes' : 'minute'}, `;
    format += `${secondes < 10 ? '0' + secondes : secondes} ${secondes > 1 ? 'secondes' : 'seconde'},`;
    
    return format;
  }

}
