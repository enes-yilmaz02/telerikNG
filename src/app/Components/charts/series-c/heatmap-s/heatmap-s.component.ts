import { Component } from '@angular/core';
import { data } from 'src/app/Models/commit.model';
const dayLabels: { [index: number]: string } = {
  1: "Mon",
  3: "Wed",
  5: "Fri",
};
@Component({
  selector: 'app-heatmap-s',
  templateUrl: './heatmap-s.component.html',
  styleUrls: ['./heatmap-s.component.scss']
})
export class HeatmapSComponent {
  public commitData = data();

  public yAxisLabelContent = (e: { value: string }): string => {
    return dayLabels[e.value] || "";
  };
}
