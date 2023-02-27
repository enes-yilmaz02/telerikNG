import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCollectionComponent } from './button-collection.component';

describe('ButtonCollectionComponent', () => {
  let component: ButtonCollectionComponent;
  let fixture: ComponentFixture<ButtonCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
