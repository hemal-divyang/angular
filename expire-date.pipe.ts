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

@Pipe({ name: 'expiredPipe' })
export class ExipredPipe implements PipeTransform {
    constructor() {}
    transform(data): any {
        const date = new Date();
        data = new Date(data);
        data.setDate(new Date(data).getDate() + 1);
        return data > new Date(`${(date.getMonth() + 1)}/${(date.getDate())}/${(date.getFullYear())}`) ? '' : 'expired';
        // return date;
    }
}

//in html
<!--show user age-->

<div *ngFor="let data of playlist">
    {{data?.expiryDate | expiredPipe}}
</div>
