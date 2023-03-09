import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowntreeComponent } from './dropdowntree.component';

describe('DropdowntreeComponent', () => {
  let component: DropdowntreeComponent;
  let fixture: ComponentFixture<DropdowntreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdowntreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdowntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
