import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletSComponent } from './bullet-s.component';

describe('BulletSComponent', () => {
  let component: BulletSComponent;
  let fixture: ComponentFixture<BulletSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulletSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
