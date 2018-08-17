import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VogregistratiesComponent } from './vogregistraties.component';

describe('VogregistratiesComponent', () => {
  let component: VogregistratiesComponent;
  let fixture: ComponentFixture<VogregistratiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VogregistratiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VogregistratiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
