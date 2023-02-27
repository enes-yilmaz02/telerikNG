import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationQRComponent } from './validation-qr.component';

describe('ValidationQRComponent', () => {
  let component: ValidationQRComponent;
  let fixture: ComponentFixture<ValidationQRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationQRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
