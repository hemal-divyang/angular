//PIPE

//pipes allow us to change the data before display
// inbuild pipes are: 
Uppercase - ex. {{user.id | uppercase}}
Lowercase - ex. {{user.name | lowercase}}
titlecase - ex. {{user.city | uppercase}}
Date - ex. {{user.date | date:'dd/mm/yyyy}}
Currency - ex. {{user.salary | currency:'INR':'3.3-3'}}
Percent - ex. {{user.result | percent}}
Number 
Slice - ex. {{user.id | slice:0:1}}
Json - ex. {{user|json}}
Async - to handle asynchronus data

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value:any,args?:any){
	let curetnYear = new Date().getFullYear();
	let userBirthYear = new Date(value).getFullYear();
	let userAge = curetnYear - userBirthYear;
	return userAge;
}

}

//in html
<!--show user age-->

<div *ngFor="let p of person">
    {{p.dob | age}}
</div>
