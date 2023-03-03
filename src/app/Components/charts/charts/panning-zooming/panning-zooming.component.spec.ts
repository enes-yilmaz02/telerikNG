import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanningZoomingComponent } from './panning-zooming.component';

describe('PanningZoomingComponent', () => {
  let component: PanningZoomingComponent;
  let fixture: ComponentFixture<PanningZoomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanningZoomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanningZoomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
