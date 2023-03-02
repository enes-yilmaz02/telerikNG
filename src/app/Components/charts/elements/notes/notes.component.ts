import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  public data = [
    { value: 2 },
    { value: 4, extremum: "Max" },
    { value: 3 },
    { value: 1, extremum: "Min" },
  ];
}
