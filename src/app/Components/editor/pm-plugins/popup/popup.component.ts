import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @HostBinding("style.position") public hostPosition = "absolute";
  @HostBinding("style.zIndex") public zIndex = "2";
  @HostBinding("style.margin") public margin = "12px 0 0 -15px";
  @Input() public searchTerm: string;

  public onClick(): void {
    window.open(`https://www.google.com/search?q=${this.searchTerm}`);
  }
}
