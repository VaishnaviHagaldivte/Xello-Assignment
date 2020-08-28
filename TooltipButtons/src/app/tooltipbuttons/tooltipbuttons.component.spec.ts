import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipbuttonsComponent } from './tooltipbuttons.component';

describe('TooltipbuttonsComponent', () => {
  let component: TooltipbuttonsComponent;
  let fixture: ComponentFixture<TooltipbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
