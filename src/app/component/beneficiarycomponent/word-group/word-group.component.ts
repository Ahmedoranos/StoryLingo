import { Component } from '@angular/core';
import { VerbConjugation } from '../../../models/verb-conjugation';

interface FlashCard {
  german: string;
  english: string;
  isFlipped: boolean;
}



@Component({
  selector: 'app-word-group',
  templateUrl: './word-group.component.html',
  styleUrls: ['./word-group.component.css']
})
export class WordGroupComponent {
  flashcards: (FlashCard | null)[][] = [
    [
      { german: 'der Mann', english: 'the man', isFlipped: false },
      null,
      null,
      { german: 'die Männer', english: 'the men', isFlipped: false }
    ],
    [
      null,
      { german: 'die Frau', english: 'the woman', isFlipped: false },
      null,
      { german: 'die Frauen', english: 'the women', isFlipped: false }
    ],
    [
      null,
      null,
      { german: 'das Kind', english: 'the child', isFlipped: false },
      { german: 'die Kinder', english: 'the children', isFlipped: false }
    ],
    [
      { german: 'der Tisch', english: 'the table', isFlipped: false },
      null,
      null,
      { german: 'die Tische', english: 'the tables', isFlipped: false }
    ],
    [
      { german: 'der Hund', english: 'the dog', isFlipped: false },
      null,
      null,
      { german: 'die Hunde', english: 'the dogs', isFlipped: false }
    ],
    [
      null,
      { german: 'die Katze', english: 'the cat', isFlipped: false },
      null,
      { german: 'die Katzen', english: 'the cats', isFlipped: false }
    ],
    [
      null,
      null,
      { german: 'das Haus', english: 'the house', isFlipped: false },
      { german: 'die Häuser', english: 'the houses', isFlipped: false }
    ],
    [
      { german: 'der Tag', english: 'the day', isFlipped: false },
      null,
      null,
      { german: 'die Tage', english: 'the days', isFlipped: false }
    ],
    [
      null,
      { german: 'die Stadt', english: 'the city', isFlipped: false },
      null,
      { german: 'die Städte', english: 'the cities', isFlipped: false }
    ],
    [
      null,
      null,
      { german: 'das Auto', english: 'the car', isFlipped: false },
      { german: 'die Autos', english: 'the cars', isFlipped: false }
    ]
  ];

  correctSentence: string = "Die Frau gibt mir ein Buch";
  isSentenceFlipped: boolean = false;

verbConjugations: VerbConjugation[] = [
  {
    ich: 'gebe',
    du: 'gibst',
    erEsSie: 'gibt',
    wir: 'geben',
    ihr: 'gebt',
    SieSie: 'geben',
    verbName: 'geben'
  },
  {
    ich: 'bin',
    du: 'bist',
    erEsSie: 'ist',
    wir: 'sind',
    ihr: 'seid',
    SieSie: 'sind',
    verbName: 'sein'
  },
  {
    ich: 'habe',
    du: 'hast',
    erEsSie: 'hat',
    wir: 'haben',
    ihr: 'habt',
    SieSie: 'haben',
    verbName: 'haben'
  }
];
  flipCard(card: FlashCard): void {
    if (!card) return;

    // Flip the card
    card.isFlipped = true;

    // Pronounce the German word
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(card.german);
      utterance.lang = 'de-DE'; // Set language to German
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Speech synthesis not supported in this browser.');
    }

    // Auto flip back after 3 seconds
    setTimeout(() => {
      card.isFlipped = false;
    }, 3000);
  }

  flipSentence(): void {
    this.isSentenceFlipped = !this.isSentenceFlipped;

    // Pronounce the correct sentence if it's being revealed
    if (this.isSentenceFlipped) {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(this.correctSentence);
        utterance.lang = 'de-DE'; // Set language to German
        window.speechSynthesis.speak(utterance);
      } else {
        console.warn('Speech synthesis not supported in this browser.');
      }
    }
  }
}