import { Component } from '@angular/core';

@Component({
  selector: 'app-axes',
  templateUrl: './axes.component.html',
  styleUrls: ['./axes.component.scss']
})
export class AxesComponent {
  public seriesData: number[] = [20, 40, 45, 30, 50];
  public categories: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];
}
