import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getById'
})
export class GetByIdPipe implements PipeTransform {

  transform(value: any[], id: string, prop: string): any {

    if (!Array.isArray(value)) return value;

    const foundObj = value.find(obj => obj.id === id);

    return foundObj ? foundObj[prop] : '';
  }

}
