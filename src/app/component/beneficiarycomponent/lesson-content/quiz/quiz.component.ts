import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
export interface QuizData {
  emoji: string;
  german: string;
  english: string;
}

export interface QuizAnswer {
  animal: QuizData;
  userAnswer: string;
  correct: boolean;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

@Input() quizTitle: string = '';
@Input() quizData: QuizData[] = [];
  // animalData: Animal[] = [];
  //   { emoji: '🐶', german: 'der Hund', english: 'Dog' },
  //   { emoji: '🐱', german: 'die Katze', english: 'Cat' },
  //   { emoji: '🐭', german: 'die Maus', english: 'Mouse' },
  //   { emoji: '🐹', german: 'der Hamster', english: 'Hamster' },
  //   { emoji: '🐰', german: 'der Hase', english: 'Rabbit' },
  //   { emoji: '🦊', german: 'der Fuchs', english: 'Fox' },
  //   { emoji: '🐻', german: 'der Bär', english: 'Bear' },
  //   { emoji: '🐼', german: 'der Panda', english: 'Panda' },
  //   { emoji: '🐨', german: 'der Koala', english: 'Koala' },
  //   { emoji: '🐯', german: 'der Tiger', english: 'Tiger' },
  //   { emoji: '🦁', german: 'der Löwe', english: 'Lion' },
  //   { emoji: '🐮', german: 'die Kuh', english: 'Cow' },
  //   { emoji: '🐷', german: 'das Schwein', english: 'Pig' },
  //   { emoji: '🐸', german: 'der Frosch', english: 'Frog' },
  //   { emoji: '🐵', german: 'der Affe', english: 'Monkey' }
  // ];

  currentIndex: number = 0;
  userInput: string = '';
  score: number = 0;
  showResult: boolean = false;
  gameFinished: boolean = false;
  answers: QuizAnswer[] = [];
  animationClass: string = 'slide-in';
  lastAnswerCorrect: boolean = false;
  resultMessage: string = '';
  scoreMessage: string = '';

  get currentAnimal(): QuizData {
    return this.quizData[this.currentIndex];
  }

  get progressPercentage(): number {
    return ((this.currentIndex + 1) / this.quizData.length) * 100;
  }

  ngOnInit(): void {
    this.setRandomAnimation();
  }

  setRandomAnimation(): void {
    const animations = ['slide-in', 'slide-down'];
    this.animationClass = animations[Math.floor(Math.random() * animations.length)];
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      if (!this.showResult) {
        this.submitAnswer();
      } else {
        this.nextQuestion();
      }
    }
  }

  submitAnswer(): void {
    if (!this.userInput.trim()) return;

    const correct = this.userInput.toLowerCase().trim() === this.currentAnimal.german.toLowerCase();
    
    const newAnswer: QuizAnswer = {
      animal: this.currentAnimal,
      userAnswer: this.userInput,
      correct: correct
    };

    this.answers.push(newAnswer);
    this.lastAnswerCorrect = correct;

    if (correct) {
      this.score++;
      this.resultMessage = 'Correct! Richtig! ✅';
    } else {
      this.resultMessage = 'Incorrect. Falsch! ❌';
    }

    this.showResult = true;
  }

  nextQuestion(): void {
    this.showResult = false;
    this.userInput = '';

    if (this.currentIndex < this.quizData.length - 1) {
      this.currentIndex++;
      this.setRandomAnimation();
    } else {
      this.finishGame();
    }
  }

  finishGame(): void {
    this.gameFinished = true;
    
    if (this.score === this.quizData.length) {
      this.scoreMessage = 'Perfect Score! Ausgezeichnet! 🏆';
    } else if (this.score >= this.quizData.length * 0.8) {
      this.scoreMessage = 'Great Job! Sehr gut! 🌟';
    } else if (this.score >= this.quizData.length * 0.6) {
      this.scoreMessage = 'Good Work! Gut! 👍';
    } else {
      this.scoreMessage = 'Keep Practicing! Weiter üben! 📚';
    }
  }

  restartQuiz(): void {
    this.currentIndex = 0;
    this.userInput = '';
    this.score = 0;
    this.showResult = false;
    this.gameFinished = false;
    this.answers = [];
    this.setRandomAnimation();
  }

}
