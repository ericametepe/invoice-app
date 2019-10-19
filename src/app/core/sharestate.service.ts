import {Injectable, InjectionToken} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {InvoiceRepository} from '../model/invoice-model/invoice.repository';
import {Invoice} from '../model/invoice-model/invoice.model';

export  enum MODE {
  EDIT,
  DUPLICATE,
  PREVIEW
}

@Injectable({
  providedIn: 'root'
})
export class SharestateService {
  invoices:  Array<Invoice>;
  pdfFile: any;
  private messageSource = new BehaviorSubject<ShareState>(new ShareState());

  currentMessage = this.messageSource.asObservable();

  constructor(public repository: InvoiceRepository) {
    this.repository.getAll().subscribe(value => {
      this.invoices = value;
    });
  }

  getFile(key: string): any {
    this.repository.generateFile(key).subscribe(data => {
      this.pdfFile = data;
    });
    return this.pdfFile;
  }

  changeMessage(message: ShareState) {
    this.messageSource.next(message);
  }
}



export class ShareState {
  constructor(public mode?: MODE, public key?: string) {}
}
