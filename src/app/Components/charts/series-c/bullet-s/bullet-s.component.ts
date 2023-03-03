import { Component } from '@angular/core';
import { PlotBand } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-bullet-s',
  templateUrl: './bullet-s.component.html',
  styleUrls: ['./bullet-s.component.scss']
})
export class BulletSComponent {
  public hidden: { visible: boolean } = { visible: false };
  public tempPlotBands: PlotBand[] = [
    {
      from: 30,
      to: 45,
      color: "#e62325",
      opacity: 1,
    },
    {
      from: 15,
      to: 30,
      color: "#ffc000",
      opacity: 1,
    },
    {
      from: 0,
      to: 15,
      color: "#37b400",
      opacity: 1,
    },
    {
      from: -10,
      to: 0,
      color: "#5392ff",
      opacity: 1,
    },
  ];
  public humPlotBands: PlotBand[] = [
    {
      from: 0,
      to: 33,
      color: "#ccc",
      opacity: 0.6,
    },
    {
      from: 33,
      to: 66,
      color: "#ccc",
      opacity: 0.3,
    },
  ];
  public mmhgPlotBands: PlotBand[] = [
    {
      from: 715,
      to: 752,
      color: "#ccc",
      opacity: 0.6,
    },
    {
      from: 752,
      to: 772,
      color: "#ccc",
      opacity: 0.3,
    },
  ];
  public temp = [[25, 22]];
  public hum = [[45, 60]];
  public mmhg = [[750, 762]];
}
