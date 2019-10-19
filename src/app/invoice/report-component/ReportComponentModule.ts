import {NgModule} from '@angular/core';
import {InvoiceModelModule} from '../../model/invoice-model/InvoiceModelModule';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ReportComponentComponent} from './report-component.component';


@NgModule({
  imports: [InvoiceModelModule, BrowserModule, FormsModule, RouterModule],
  declarations : [ReportComponentComponent],
  exports: [ReportComponentComponent]
})
export class ReportComponentModule {

}
