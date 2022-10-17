import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cssflex',
  templateUrl: './cssflex.component.html',
  styleUrls: ['./cssflex.component.scss'],
})
export class CssflexComponent implements OnInit {
  isSmallScreen?: Boolean;
  constructor(private breakPointObserver: BreakpointObserver) {}

  ngOnInit() {
    // state observation
    this.isSmallScreen =
      this.breakPointObserver.isMatched('max-width : 599 px');

    console.log(this.isSmallScreen);

    // dynamically observation
    this.breakPointObserver
      .observe('(orientation: portrait)')
      .subscribe((result) => {
        console.log(`{portrait: ${result.matches}`);
      });

    this.breakPointObserver
      .observe('(orientation: landscape)')
      .subscribe((result) => {
        console.log(`{landscape: ${result.matches}`);
      });
  }
}
