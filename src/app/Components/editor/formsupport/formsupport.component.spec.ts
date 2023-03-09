import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsupportComponent } from './formsupport.component';

describe('FormsupportComponent', () => {
  let component: FormsupportComponent;
  let fixture: ComponentFixture<FormsupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
