import { Injectable } from '@angular/core';
import {Invoice} from './invoice.model';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SaleItem} from './SaleItem';


@Injectable()
export class InvoiceRepository {

  private INVOICE_URL: string;
  private INVOICE_UPDATE_URL: string;
  private REPORT_URL: string;

  constructor(private http: HttpClient) {
    this.INVOICE_URL = 'http://localhost:8080/invoices';
    this.REPORT_URL = 'http://localhost:8080/invoices/report';
    this.INVOICE_UPDATE_URL = '';
  }

  public save(invoice: Invoice) {
    return this.http.post<Invoice>(this.INVOICE_URL, invoice);
  }

  public  getAll():  Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.INVOICE_URL);
  }
  public  getAllReport():  Observable<SaleItem[]> {
    return this.http.get<SaleItem[]>(this.REPORT_URL);
  }
  public  deleteInvoice(id: string) {
    console.log('Running ????? ' + this.INVOICE_URL + '/' + id);
    const url = `${this.INVOICE_URL}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.delete(url);
  }

  public findById(key: string): Observable<Invoice> {
    const url = `${this.INVOICE_URL}/${key}`;
    return this.http.get<Invoice>(url);

  }

  private handleError(deleteHero: string) {
    return function (p1: any, p2: Observable<Object>) {
      return undefined;
    };
  }


  update(invoice: Invoice) {
    const url = `${this.INVOICE_URL}/${invoice.id}`;
    return this.http.put<Invoice>(url, invoice);
  }

  generateFile(key: String): Observable<any> {
    const url = `${this.INVOICE_URL}/${key}/preview`;
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('content-type', 'application/pdf');
    return this.http.get(url, {headers: headers, responseType: 'blob'});

  }
}

