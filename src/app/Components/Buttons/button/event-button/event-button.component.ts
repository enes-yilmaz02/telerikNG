import { Component } from '@angular/core';

@Component({
  selector: 'app-event-button',
  templateUrl: './event-button.component.html',
  styleUrls: ['./event-button.component.scss']
})
export class EventButtonComponent {
  public events: string[] = [];

  public onClick(): void {
    this.log("click");
  }

  public onFocus(): void {
    this.log("focus");
  }

  public onBlur(): void {
    this.log("blur");
  }

  public selectedChange(): void {
    this.log("selectedChange");
  }

  private log(event: string): void {
    this.events.unshift(`${event}`);
  }
}
