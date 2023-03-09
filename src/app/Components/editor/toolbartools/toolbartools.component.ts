import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbartools',
  templateUrl: './toolbartools.component.html',
  styleUrls: ['./toolbartools.component.scss']
})
export class ToolbartoolsComponent {
  public value = `
  <p>
      The Kendo Angular UI Editor allows your users to edit HTML in a familiar, user-friendly way.<br />
      In this version, the Editor provides the core HTML editing engine, which includes basic text formatting, hyperlinks and lists.
      The widget <strong>outputs identical HTML</strong> across all major browsers, follows
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
}
