import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieSComponent } from './pie-s.component';

describe('PieSComponent', () => {
  let component: PieSComponent;
  let fixture: ComponentFixture<PieSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
