import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent {
flashcards: (FlashCard | null)[][] = [
      [
        null
        ,
        {german: 'die Bank', english: 'the bank', isFlipped: false }
        ,
        null
        ,
        { german: 'die Bänke', english: 'the banks ', isFlipped: false }
      ],
        [
        null
        ,
null        ,
        { german: 'das Beruf', english: 'the job ', isFlipped: false }

        ,
        { german: 'die Berufe', english: 'the jobs ', isFlipped: false }
      ],
    ]
}
