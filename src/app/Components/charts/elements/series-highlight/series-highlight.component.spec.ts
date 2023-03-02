import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesHighlightComponent } from './series-highlight.component';

describe('SeriesHighlightComponent', () => {
  let component: SeriesHighlightComponent;
  let fixture: ComponentFixture<SeriesHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
