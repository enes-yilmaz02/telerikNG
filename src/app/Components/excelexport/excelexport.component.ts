import { Component } from '@angular/core';
import { aggregateBy, AggregateDescriptor, AggregateResult ,process} from '@progress/kendo-data-query';
import { Group, Product } from './model';
import { products } from './products';

@Component({
  selector: 'app-excelexport',
  templateUrl: './excelexport.component.html',
  styleUrls: ['./excelexport.component.scss']
})
export class ExcelexportComponent {
  public aggregates: AggregateDescriptor[] = [
    { field: "UnitPrice", aggregate: "sum" },
  ];

  public group: Group[] = [
    {
      field: "Discontinued",
      aggregates: this.aggregates,
    },
  ];

  public data: Product[] = process(products, {
    group: this.group,
  }).data;

  public total: AggregateResult = aggregateBy(products, this.aggregates);
}
