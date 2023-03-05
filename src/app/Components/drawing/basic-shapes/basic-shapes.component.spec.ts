import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicShapesComponent } from './basic-shapes.component';

describe('BasicShapesComponent', () => {
  let component: BasicShapesComponent;
  let fixture: ComponentFixture<BasicShapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicShapesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
