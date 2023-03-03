import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfallSComponent } from './waterfall-s.component';

describe('WaterfallSComponent', () => {
  let component: WaterfallSComponent;
  let fixture: ComponentFixture<WaterfallSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterfallSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterfallSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
