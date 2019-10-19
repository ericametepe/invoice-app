import {Component, Inject, OnInit} from '@angular/core';
import {InvoiceRepository} from '../../model/invoice-model/invoice.repository';
import {Invoice} from '../../model/invoice-model/invoice.model';
import {NgForm} from '@angular/forms';
import {LoggerService} from '../../core/logger.service';
import {MODE, SharestateService} from '../../core/sharestate.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.registration.component.html',
  styleUrls: ['./invoice.registration.component.css']
})
export class InvoiceRegistrationComponent implements OnInit {
  invoice: Invoice = new Invoice();
  editing = false;
  constructor(private repository: InvoiceRepository, private logger: LoggerService,  private stateEvent: SharestateService) {

  }

  ngOnInit(): void {
    this.stateEvent.currentMessage.subscribe(message => {
      console.log(`F-201910 : why is so difficult to share date in Angularrrrrrrrrrrrrrrrrrrrrrrrrrrrrr =========${message.key}`);
      if (typeof message.key !== 'undefined') {
        console.log(`F-201910 : not UNDEFINED **************** ${message.key}`);
        this.invoice = new Invoice();
        const invFound = this.stateEvent.invoices.find(value1 => value1.id === message.key);
       Object.assign(this.invoice, invFound);
        console.log(`F-201910 : source  **************** ${JSON.stringify(invFound)}`);
        console.log(`F-201910 : target  **************** ${JSON.stringify(this.invoice)})`);
      }
      this.editing = message.mode === MODE.EDIT;
    });
  }


  addInvoice(invoice: Invoice) {
    this.logger.log(`New ìnvoice to Save ${JSON.stringify(invoice)}`);
    if (this.editing) {
      this.repository.update(invoice).subscribe(value => console.log('ok'));
    } else {
    this.repository.save(invoice).subscribe(result => console.log('ok'));
    }
  }

  findInvoiceByID(key: string) {
    return this.stateEvent.invoices.find(value => value.id === key);
  }


  submitForm(form: NgForm) {
    if (form.valid) {
      this.addInvoice(this.invoice);
      form.reset();
    } else {
      this.logger.log('========== BAD THINGS OCCUR ========');
    }
  }

  resetForm() {
    this.invoice = new Invoice();
  }



}
