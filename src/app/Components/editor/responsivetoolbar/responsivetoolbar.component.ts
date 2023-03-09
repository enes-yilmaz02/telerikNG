import { Component } from '@angular/core';

@Component({
  selector: 'app-responsivetoolbar',
  templateUrl: './responsivetoolbar.component.html',
  styleUrls: ['./responsivetoolbar.component.scss']
})
export class ResponsivetoolbarComponent {
  public opened = true;
  public dataSent = false;

  public splitButtonData: Array<{ text: string; icon: string }> = [
    {
      text: "Keep Text Only",
      icon: "clipboard-text",
    },
    {
      text: "Paste as HTML",
      icon: "clipboard-code",
    },
    {
      text: "Paste Markdown",
      icon: "clipboard-markdown",
    },
  ];

  public dropdownButtonData: Array<{ text: string; icon: string }> = [
    {
      text: "Keep Text Only",
      icon: "clipboard-text",
    },
    {
      text: "Paste as HTML",
      icon: "clipboard-code",
    },
    {
      text: "Paste Markdown",
      icon: "clipboard-markdown",
    },
  ];

  public value = `Resize the window to see how ToolBar's items are shown or hidden according to the available space.`;

  public close(): void {
    this.dataSent = false;
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  public send(): void {
    this.dataSent = true;
    this.opened = false;
  }
}
