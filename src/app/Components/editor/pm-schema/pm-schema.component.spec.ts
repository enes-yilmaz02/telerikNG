import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmSchemaComponent } from './pm-schema.component';

describe('PmSchemaComponent', () => {
  let component: PmSchemaComponent;
  let fixture: ComponentFixture<PmSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmSchemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
