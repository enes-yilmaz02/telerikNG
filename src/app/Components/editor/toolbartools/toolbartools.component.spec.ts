import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbartoolsComponent } from './toolbartools.component';

describe('ToolbartoolsComponent', () => {
  let component: ToolbartoolsComponent;
  let fixture: ComponentFixture<ToolbartoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbartoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbartoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
