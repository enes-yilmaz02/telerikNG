import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSComponent } from './bar-s.component';

describe('BarSComponent', () => {
  let component: BarSComponent;
  let fixture: ComponentFixture<BarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
