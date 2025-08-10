import { Component } from '@angular/core';
import { QuizData } from './../../../quiz/quiz.component'; // Adjust the import path as necessary

@Component({
  selector: 'app-family-quiz',
  templateUrl: './family-quiz.component.html',
  styleUrls: ['./family-quiz.component.css']
})
export class FamilyQuizComponent {
quizTitle: string = 'Family Quiz';


familyData: QuizData[] = [


    { emoji: '👴🏻', german: 'der Großvater', english: 'the grandfather' },
  { emoji: '👴🏻👴🏻', german: 'die Großväter', english: 'the grandfathers' },
  { emoji: '👵🏻', german: 'die Großmutter', english: 'the grandmother' },
  { emoji: '👵🏻👵🏻', german: 'die Großmütter', english: 'the grandmothers' },
  { emoji: '👩🏻‍🍼', german: 'die Mutter', english: 'the mother' },
  { emoji: '👩🏻‍🍼👩🏻‍🍼', german: 'die Mütter', english: 'the mothers' },
  { emoji: '👼🏻', german: 'das Baby', english: 'the baby' },
  { emoji: '👼🏻👼🏻', german: 'die Babys', english: 'the babies' },
  { emoji: '👦🏻', german: 'der Bruder', english: 'the brother' },
  { emoji: '👦🏻👦🏻', german: 'die Brüder', english: 'the brothers' },
  { emoji: '👧🏻', german: 'die Schwester', english: 'the sister' },
  { emoji: '👧🏻👧🏻', german: 'die Schwestern', english: 'the sisters' },
  { emoji: '👨🏻‍👩🏻‍👧🏻‍👦🏻', german: 'die Geschwister', english: 'the siblings' },
  { emoji: '👴🏻', german: 'der Opa', english: 'the grandfather' },
  { emoji: '👴🏻👴🏻', german: 'die Opas', english: 'the grandfathers' },
  { emoji: '👵🏻', german: 'die Oma', english: 'the grandmother' },
  { emoji: '👵🏻👵🏻', german: 'die Omas', english: 'the grandmothers' },
  { emoji: '👨🏻‍👩🏻', german: 'die Eltern', english: 'the parents' },
  { emoji: '👦🏻', german: 'der Sohn', english: 'the son' },
  { emoji: '👦🏻👦🏻', german: 'die Söhne', english: 'the sons' },
  { emoji: '👧🏻', german: 'die Tochter', english: 'the daughter' },
  { emoji: '👧🏻👧🏻', german: 'die Töchter', english: 'the daughters' }
  ];


}
