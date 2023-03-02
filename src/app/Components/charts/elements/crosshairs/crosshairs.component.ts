import { Component } from '@angular/core';

@Component({
  selector: 'app-crosshairs',
  templateUrl: './crosshairs.component.html',
  styleUrls: ['./crosshairs.component.scss']
})
export class CrosshairsComponent {
  public crosshair = {
    visible: true,
    tooltip: {
      visible: true,
      format: "#.##",
    },
  };
}
