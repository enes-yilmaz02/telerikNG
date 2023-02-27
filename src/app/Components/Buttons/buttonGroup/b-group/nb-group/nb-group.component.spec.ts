import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbGroupComponent } from './nb-group.component';

describe('NbGroupComponent', () => {
  let component: NbGroupComponent;
  let fixture: ComponentFixture<NbGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
