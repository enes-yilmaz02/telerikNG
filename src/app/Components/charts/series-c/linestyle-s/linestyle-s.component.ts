import { Component } from '@angular/core';
import { LineStyle } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-linestyle-s',
  templateUrl: './linestyle-s.component.html',
  styleUrls: ['./linestyle-s.component.scss']
})
export class LinestyleSComponent {
  public style: LineStyle = "normal";
}
