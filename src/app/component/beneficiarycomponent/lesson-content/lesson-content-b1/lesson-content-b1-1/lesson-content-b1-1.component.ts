import { Component } from '@angular/core';
import { VerbConjugation } from 'src/app/models/verb-conjugation';
import { FlashCard } from 'src/app/models/flash-card';

@Component({
  selector: 'app-lesson-content-b1-1',
  templateUrl: './lesson-content-b1-1.component.html',
  styleUrls: ['./lesson-content-b1-1.component.css']
})
export class LessonContentB11Component {
verbConjugations: VerbConjugation[] = [
  {
    ich: "ich erhalte",
    du: "du erhältst", 
    erEsSie: "er/es/sie erhält",
    wir: "wir erhalten",
    ihr: "ihr erhaltet",
    SieSie: "Sie/sie erhalten",
    verbName: "erhalten"
  }
];


flashcards: (FlashCard | null)[][] = [
  [
    { german: 'der Beleg', english: 'the receipt/document', isFlipped: false },
    null,
    null,
    { german: 'die Belege', english: 'the receipts/documents', isFlipped: false }
  ],
  [
    { german: 'der Auftrag', english: 'the order/assignment', isFlipped: false },
    null,
    null,
    { german: 'die Aufträge', english: 'the orders/assignments', isFlipped: false }
  ],
  [
    { german: 'der Ausgang', english: 'the exit/outcome', isFlipped: false },
    null,
    null,
    { german: 'die Ausgänge', english: 'the exits/outcomes', isFlipped: false }
  ],
  [
    null,
    { german: 'die Angst', english: 'the fear/anxiety', isFlipped: false },
    null,
    { german: 'die Ängste', english: 'the fears/anxieties', isFlipped: false }
  ]
];


qTellFriend1: string = 'Tell your friend in German he should not be afraid of dogs; they are friendly.';
correctSentence1: string = "Du brauchst keine Angst vor Hunden zu haben, sie sind freundlich.";


qcanGiveReceipt2: string = 'Can you give me a receipt/proof?';
correctSentence2: string = "Kannst du mir einen Beleg geben?";


qTranslate3: string = 'Translate the following sentence to german "We gave them a receipt"';
correctSentence3: string = "Wir haben ihnen einen Beleg gegeben.";


}
