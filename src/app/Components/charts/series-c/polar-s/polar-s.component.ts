import { Component } from '@angular/core';
import { SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-polar-s',
  templateUrl: './polar-s.component.html',
  styleUrls: ['./polar-s.component.scss']
})
export class PolarSComponent {
  public sunPosData = [
    { time: "08:00", altitude: 4.9, azimuth: 92.7 },
    { time: "09:00", altitude: 17.6, azimuth: 100.6 },
    { time: "10:00", altitude: 30.1, azimuth: 109.7 },
    { time: "11:00", altitude: 41.8, azimuth: 121.3 },
    { time: "12:00", altitude: 51.8, azimuth: 137.7 },
    { time: "13:00", altitude: 58.5, azimuth: 161.5 },
    { time: "14:00", altitude: 59.4, azimuth: 190.7 },
    { time: "15:00", altitude: 54.1, azimuth: 216.6 },
    { time: "16:00", altitude: 44.8, azimuth: 234.8 },
    { time: "17:00", altitude: 33.5, azimuth: 247.6 },
    { time: "18:00", altitude: 21.2, azimuth: 257.2 },
    { time: "19:00", altitude: 8.4, azimuth: 265.3 },
  ];

  public labelContent(e: SeriesLabelsContentArgs): string {
    return `${e.dataItem.time.substring(0, 2)}h`;
  }
}
