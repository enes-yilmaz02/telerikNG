import { Component } from '@angular/core';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent {
  public dialogOpened = false;
  public windowOpened = false;

  public close(component: string): void {
    this[component + "Opened"] = false;
  }

  public open(component: string): void {
    this[component + "Opened"] = true;
  }

  public action(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.dialogOpened = false;
  }
}
