import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GlobalComponent {
  public imageUrl =
  "https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png";

public fabItems: Array<{ icon: string; label: string }> = [
  { icon: "google", label: "Google" },
  { icon: "reddit", label: "Reddit" },
  { icon: "dribbble", label: "Dribbble" },
];

public splitButtonItems: Array<{
  text: string;
  icon?: string;
  click?: () => void;
}> = [
  {
    text: "Keep Text Only",
    icon: "clipboard-text",
    click: (): void => {
      console.log("Keep Text Only click handler");
    },
  },
  {
    text: "Paste as HTML",
    icon: "clipboard-code",
  },
  {
    text: "Paste Markdown",
    icon: "clipboard-markdown",
  },
  {
    text: "Set Default Paste",
  },
];

public dropDownButtonItems: Array<{ text: string }> = [
  {
    text: "My Profile",
  },
  {
    text: "Friend Requests",
  },
  {
    text: "Account Settings",
  },
  {
    text: "Support",
  },
  {
    text: "Log Out",
  },
];

public chips: Array<{ label: string; iconClass: string }> = [
  {
    label: "Pedro Afonso",
    iconClass: "k-chip-avatar pedro",
  },
  {
    label: "Thomas Hardy",
    iconClass: "k-chip-avatar thomas",
  },
  {
    label: "Christina Berg",
    iconClass: "k-chip-avatar christina",
  },
  {
    label: "Paula Wilson",
    iconClass: "k-chip-avatar paula",
  },
];

public onSplitButtonClick(): void {
  console.log("Paste");
}

public onSplitButtonItemClick(dataItem: { text: string }): void {
  if (dataItem) {
    console.log(dataItem.text);
  }
}

public onButtonClick(): void {
  console.log("click");
}
}
