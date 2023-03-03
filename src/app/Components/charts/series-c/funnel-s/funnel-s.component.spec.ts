import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnelSComponent } from './funnel-s.component';

describe('FunnelSComponent', () => {
  let component: FunnelSComponent;
  let fixture: ComponentFixture<FunnelSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunnelSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunnelSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
