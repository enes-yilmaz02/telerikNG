import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparanceComponent } from './apparance.component';

describe('ApparanceComponent', () => {
  let component: ApparanceComponent;
  let fixture: ComponentFixture<ApparanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApparanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApparanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
