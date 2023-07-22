import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(name: string, gender: string): unknown {
    if (gender === 'female') {
      return 'mrs' + ' ' + name;
    } else {
      return 'mr' + ' ' + name
    }
  }

}
