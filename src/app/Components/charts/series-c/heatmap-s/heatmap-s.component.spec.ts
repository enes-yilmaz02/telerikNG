import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapSComponent } from './heatmap-s.component';

describe('HeatmapSComponent', () => {
  let component: HeatmapSComponent;
  let fixture: ComponentFixture<HeatmapSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatmapSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatmapSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
