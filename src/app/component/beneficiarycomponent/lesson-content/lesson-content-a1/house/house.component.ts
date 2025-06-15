import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent {
flashcards: (FlashCard | null)[][] = [
      [
        null
        ,
        null
        ,
        {german: 'das Bad', english: 'the bathroom', isFlipped: false }

        ,
        { german: 'die Bäder', english: 'the bathrooms ', isFlipped: false }
      ],
      [
        {german: 'das Balkon ', english: 'the balcony', isFlipped: false }

        ,
        null
        ,
null
        ,
        { german: 'die Balkone', english: 'the balconies ', isFlipped: false }
      ],
       [
null
        ,
        null
        ,
        {german: 'das Bett ', english: 'the bed', isFlipped: false }
        ,
        { german: 'die Betten', english: 'the beds ', isFlipped: false }
      ],
    ]
}
