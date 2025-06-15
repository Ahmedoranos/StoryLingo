import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {
flashcards: (FlashCard | null)[][] = [
        [
          {german: 'der Bleistift', english: 'the pencil', isFlipped: false }
          ,
          null
          ,
          null
          ,
          { german: 'die Bleistifte', english: 'the pencils', isFlipped: false }
        ],
      ]
}
