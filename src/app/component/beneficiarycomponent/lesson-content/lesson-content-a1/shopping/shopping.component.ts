import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';  

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
flashcards: (FlashCard | null)[][] = [
      [
        null
        ,
        {german: 'die Bäckerei', english: 'the bakery', isFlipped: false }
        ,
        null
        ,
        { german: 'die Bäckereien', english: 'the bakeries ', isFlipped: false }
      ],
      [
        null
        ,
        null        
        ,
         {german: 'das Bier', english: 'the beer', isFlipped: false }
        ,
        null      
      ],
    ]
}
