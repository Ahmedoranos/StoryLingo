import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent {
flashcards: (FlashCard | null)[][] = [
      [
        null
        ,
        {german: 'die Banane', english: 'the banana', isFlipped: false }
        ,
        null
        ,
        { german: 'die Bananen', english: 'the bananas ', isFlipped: false }
      ],
      [
        null
        ,
        {german: 'die Birne', english: 'the pear', isFlipped: false }
        ,
        null
        ,
        { german: 'die Birnen', english: 'the pears ', isFlipped: false }
      ],
    ]
}
