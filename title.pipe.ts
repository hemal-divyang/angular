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

//in html
<!--show mr / mrs before name-->

<div *ngFor="let p of person">
    {{p.name | title : p.gender}}
</div>
