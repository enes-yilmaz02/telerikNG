import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSComponent } from './bubble-s.component';

describe('BubbleSComponent', () => {
  let component: BubbleSComponent;
  let fixture: ComponentFixture<BubbleSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
