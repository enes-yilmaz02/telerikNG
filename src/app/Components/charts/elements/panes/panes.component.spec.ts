import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanesComponent } from './panes.component';

describe('PanesComponent', () => {
  let component: PanesComponent;
  let fixture: ComponentFixture<PanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
