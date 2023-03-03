import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarSComponent } from './radar-s.component';

describe('RadarSComponent', () => {
  let component: RadarSComponent;
  let fixture: ComponentFixture<RadarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
