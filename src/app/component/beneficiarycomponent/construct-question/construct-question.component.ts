import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-construct-question',
  templateUrl: './construct-question.component.html',
  styleUrls: ['./construct-question.component.css']
})
export class ConstructQuestionComponent {
  @Input() promptText: string = '';  
  @Input() correctSentence: string = '';  
  isSentenceFlipped: boolean = false;

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
