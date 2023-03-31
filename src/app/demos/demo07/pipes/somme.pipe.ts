import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'somme'
})
export class SommePipe implements PipeTransform {

  transform(result: number, ...args: number[]): number {
    return args.reduce((accumulateur, valeur) => accumulateur + valeur, result);
  }

}
