import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponent {
  @Input() title: string;
  @Input() events: string[];

  public logEvents(event: string, i: number): string {
    return `${this.events.length - i}. ${event}`;
  }
}
