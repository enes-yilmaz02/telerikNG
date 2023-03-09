import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticolumncomboboxComponent } from './multicolumncombobox.component';

describe('MulticolumncomboboxComponent', () => {
  let component: MulticolumncomboboxComponent;
  let fixture: ComponentFixture<MulticolumncomboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticolumncomboboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MulticolumncomboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
