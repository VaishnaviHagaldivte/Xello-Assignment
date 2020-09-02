import { Directive, Input, ElementRef, HostListener, Renderer2, Component } from '@angular/core';
import * as _ from 'lodash';

@Directive({
  selector: '[app-tooltip]'
})
export class BtntooltipDirective {
  @Input('app-tooltip') tooltipTitle: string;
  @Input() placement: string;
  @Input() delay: string;
  tooltip: HTMLElement;
  offset = 10;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }
  private clickedInside = false;

  @HostListener('click')
  clickInside() {
    if (!this.tooltip) { this.show(); }
    this.clickedInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.clickedInside) {
      if (this.tooltip) { this.hide(); }
    }
    this.clickedInside = false;
  }

  @HostListener('document:keyup', ['$event']) keyUp(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      event.stopPropagation();
      this.hide();
    }
  }

  show() {
    this.create();
    this.setPosition();
    this.renderer.addClass(this.tooltip, 'showtooltip');
  }

  hide() {
    this.renderer.removeClass(this.tooltip, 'showtooltip');
    window.setTimeout(() => {
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    });
  }

  create() {
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle) 
    );

    this.renderer.appendChild(document.body, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');
    this.renderer.addClass(this.tooltip, `ng-tooltip-${this.placement}`);
    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);
  }

  setPosition() {
    const hostPos = this.elementRef.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltip.getBoundingClientRect();
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    if (this.placement === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    }
    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }
}
