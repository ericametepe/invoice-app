import {Customer} from './customer.model';


export class Invoice {
  constructor(public id?: String,
              public numerator ?: string,
              public month ?: number,
              public workeddays ?: number,
              public dailywage?: number,
              public year ?: number,
              public customer?: Customer,
              public customerName?: string,
              public customerAdress?: string,
              public customerVatnumber?: string,
              public status?: string) {}
}
