import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;

  private itemContainer: any;
  private scrollContainer: any;
  private items = [];
  private isNearBottom = true;

  constructor(private router:Router) {}

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame.nativeElement;
  }

  goToKnowMore(routeTo: string):void {
    this.router.navigate([`${routeTo}`])
    this.scrollToBottom()
  }
  private scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
}
