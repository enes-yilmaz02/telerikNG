import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBarcodeComponent } from './option-barcode.component';

describe('OptionBarcodeComponent', () => {
  let component: OptionBarcodeComponent;
  let fixture: ComponentFixture<OptionBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionBarcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
