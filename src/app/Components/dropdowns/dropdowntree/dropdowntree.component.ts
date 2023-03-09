import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdowntree',
  templateUrl: './dropdowntree.component.html',
  styleUrls: ['./dropdowntree.component.scss']
})
export class DropdowntreeComponent {
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
