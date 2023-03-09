import { Component } from '@angular/core';
import { Contact, contacts } from './contact';

@Component({
  selector: 'app-multicolumncombobox',
  templateUrl: './multicolumncombobox.component.html',
  styleUrls: ['./multicolumncombobox.component.scss']
})
export class MulticolumncomboboxComponent {
  public contacts: Contact[] = contacts;

  public getContactImageUrl(contactId: string): string {
    return `https://www.telerik.com/kendo-angular-ui-develop/components/dropdowns/assets/contacts/${contactId}.jpg`;
  }
}
