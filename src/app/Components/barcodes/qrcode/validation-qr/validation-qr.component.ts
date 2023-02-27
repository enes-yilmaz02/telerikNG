import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { createQRCodeValidator, QRCodeEncoding } from '@progress/kendo-angular-barcodes';

@Component({
  selector: 'app-validation-qr',
  templateUrl: './validation-qr.component.html',
  styleUrls: ['./validation-qr.component.scss']
})
export class ValidationQRComponent {
  constructor(private fb: FormBuilder) {}
  public readonly encoding: QRCodeEncoding = "ISO_8859_1";

  public options = this.fb.group({
    value: [
      "Ф",
      Validators.compose([
        Validators.required,
        createQRCodeValidator(this.encoding),
      ]),
    ],
  });

  public get value(): AbstractControl {
    return this.options.controls["value"];
  }



}
