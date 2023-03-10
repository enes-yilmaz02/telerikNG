import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsluebindingComponent } from './vsluebinding.component';

describe('VsluebindingComponent', () => {
  let component: VsluebindingComponent;
  let fixture: ComponentFixture<VsluebindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsluebindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsluebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
