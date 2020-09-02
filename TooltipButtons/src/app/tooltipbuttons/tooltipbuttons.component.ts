import { Component, OnInit, Input, ElementRef, HostListener} from '@angular/core';
import { StateService } from '../state.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-tooltipbuttons',
  templateUrl: './tooltipbuttons.component.html',
  styleUrls: ['./tooltipbuttons.component.scss']
})
export class TooltipbuttonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
