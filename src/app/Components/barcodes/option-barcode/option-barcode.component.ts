import { Component, ViewChild } from '@angular/core';
import { BarcodeComponent, QRCodeComponent } from '@progress/kendo-angular-barcodes';
import { saveAs } from "@progress/kendo-file-saver";

@Component({
  selector: 'app-option-barcode',
  templateUrl: './option-barcode.component.html',
  styleUrls: ['./option-barcode.component.scss']
})
export class OptionBarcodeComponent {
  @ViewChild("barcode")
  private barcode: BarcodeComponent;

  @ViewChild("qrcode")
  private qrcode: QRCodeComponent;

  public exportBarcode(): void {
    this.barcode.exportImage().then((dataURI) => {
      saveAs(dataURI, "barcode.png");
    });
  }

  public exportQRCode(): void {
    this.qrcode.exportImage().then((dataURI) => {
      saveAs(dataURI, "qrcode.png");
    });
  }
}
