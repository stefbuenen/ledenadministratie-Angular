import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedenrollenComponent } from './ledenrollen.component';

describe('LedenrollenComponent', () => {
  let component: LedenrollenComponent;
  let fixture: ComponentFixture<LedenrollenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedenrollenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedenrollenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
