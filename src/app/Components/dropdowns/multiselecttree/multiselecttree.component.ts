import { Component } from '@angular/core';

@Component({
  selector: 'app-multiselecttree',
  templateUrl: './multiselecttree.component.html',
  styleUrls: ['./multiselecttree.component.scss']
})
export class MultiselecttreeComponent {
  public data: any[] = [
    {
      text: "Furniture",
      id: 1,
      items: [
        { text: "Tables & Chairs", id: 2 },
        { text: "Sofas", id: 3 },
        { text: "Occasional Furniture", id: 4 },
      ],
    },
    {
      text: "Decor",
      id: 5,
      items: [
        { text: "Bed Linen", id: 6 },
        { text: "Carpets", id: 7 },
      ],
    },
  ];
}
