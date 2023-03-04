import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiviewCalendarComponent } from './multiview-calendar.component';

describe('MultiviewCalendarComponent', () => {
  let component: MultiviewCalendarComponent;
  let fixture: ComponentFixture<MultiviewCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiviewCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiviewCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
