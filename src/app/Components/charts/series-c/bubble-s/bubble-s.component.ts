import { Component } from '@angular/core';
import { PlotBand } from '@progress/kendo-angular-charts';
import { jobsData, JobsData } from 'src/app/Models/jobs.model';

@Component({
  selector: 'app-bubble-s',
  templateUrl: './bubble-s.component.html',
  styleUrls: ['./bubble-s.component.scss']
})
export class BubbleSComponent {
  public data: JobsData[] = jobsData;
  public xPlotBands: PlotBand[] = [
    {
      from: -5000,
      to: 0,
      color: "#00f",
      opacity: 0.05,
    },
  ];
}
