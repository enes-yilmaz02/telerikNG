import { Component } from '@angular/core';
import { SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-donut-s',
  templateUrl: './donut-s.component.html',
  styleUrls: ['./donut-s.component.scss']
})
export class DonutSComponent {
  public data = [
    {
      kind: "Hydroelectric",
      share: 0.175,
    },
    {
      kind: "Nuclear",
      share: 0.238,
    },
    {
      kind: "Coal",
      share: 0.118,
    },
    {
      kind: "Solar",
      share: 0.052,
    },
    {
      kind: "Wind",
      share: 0.225,
    },
    {
      kind: "Other",
      share: 0.192,
    },
  ];

  public labelContent(e: SeriesLabelsContentArgs): string {
    return e.category;
  }
}
