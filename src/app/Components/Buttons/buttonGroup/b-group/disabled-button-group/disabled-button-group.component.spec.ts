import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledButtonGroupComponent } from './disabled-button-group.component';

describe('DisabledButtonGroupComponent', () => {
  let component: DisabledButtonGroupComponent;
  let fixture: ComponentFixture<DisabledButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledButtonGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisabledButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
