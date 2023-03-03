import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterSComponent } from './scatter-s.component';

describe('ScatterSComponent', () => {
  let component: ScatterSComponent;
  let fixture: ComponentFixture<ScatterSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScatterSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
