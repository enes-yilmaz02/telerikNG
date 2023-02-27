import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChipRemoveEvent } from '@progress/kendo-angular-buttons';
import { AutoCompleteComponent } from "@progress/kendo-angular-dropdowns";
@Component({
  selector: 'app-n-chip',
  templateUrl: './n-chip.component.html',
  styleUrls: ['./n-chip.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NChipComponent {
  @ViewChild("contactslist") public list: AutoCompleteComponent;

  public contacts: Array<{ label: string; iconClass: string }> = [
    { label: "Pedro Afonso", iconClass: "k-chip-avatar pedro" },
    { label: "Maria Shore", iconClass: "k-chip-avatar maria" },
    { label: "Thomas Hardy", iconClass: "k-chip-avatar thomas" },
    { label: "Christina Berg", iconClass: "k-chip-avatar christina" },
    { label: "Paula Wilson", iconClass: "k-chip-avatar paula" },
  ];

  public selectedContacts: Array<{ label: string; iconClass: string }> = [
    this.contacts[1],
  ];

  public valueChange(contact: string): void {
    if (contact === "") {
      return;
    }

    const contactData = this.contacts.find((c) => c.label === contact);

    if (
      contactData !== undefined &&
      !this.selectedContacts.includes(contactData)
    ) {
      this.selectedContacts.push(contactData);
    }

    this.list.reset();
  }

  public onRemove(e: ChipRemoveEvent): void {
    console.log("Remove event arguments: ", e);
    const index = this.selectedContacts
      .map((c) => c.label)
      .indexOf(e.sender.label);
    this.selectedContacts.splice(index, 1);
  }
}
