import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {InvoiceRepository} from './invoice.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [InvoiceRepository]
})
export class InvoiceModelModule {}
