import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {

  transform(temps: number): string {

    let seconds = temps % 60;
    let minutes = Math.floor(temps / 60);

    let format = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    return format;
  }

}
