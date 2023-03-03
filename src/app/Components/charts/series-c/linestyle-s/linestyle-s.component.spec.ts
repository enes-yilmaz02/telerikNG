import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinestyleSComponent } from './linestyle-s.component';

describe('LinestyleSComponent', () => {
  let component: LinestyleSComponent;
  let fixture: ComponentFixture<LinestyleSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinestyleSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinestyleSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
