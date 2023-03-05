import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomElementsComponent } from './dom-elements.component';

describe('DomElementsComponent', () => {
  let component: DomElementsComponent;
  let fixture: ComponentFixture<DomElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
