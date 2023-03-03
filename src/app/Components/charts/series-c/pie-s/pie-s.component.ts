import { Component } from '@angular/core';
import { SeriesLabelsAlignment, SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-pie-s',
  templateUrl: './pie-s.component.html',
  styleUrls: ['./pie-s.component.scss']
})
export class PieSComponent {
  public labelAlign: SeriesLabelsAlignment = "column";
  public data = [
    {
      kind: "Solar",
      share: 5,
    },
    {
      kind: "Wind",
      share: 2,
    },
    {
      kind: "Geothermal",
      share: 1,
    },
    {
      kind: "Natural Gas",
      share: 1,
    },
    {
      kind: "Coal",
      share: 80,
    },
    {
      kind: "Hydroelectric",
      share: 2,
    },
    {
      kind: "Nuclear",
      share: 2,
    },
    {
      kind: "Other",
      share: 1,
    },
  ];

  public labelContent(e: SeriesLabelsContentArgs): string {
    return e.category;
  }
}
