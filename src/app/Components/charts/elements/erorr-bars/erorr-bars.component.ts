import { Component } from '@angular/core';

@Component({
  selector: 'app-erorr-bars',
  templateUrl: './erorr-bars.component.html',
  styleUrls: ['./erorr-bars.component.scss']
})
export class ErorrBarsComponent {
  public data = [
    { x: 6.4, y: 13.4, xLow: 5, xHigh: 7, yLow: 12, yHigh: 14 },
    { x: 1.7, y: 11, xLow: 1, xHigh: 3, yLow: 11, yHigh: 14 },
    { x: 5.4, y: 8, xLow: 3, xHigh: 6, yLow: 5, yHigh: 8 },
  ];
}
