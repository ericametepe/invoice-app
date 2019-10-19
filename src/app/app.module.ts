import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InvoiceModelModule} from './model/invoice-model/InvoiceModelModule';
import {InvoiceListingModule} from './invoice/listing.invoice/listing/invoice-listing/invoice-listing.module';
import {InvoiceRegistrationModule} from './invoice/invoice.registration/InvoiceRegistrationModule';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {ReportComponentModule} from './invoice/report-component/ReportComponentModule';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {SharestateService} from './core/sharestate.service';
import { PreviewFileComponent } from './preview-file/preview-file.component';



@NgModule({
    imports: [
    BrowserModule,
    InvoiceModelModule,
    InvoiceListingModule,
    InvoiceRegistrationModule,
    AppRoutingModule,
    RouterModule,
    ReportComponentModule],
  declarations: [AppComponent, FooterComponent, HeaderComponent, PreviewFileComponent],
  providers: [{provide: SharestateService, useClass: SharestateService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
