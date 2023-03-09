import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselecttreeComponent } from './multiselecttree.component';

describe('MultiselecttreeComponent', () => {
  let component: MultiselecttreeComponent;
  let fixture: ComponentFixture<MultiselecttreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselecttreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiselecttreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
