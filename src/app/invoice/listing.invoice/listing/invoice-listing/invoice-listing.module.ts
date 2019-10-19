import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListingComponent} from '../listing.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {InvoiceModelModule} from '../../../../model/invoice-model/InvoiceModelModule';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [InvoiceModelModule, BrowserModule, FormsModule, CommonModule, RouterModule],
  declarations : [ListingComponent],
  exports: [ListingComponent]
})
export class InvoiceListingModule { }
