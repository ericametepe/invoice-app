import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './invoice.registration.component';
import {Invoice} from '../../model/invoice-model/invoice.model';

describe('Invoice.RegistrationComponent', () => {
  let component: Invoice.RegistrationComponent;
  let fixture: ComponentFixture<Invoice.RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Invoice.RegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Invoice.RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
