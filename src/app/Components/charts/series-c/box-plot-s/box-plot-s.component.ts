import { Component } from '@angular/core';
import { BoxPlotData, ozoneData } from 'src/app/Models/ozane.model';

@Component({
  selector: 'app-box-plot-s',
  templateUrl: './box-plot-s.component.html',
  styleUrls: ['./box-plot-s.component.scss']
})
export class BoxPlotSComponent {
  public data: BoxPlotData[] = ozoneData;
}
