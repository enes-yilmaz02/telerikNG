import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivetoolbarComponent } from './responsivetoolbar.component';

describe('ResponsivetoolbarComponent', () => {
  let component: ResponsivetoolbarComponent;
  let fixture: ComponentFixture<ResponsivetoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsivetoolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsivetoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
