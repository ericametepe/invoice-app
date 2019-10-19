import { InvoiceListingModule } from './invoice-listing.module';

describe('InvoiceListingModule', () => {
  let invoiceListingModule: InvoiceListingModule;

  beforeEach(() => {
    invoiceListingModule = new InvoiceListingModule();
  });

  it('should create an instance', () => {
    expect(invoiceListingModule).toBeTruthy();
  });
});
