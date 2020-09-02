import { BtntooltipDirective } from './btntooltip.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TooltipbuttonsComponent } from './tooltipbuttons/tooltipbuttons.component';
import { StateService } from './state.service';
import { By } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-test',
  template: `  <div class="button">
    <button class="btn" appTooltip="Button test">Click Me 1!</button>
  </div>`,
  styles: []
})
class TestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}


describe('BtntooltipDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testBedService: StateService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TooltipbuttonsComponent,
        BtntooltipDirective,
        TestComponent
      ],
      providers: [
        StateService
      ]
    }).overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [TooltipbuttonsComponent], declarations: [] } });

    fixture = TestBed.createComponent(TestComponent);
    testBedService = TestBed.get(StateService);
    fixture.detectChanges();
  });
  it('TestDirective should add appBtntooltip class to parent element', () => {
    const parentEl = fixture.debugElement.query(By.css('.button'));
    expect((parentEl.nativeElement as HTMLElement).classList.contains('appBtntooltip')).toBeTruthy();
  });
  it('Test button onclick event handler', () => {
    const buttonEl = fixture.debugElement.query(By.css('button'));
    (buttonEl.nativeElement as HTMLElement).click();
    fixture.detectChanges();
    expect(testBedService.selectedButton).toBe('Button test');
  });
});
