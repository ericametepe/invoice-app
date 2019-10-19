import { Component, OnInit } from '@angular/core';
import {InvoiceRepository} from '../../model/invoice-model/invoice.repository';
import {SaleItem} from '../../model/invoice-model/SaleItem';


@Component({
  selector: 'app-report-component',
  templateUrl: './report-component.component.html',
  styleUrls: ['./report-component.component.css']
})
export class ReportComponentComponent implements OnInit {
  sales: SaleItem[] = new Array<SaleItem>();

  constructor(private repository: InvoiceRepository) { }
  ngOnInit() {
    this.repository.getAllReport().subscribe(value => this.sales = value);
  }

}
