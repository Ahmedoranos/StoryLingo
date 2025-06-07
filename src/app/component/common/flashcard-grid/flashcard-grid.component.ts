import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getA1WordSet } from '../../../data/a1-german-words'; // Adjust path if needed

// Define the FlashCard interface
export interface FlashCard {
  german: string;
  english: string;
  isFlipped: boolean;
}

@Component({
  selector: 'app-flashcard-grid',
  templateUrl: './flashcard-grid.component.html',
  styleUrls: ['./flashcard-grid.component.css']
})
export class FlashcardGridComponent implements OnInit {
  flashcards: (FlashCard | null)[][] = []; // Initialize with an empty array
  currentSetIdentifier: string | null = null;
  pageTitle: string = "German Words"; // Default title

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const setIdentifier = params.get('setIdentifier');
      this.currentSetIdentifier = setIdentifier;
      if (setIdentifier) {
        const wordSet = getA1WordSet(setIdentifier);
        if (wordSet) {
          this.flashcards = wordSet;
          // You can create a more descriptive title if needed, e.g., based on the setIdentifier
          this.pageTitle = `German A1 Words - ${setIdentifier.replace('set', 'Set ')}`;
        } else {
          console.error(`Word set '${setIdentifier}' not found!`);
          this.flashcards = []; // Default to empty if set not found
          this.pageTitle = "Word Set Not Found";
        }
      } else {
        console.error('No setIdentifier provided in route parameters.');
        this.flashcards = []; // Default to empty if no identifier
        this.pageTitle = "Error: No Word Set Specified";
      }
    });
  }

  flipCard(card: FlashCard | null): void {
    if (!card) return;

    card.isFlipped = true;

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(card.german);
      utterance.lang = 'de-DE';
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Speech synthesis not supported in this browser.');
    }

    setTimeout(() => {
      if (card) {
        card.isFlipped = false;
      }
    }, 3000);
  }
}
