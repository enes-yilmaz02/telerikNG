import { Component ,ViewEncapsulation} from '@angular/core';
export interface IButton {
  text: string;
  icon: string;
  color: string;
  selected?: boolean;
}
@Component({
  selector: 'app-button-collection',
  templateUrl: './button-collection.component.html',
  styleUrls: ['./button-collection.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonCollectionComponent {
  public status = "#10b507";
  public buttons = [
    { text: "Away", icon: "k-i-clock", color: "#f0c505" },
    {
      text: "Available",
      icon: "k-i-check-circle",
      color: "#10b507",
      selected: true,
    },
    { text: "Offline", icon: "k-i-x-circle", color: "#707070" },
    { text: "Do not disturb", icon: "k-i-minus-circle", color: "#e30000" },
  ];
  public img =
    "https://demos.telerik.com/kendo-ui/content/web/panelbar/nancy.jpg";

  public selectedChange(e: boolean, btn: IButton): void {
    this.status = btn.color;
  }
}
