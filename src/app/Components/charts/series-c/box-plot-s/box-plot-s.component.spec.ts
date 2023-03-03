import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPlotSComponent } from './box-plot-s.component';

describe('BoxPlotSComponent', () => {
  let component: BoxPlotSComponent;
  let fixture: ComponentFixture<BoxPlotSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPlotSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxPlotSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
