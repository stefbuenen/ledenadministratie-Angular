import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributierecordsComponent } from './contributierecords.component';

describe('ContributierecordsComponent', () => {
  let component: ContributierecordsComponent;
  let fixture: ComponentFixture<ContributierecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributierecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributierecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
