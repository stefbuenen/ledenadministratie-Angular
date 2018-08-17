import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrijwilligersrollenComponent } from './vrijwilligersrollen.component';

describe('VrijwilligersrollenComponent', () => {
  let component: VrijwilligersrollenComponent;
  let fixture: ComponentFixture<VrijwilligersrollenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrijwilligersrollenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrijwilligersrollenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
