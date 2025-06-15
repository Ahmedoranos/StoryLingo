import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent {

  flashcards: (FlashCard | null)[][] = [
    [
      { german: 'der Zoll', english: 'the customs', isFlipped: false },
      null,
      null,
      { german: 'die Zölle', english: 'the customs', isFlipped: false }
    ],
  ]
}
