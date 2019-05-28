import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunnerComponent } from './gunner.component';

describe('GunnerComponent', () => {
  let component: GunnerComponent;
  let fixture: ComponentFixture<GunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
