import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';

@Component({
  selector: 'app-trainstation',
  templateUrl: './trainstation.component.html',
  styleUrls: ['./trainstation.component.css']
})
export class TrainstationComponent {
  flashcards: (FlashCard | null)[][] = [
    [
      { german: 'der Bahnhof', english: 'the train station', isFlipped: false }
      ,
      null
      ,
      null
      ,
      { german: 'die Bahnhöfe', english: 'the train stations', isFlipped: false }
    ],
    [
      { german: 'der Zug', english: 'the train', isFlipped: false }
      ,
      null
      ,
      null
      ,
      { german: 'die Züge', english: 'the trains', isFlipped: false },
    ],
    [
      null
      ,
      { german: 'die Abfahrt', english: 'the departure', isFlipped: false }
      ,
      null
      ,
      { german: 'die Abfahrten', english: 'the departures', isFlipped: false }
    ],
    [
      null
      ,
      { german: 'die Bahn', english: 'the railway', isFlipped: false }
      ,
      null
      ,
      { german: 'die Bahnen ', english: 'the railways', isFlipped: false }
    ]
    ,
        [
      null
      ,
      { german: 'die Ankunft', english: 'the arrival', isFlipped: false }
      ,
      null
      ,
      { german: 'die Ankünfte', english: 'the arrivals', isFlipped: false }
    ]
    ,
    [
      { german: 'der Bahnsteig', english: 'the platform', isFlipped: false }

      ,
null      ,
      null
      ,
      { german: 'die Bahnsteige', english: 'the platforms', isFlipped: false }
    ]
  ];
}
