import {NgModule} from '@angular/core';
import {InvoiceModelModule} from '../../model/invoice-model/InvoiceModelModule';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {InvoiceRegistrationComponent} from './invoice.registration.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [InvoiceModelModule, BrowserModule, FormsModule, RouterModule],
    declarations : [InvoiceRegistrationComponent],
  exports: [InvoiceRegistrationComponent]
})
export class InvoiceRegistrationModule {}
