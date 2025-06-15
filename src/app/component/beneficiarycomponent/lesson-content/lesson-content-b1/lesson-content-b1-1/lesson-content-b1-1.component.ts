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
  },
  {
    ich: "ich tausche um",
    du: "du tauschst um",
    erEsSie: "er/es/sie tauscht um",
    wir: "wir tauschen um",
    ihr: "ihr tauscht um",
    SieSie: "Sie/sie tauschen um",
    verbName: "umtauschen"
  },
  {
  ich: "ich überweise",
  du: "du überweist",
  erEsSie: "er/es/sie überweist",
  wir: "wir überweisen",
  ihr: "ihr überweist",
  SieSie: "Sie/sie überweisen",
  verbName: "überweisen"
},
{
  "ich": "ich zahle ein",
  "du": "du zahlst ein",
  "erEsSie": "er/es/sie zahlt ein",
  "wir": "wir zahlen ein",
  "ihr": "ihr zahlt ein",
  "SieSie": "Sie/sie zahlen ein",
  "verbName": "einzahlen"
},
{
  ich: "ich hebe ab",
  du: "du hebst ab",
  erEsSie: "er/es/sie hebt ab",
  wir: "wir heben ab",
  ihr: "ihr hebt ab",
  SieSie: "Sie/sie heben ab",
  verbName: "abheben"
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
  ],
   [
    null,
    { german: 'die Garantie', english: 'the guarantee', isFlipped: false },
    null,
    { german: 'die Garantien', english: 'the guarantees', isFlipped: false }
  ],
   [
    null,
    { german: 'die Zahlung', english: 'the payment', isFlipped: false },
    null,
    { german: 'die Zahlungen', english: 'the payments', isFlipped: false }
  ],
  [
    null,
    { german: 'die Überweisung', english: 'the transfer', isFlipped: false },
    null,
    { german: 'die Überweisungen', english: 'the transfers', isFlipped: false }
  ]
];


// qTellFriend1: string = 'Tell your friend in German he should not be afraid of dogs; they are friendly.';
// correctSentence1: string = "Du brauchst keine Angst vor Hunden zu haben, sie sind freundlich.";

qTellFriend1: string = 'You are employee in company tell the client "we have received your email" in german';
correctSentence1: string = "Wir haben Ihre E-Mail erhalten.";

qcanGiveReceipt2: string = 'Can you give me a receipt/proof?';
correctSentence2: string = "Kannst du mir einen Beleg geben?";

qTranslate3: string = 'Translate the following sentence to german "We gave them a receipt"';
correctSentence3: string = "Wir haben ihnen einen Beleg gegeben.";


}
