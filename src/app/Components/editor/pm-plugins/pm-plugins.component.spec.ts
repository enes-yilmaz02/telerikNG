import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmPluginsComponent } from './pm-plugins.component';

describe('PmPluginsComponent', () => {
  let component: PmPluginsComponent;
  let fixture: ComponentFixture<PmPluginsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmPluginsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmPluginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
