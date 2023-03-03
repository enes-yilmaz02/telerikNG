import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCComponent } from './series-c.component';

describe('SeriesCComponent', () => {
  let component: SeriesCComponent;
  let fixture: ComponentFixture<SeriesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
