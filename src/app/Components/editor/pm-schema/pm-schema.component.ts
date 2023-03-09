import { Component } from '@angular/core';
import { Schema } from '@progress/kendo-angular-editor/config/schema';
import { mySchema } from './custom-schema';

@Component({
  selector: 'app-pm-schema',
  templateUrl: './pm-schema.component.html',
  styleUrls: ['./pm-schema.component.scss']
})
export class PmSchemaComponent {
  public value = `
  <p dir="rtl">A paragraph with <code>dir="rtl"</code> attribute, and the new added mark - <s>new mark formatting</s></p>
  <iframe style="width: 500px; height: 340px;" src="https://www.youtube.com/embed/2OvvwWShNWo"></iframe>
`;

public mySchema: Schema = mySchema;
}
