import { Component } from '@angular/core';
import { SeriesLabels } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent {
  public seriesData: number[] = [20, 40, 45, 30, 50];
  public categories: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  public seriesLabels: SeriesLabels = {
    visible: true, // Note that visible defaults to false
    padding: 3,
    font: "bold 16px Arial, sans-serif",
  };
}
