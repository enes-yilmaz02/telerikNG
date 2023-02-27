import { Component } from '@angular/core';
import { ButtonRounded, ButtonSize, ChipFillMode, ChipThemeColor } from '@progress/kendo-angular-buttons';
import { IOption } from 'src/app/Models/models';
export type Option = {
  type: string;
  data: string[];
  default: ButtonSize | ButtonRounded | ChipFillMode | ChipThemeColor;
};
@Component({
  selector: 'app-apparance',
  templateUrl: './apparance.component.html',
  styleUrls: ['./apparance.component.scss']
})
export class ApparanceComponent {
  public size: ButtonSize = "medium";
  public rounded: ButtonRounded = "medium";
  public fillMode: ChipFillMode = "solid";
  public themeColor: ChipThemeColor = "base";

  public options: Option[] = [
    {
      type: "size",
      data: ["small", "medium", "large"],
      default: this.size,
    },
    {
      type: "rounded",
      data: ["small", "medium", "large", "full"],
      default: this.rounded,
    },
    {
      type: "fillMode",
      data: ["solid", "outline"],
      default: this.fillMode,
    },
    {
      type: "themeColor",
      data: ["base", "info", "success", "warning", "error"],
      default: this.themeColor,
    },
  ];

  public changeHandler({ optionType, optionValue }: IOption): void {
    this[optionType] = optionValue;
  }
}
