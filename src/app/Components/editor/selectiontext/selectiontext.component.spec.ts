import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectiontextComponent } from './selectiontext.component';

describe('SelectiontextComponent', () => {
  let component: SelectiontextComponent;
  let fixture: ComponentFixture<SelectiontextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectiontextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectiontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
