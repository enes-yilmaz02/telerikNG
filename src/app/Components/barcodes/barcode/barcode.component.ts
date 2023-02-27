import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { createBarcodeValidator } from '@progress/kendo-angular-barcodes';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent {
  public readonly type = "EAN13";

  public options = this.fb.group({
    value: [
      "123456789012",
      Validators.compose([
        Validators.required,
        createBarcodeValidator(this.type),
      ]),
    ],
  });

  public get value(): AbstractControl {
    return this.options.controls["value"];
  }

  constructor(private fb: FormBuilder) {}
}
