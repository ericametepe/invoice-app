import {Component, Inject, OnInit} from '@angular/core';
import {Invoice} from '../../../model/invoice-model/invoice.model';
import {InvoiceRepository} from '../../../model/invoice-model/invoice.repository';
import {MODE, ShareState, SharestateService} from '../../../core/sharestate.service';
import {element} from 'protractor';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  invoices: Invoice[] = new Array<Invoice>();



  constructor(private invoiceRepository: InvoiceRepository,  private observer: SharestateService) { }

  ngOnInit() {
    this.invoiceRepository.getAll().subscribe(value => {
      this.invoices = value;
    });
  }
  updatable(id: string): boolean {
   return  this.invoices.findIndex(inv =>  inv.id === id && inv.status !== '02') > -1;
  }
  delete(id: string) {
    this.invoiceRepository.deleteInvoice(id).subscribe(() => {
      const index = this.invoices.findIndex(item => item.id === id);
      this.invoices.splice(index, 1);
    });
  }

  edit(id: string) {
    this.observer.changeMessage(new ShareState(MODE.EDIT, id));
  }
  duplicate(id: string) {
    this.observer.changeMessage(new ShareState(MODE.DUPLICATE, id));
  }

  displayPDF(key: string): void {
    let pdfFile = this.observer.getFile(key);

    console.log(`pdf ========== ${pdfFile}`);
    // otherwise only Chrome works like it should
    if (pdfFile) {
      const newBlob = new Blob([(pdfFile)], { type: 'application/pdf' });
      const downloadURL = window.URL.createObjectURL(newBlob);
      window.open(downloadURL);
      pdfFile = null;
      window.URL.revokeObjectURL(downloadURL);
    } else {
      return;
    }
    }

}
