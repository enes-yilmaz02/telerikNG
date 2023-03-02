import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.scss']
})
export class ChartAreaComponent {
  public seriesData: number[] = [1, 2, 3, 5];
}
