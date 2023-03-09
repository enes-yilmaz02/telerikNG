import { Component } from '@angular/core';
import { EditorComponent } from '@progress/kendo-angular-editor';

@Component({
  selector: 'app-selectiontext',
  templateUrl: './selectiontext.component.html',
  styleUrls: ['./selectiontext.component.scss']
})
export class SelectiontextComponent {
  public value = `
  <p>
      The Kendo Angular UI Editor allows your users to edit HTML in a familiar, user-friendly way.<br />
      In this version, the Editor provides the core HTML editing engine, which includes basic text formatting, hyperlinks, and lists.
      The component <strong>outputs identical HTML</strong> across all major browsers, follows
      accessibility standards, and provides API for content manipulation.
  </p>
  <p>Features include:</p>
  <ul>
      <li>Text formatting</li>
      <li>Bulleted and numbered lists</li>
      <li>Hyperlinks</li>
      <li>Cross-browser support</li>
      <li>Identical HTML output across browsers</li>
  </ul>
`;

public selectionText: string;
public showSelected = false;

public showSelectedText(editor: EditorComponent): void {
if (!this.showSelected) {
this.showSelected = true;
}

this.selectionText = editor.selectionText;
}
}
