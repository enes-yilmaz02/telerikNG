import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownslistComponent } from './dropdownslist.component';

describe('DropdownslistComponent', () => {
  let component: DropdownslistComponent;
  let fixture: ComponentFixture<DropdownslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
