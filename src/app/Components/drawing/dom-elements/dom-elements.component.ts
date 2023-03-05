import { Component } from '@angular/core';
import { exportElement } from './export-elements';
import { InvoiceRow } from './inovice-row';
import { invoiceData } from './inovice.data';

@Component({
  selector: 'app-dom-elements',
  templateUrl: './dom-elements.component.html',
  styleUrls: ['./dom-elements.component.scss']
})
export class DomElementsComponent {
  public data: InvoiceRow[] = [...invoiceData, ...invoiceData, ...invoiceData];

  public onClick(element) {
    exportElement(element, {
      paperSize: "A4",
      repeatHeaders: true,
    });
  }
}
