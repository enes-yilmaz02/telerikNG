import { Component } from '@angular/core';

@Component({
  selector: 'app-funnel-s',
  templateUrl: './funnel-s.component.html',
  styleUrls: ['./funnel-s.component.scss']
})
export class FunnelSComponent {
  public model = [
    {
      stat: "Impressions ",
      count: 434823,
      color: "#0e5a7e",
    },
    {
      stat: "Clicks",
      count: 356854,
      color: "#166f99",
    },
    {
      stat: "Unique Visitors",
      count: 280022,
      color: "#2185b4",
    },
    {
      stat: "Downloads",
      count: 190374,
      color: "#319fd2",
    },
    {
      stat: "Purchases",
      count: 120392,
      color: "#3eaee2",
    },
  ];
}
