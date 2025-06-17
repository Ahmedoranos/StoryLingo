import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
days:(FlashCard | null)[][] = [
  [
    null,
    {german: 'der Wochentag', english: 'the weekday', isFlipped: false},
    null,
    {german: 'das Wochenende', english: 'the weekend', isFlipped: false}
  ],
  [
    {german: 'der Sonntag', english: 'Sunday', isFlipped: false},
    null,
    {german: 'der Montag', english: 'Monday', isFlipped: false},
    null
  ],
  [
    null,
    {german: 'der Dienstag', english: 'Tuesday', isFlipped: false},
    null,
    {german: 'der Mittwoch', english: 'Wednesday', isFlipped: false}
  ],
  [
    {german: 'der Donnerstag', english: 'Thursday', isFlipped: false},
    null,
    {german: 'der Freitag', english: 'Friday', isFlipped: false},
    null
  ],
  [
    null,
    {german: 'der Samstag', english: 'Saturday', isFlipped: false},
    {german: 'am Wochenende', english: 'on the weekend', isFlipped: false},
    null
  ]
]
}
