import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumArray'
})
export class SumArrayPipe implements PipeTransform {

  transform(result: number, args: number[]): number {
    return args.reduce((accumulateur, valeur) => accumulateur + valeur, result);
  }

}
