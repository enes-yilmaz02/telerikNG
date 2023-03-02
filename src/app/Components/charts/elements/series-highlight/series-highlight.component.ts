import { Component } from '@angular/core';
import { SeriesHighlight } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-series-highlight',
  templateUrl: './series-highlight.component.html',
  styleUrls: ['./series-highlight.component.scss']
})
export class SeriesHighlightComponent {
  public data = [
    [1, "Foo"],
    [2, "Bar"],
    [3, "Baz"],
  ];

  public seriesHighlight: SeriesHighlight = {
    // Pie series draw an overlay with the same shape as the pie segment.
    color: "#000",
    opacity: 0.75,
    border: {
      width: 1,
      color: "#000",
      opacity: 0.5,
    },
  };
}
