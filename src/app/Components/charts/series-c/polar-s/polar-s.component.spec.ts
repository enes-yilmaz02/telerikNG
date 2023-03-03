import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarSComponent } from './polar-s.component';

describe('PolarSComponent', () => {
  let component: PolarSComponent;
  let fixture: ComponentFixture<PolarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
