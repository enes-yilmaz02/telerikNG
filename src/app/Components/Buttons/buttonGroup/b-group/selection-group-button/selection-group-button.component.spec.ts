import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionGroupButtonComponent } from './selection-group-button.component';

describe('SelectionGroupButtonComponent', () => {
  let component: SelectionGroupButtonComponent;
  let fixture: ComponentFixture<SelectionGroupButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionGroupButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionGroupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
