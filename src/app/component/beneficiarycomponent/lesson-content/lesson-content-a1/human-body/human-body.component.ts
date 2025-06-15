import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';

@Component({
  selector: 'app-human-body',
  templateUrl: './human-body.component.html',
  styleUrls: ['./human-body.component.css']
})
export class HumanBodyComponent {

  flashcards: (FlashCard | null)[][] = [
        [
          {german: 'der Bauch', english: 'the belly', isFlipped: false }

          ,
          null
          ,
          null
          ,
          { german: 'die Bäuche', english: 'the bellies', isFlipped: false }
        ],
      ]
}
