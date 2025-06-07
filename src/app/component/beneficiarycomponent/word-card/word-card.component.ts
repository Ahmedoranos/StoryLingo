import { Component, Input } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';
@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css']
})
export class WordCardComponent {
  @Input() flashcards: (FlashCard | null)[][] = [];


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

}
