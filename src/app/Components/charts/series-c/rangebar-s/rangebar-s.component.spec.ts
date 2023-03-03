import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangebarSComponent } from './rangebar-s.component';

describe('RangebarSComponent', () => {
  let component: RangebarSComponent;
  let fixture: ComponentFixture<RangebarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangebarSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangebarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
