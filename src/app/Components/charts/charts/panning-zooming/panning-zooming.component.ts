import { Component } from '@angular/core';
import { data } from 'src/app/Models/data';

@Component({
  selector: 'app-panning-zooming',
  templateUrl: './panning-zooming.component.html',
  styleUrls: ['./panning-zooming.component.scss']
})
export class PanningZoomingComponent {
  public data = data;

  public categoryAxis = {
    max: new Date(2000, 1, 0),
    maxDivisions: 10,
  };

  public valueAxis = {
    labels: {
      format: "#.00",
    },
  };
}
