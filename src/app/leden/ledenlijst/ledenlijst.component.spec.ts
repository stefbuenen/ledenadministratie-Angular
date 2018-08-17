import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedenlijstComponent } from './ledenlijst.component';

describe('LedenlijstComponent', () => {
  let component: LedenlijstComponent;
  let fixture: ComponentFixture<LedenlijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedenlijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedenlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
