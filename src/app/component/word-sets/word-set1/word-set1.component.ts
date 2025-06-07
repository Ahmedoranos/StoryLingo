import { Component, OnInit } from '@angular/core';
import { FlashCard } from '../../common/flashcard-grid/flashcard-grid.component'; // Adjust path if needed
import { getA1WordSet } from '../../../data/a1-german-words'; // Adjust path if needed

@Component({
  selector: 'app-word-set1',
  templateUrl: './word-set1.component.html',
  styleUrls: ['./word-set1.component.css']
})
export class WordSet1Component implements OnInit {
  wordSet: (FlashCard | null)[][] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.wordSet = getA1WordSet('set1');
    if (!this.wordSet) {
      console.error("Word set 'set1' not found!");
      this.wordSet = []; // Initialize to empty array to avoid template errors
    }
  }
}
