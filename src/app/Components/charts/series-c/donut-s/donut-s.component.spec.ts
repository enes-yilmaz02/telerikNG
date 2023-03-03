import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutSComponent } from './donut-s.component';

describe('DonutSComponent', () => {
  let component: DonutSComponent;
  let fixture: ComponentFixture<DonutSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
