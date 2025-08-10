import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-note',
  templateUrl: './check-note.component.html',
  styleUrls: ['./check-note.component.css']
})
export class CheckNoteComponent {
@Input() checkNote: string = ''; 
}
