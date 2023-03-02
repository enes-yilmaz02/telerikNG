import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent {
  public seriesData = {
    one: [
      [10, 10],
      [15, 20],
      [20, 25],
      [32, 40],
      [43, 50],
      [55, 60],
      [60, 70],
      [70, 80],
      [90, 100],
    ],
    two: [
      [10, 40],
      [17, 50],
      [18, 70],
      [35, 90],
      [47, 95],
      [60, 100],
    ],
  };
}
