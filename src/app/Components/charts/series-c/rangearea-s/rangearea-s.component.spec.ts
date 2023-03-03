import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeareaSComponent } from './rangearea-s.component';

describe('RangeareaSComponent', () => {
  let component: RangeareaSComponent;
  let fixture: ComponentFixture<RangeareaSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeareaSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeareaSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
