import { Component, TemplateRef } from '@angular/core';
import {  WindowService } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent {
  constructor(private windowService: WindowService) {}

  public items = ["Apples", "Juice", "Eggs", "Bread"];

  public showList(template: TemplateRef<unknown>): void {
    this.windowService.open({
      title: "My List",
      content: template,
      width: 250,
      height: 230,
    });
  }
}
