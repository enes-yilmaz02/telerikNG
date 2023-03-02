import { Component } from '@angular/core';
import { SelectEndEvent } from '@progress/kendo-angular-charts';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {
  public categories: string[] = ["A", "B", "C", "D"];
  public selection = {
    from: 1,
    to: 2,
  };

  public onSelectEnd = (args: SelectEndEvent): void => {
    const selectedCategories = this.categories.slice(args.from, args.to);
    console.log(`Selected categories: ${selectedCategories}`);
  };
}
