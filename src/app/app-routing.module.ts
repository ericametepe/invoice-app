import {RouterModule, Routes} from '@angular/router';
import {ListingComponent} from './invoice/listing.invoice/listing/listing.component';
import {InvoiceRegistrationComponent} from './invoice/invoice.registration/invoice.registration.component';
import {NgModule} from '@angular/core';
import {ReportComponentComponent} from './invoice/report-component/report-component.component';
import {PreviewFileComponent} from './preview-file/preview-file.component';


 const appRoutes: Routes = [
    {
     path : 'invoices/register',
     component : InvoiceRegistrationComponent
   },
   {
     path: '',
     component : ListingComponent
   },
   {
     path: 'invoices/report',
     component : ReportComponentComponent
   } ,
   {
     path: 'invoices/preview',
     component : PreviewFileComponent
   }
    ];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
  export class AppRoutingModule {}



