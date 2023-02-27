import { Component } from '@angular/core';

@Component({
  selector: 'app-disabled-button-group',
  templateUrl: './disabled-button-group.component.html',
  styleUrls: ['./disabled-button-group.component.scss']
})
export class DisabledButtonGroupComponent {
  public disabled = true;

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }
}
