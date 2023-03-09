import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdownslist',
  templateUrl: './dropdownslist.component.html',
  styleUrls: ['./dropdownslist.component.scss']
})
export class DropdownslistComponent {
  public listItems: Array<string> = [
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "2X-Large",
  ];
}
