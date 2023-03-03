import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSComponent } from './area-s.component';

describe('AreaSComponent', () => {
  let component: AreaSComponent;
  let fixture: ComponentFixture<AreaSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
