import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NChipComponent } from './n-chip.component';

describe('NChipComponent', () => {
  let component: NChipComponent;
  let fixture: ComponentFixture<NChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
