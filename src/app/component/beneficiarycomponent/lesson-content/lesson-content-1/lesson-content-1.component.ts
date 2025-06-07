import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';
  

@Component({
  selector: 'app-lesson-content-1',
  templateUrl: './lesson-content-1.component.html',
  styleUrls: ['./lesson-content-1.component.css']
})
export class LessonContent1Component {

qHowToSayGoodMorning: string = 'You are meeting your friends this morning. What do you say?';
qHowToSayGoodMorning: string = 'You are meeting your friends this morning. What do you say?';


flashcards: (FlashCard | null)[][] =  [
  [
    { german: 'Hallo', english: 'Hello', isFlipped: false },
    { german: 'Guten Morgen', english: 'Good morning', isFlipped: false },
    { german: 'Guten Tag', english: 'Good day', isFlipped: false },
    { german: 'Guten Abend', english: 'Good evening', isFlipped: false }
  ],
  [
    { german: 'Gute Nacht', english: 'Good night', isFlipped: false },
    { german: 'Tschüss', english: 'Bye', isFlipped: false },
    { german: 'Auf Wiedersehen', english: 'Goodbye (formal)', isFlipped: false },
    { german: 'Bis später', english: 'See you later', isFlipped: false }
  ],
  [
    { german: 'Wie geht’s?', english: 'How are you?', isFlipped: false },
    { german: 'Mir geht’s gut', english: 'I am doing well', isFlipped: false },
    { german: 'Und dir?', english: 'And you?', isFlipped: false },
    { german: 'Danke', english: 'Thank you', isFlipped: false }
  ]
];
}
