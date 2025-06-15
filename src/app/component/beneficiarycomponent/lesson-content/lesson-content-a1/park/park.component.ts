import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';
@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.css']
})
export class ParkComponent {
  flashcards: (FlashCard | null)[][] = [
        [
          {german: 'der Baum', english: 'the tree', isFlipped: false }

          ,
          null
          ,
          null
          ,
          { german: 'die Bäume', english: 'the trees', isFlipped: false }
        ],
                [
null
          ,
          null
          ,
          {german: 'der Bein', english: 'the leg', isFlipped: false }

          ,
          { german: 'die Beine', english: 'the legs', isFlipped: false }
        ],
      ]
}
