import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErorrBarsComponent } from './erorr-bars.component';

describe('ErorrBarsComponent', () => {
  let component: ErorrBarsComponent;
  let fixture: ComponentFixture<ErorrBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErorrBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErorrBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
