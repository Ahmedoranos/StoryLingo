import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
flashcards: (FlashCard | null)[][] = [
        [
          {german: 'der Beamte', english: 'the clerk', isFlipped: false }
          ,
          null
          ,
          null
          ,
          { german: 'die Beamten', english: 'the clerks', isFlipped: false }
        ],
        [
          null
          ,
          null
          ,
          {german: 'das Beispiel', english: 'the example', isFlipped: false }
          ,
          { german: 'die Beispiele', english: 'the examples', isFlipped: false }
        ],
         [
          null
          ,
          null
          ,
          {german: 'das Bild', english: 'the picture', isFlipped: false }
          ,
          { german: 'die Bilder', english: 'the pictures', isFlipped: false }
        ],
         [
          null
          ,
          {german: 'das Bitte', english: 'the appeal', isFlipped: false }

          ,
null          ,
          { german: 'die Bitten', english: 'the appeals', isFlipped: false }
        ],
      ]
      
}
