import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedendetailsComponent } from './ledendetails.component';

describe('LedendetailsComponent', () => {
  let component: LedendetailsComponent;
  let fixture: ComponentFixture<LedendetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedendetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedendetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
