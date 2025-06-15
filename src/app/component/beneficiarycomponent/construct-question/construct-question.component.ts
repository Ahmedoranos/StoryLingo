import { Component, Input } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-construct-question',
  templateUrl: './construct-question.component.html',
  styleUrls: ['./construct-question.component.css']
})
export class ConstructQuestionComponent {
  isSentenceFlipped: boolean = false;
  @Input() questionList: Question[] = [];


 isCollapsed = false;

  toggleQuestions(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  flipAnswer(index: number): void 
  {
    this.questionList[index].flipped = !this.questionList[index].flipped;

    // Pronounce the correct sentence if it's being revealed
    if (this.questionList[index].flipped)
      {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(this.questionList[index].questionAnswer);
        utterance.lang = 'de-DE'; // Set language to German
        window.speechSynthesis.speak(utterance);
      } else {
        console.warn('Speech synthesis not supported in this browser.');
      }
    }

  }


}
