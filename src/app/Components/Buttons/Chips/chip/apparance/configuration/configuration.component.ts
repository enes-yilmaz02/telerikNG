import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { IOption } from 'src/app/Models/models';
import { Option } from '../apparance.component';
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConfigurationComponent {
  @Input() options: Option[];
  @Output() optionChange: EventEmitter<IOption> = new EventEmitter();

  public onItemClick(value: string, type: string): void {
    this.optionChange.emit({ optionType: type, optionValue: value });
  }
}
