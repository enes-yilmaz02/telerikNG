import { Component, NgZone } from '@angular/core';
import { getSelectionText, PluginKey } from '@progress/kendo-angular-editor';
import { editorValue } from './editor-values';

@Component({
  selector: 'app-pm-plugins',
  templateUrl: './pm-plugins.component.html',
  styleUrls: ['./pm-plugins.component.scss']
})
export class PmPluginsComponent {
  public value = editorValue;
  public showPopup: boolean;
  public position: { [Key: string]: string } = {};
  public selectionText: string;
  googleSearchPlugin: Plugin;
  // private googleSearchPlugin = new Plugin({
  //   key: new PluginKey("selection-google"),
  //   view: () => ({
  //     update: (view: { state: any; coordsAtPos: () => any; }) => {
  //       // Details about the API and usage of the EditorView object are available in the
  //       // ProseMirror documentation - https://prosemirror.net/docs/ref/#view
  //       const state = view.state;
  //       const selectionCollapsed = state.selection.empty;

  //       if (!selectionCollapsed) {
  //         const { from, to } = state.selection;
  //         const start = view.coordsAtPos(from),
  //           end = view.coordsAtPos(to);
  //         const left = Math.max((start.left + end.left) / 2, start.left);
  //         // The Editor is initialized outside of the Angular Zone for better performance.
  //         // Run any plugin code that needs to trigger the Angular Change Detection in the zone.
  //         this.ngZone.run(() => {
  //           this.showPopup = true;
  //           this.position = {
  //             top: start.top + "px",
  //             left: left + "px",
  //           };
  //           this.selectionText = getSelectionText(state);
  //         });
  //       } else {
  //         this.ngZone.run(() => {
  //           this.showPopup = false;
  //         });
  //       }
  //     },
  //   }),
  // });

  constructor(private ngZone: NgZone) {}

  public myPlugins = (defaultPlugins: Plugin[]): Plugin[] => [
    ...defaultPlugins,
    this.googleSearchPlugin,
  ];
}
