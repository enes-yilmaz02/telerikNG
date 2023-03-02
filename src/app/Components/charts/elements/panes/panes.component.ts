import { Component } from '@angular/core';

@Component({
  selector: 'app-panes',
  templateUrl: './panes.component.html',
  styleUrls: ['./panes.component.scss']
})
export class PanesComponent {
  public seriesData: number[][] = [
    [1, 2, 3, 5],
    [0, 1, 0, 1],
  ];
}
