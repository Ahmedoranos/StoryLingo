import { FlashCard } from '../component/common/flashcard-grid/flashcard-grid.component'; // Adjust path as needed

export const A1_GERMAN_WORD_SETS: { [key: string]: (FlashCard | null)[][] } = {
  set1: [
    // Example structure for one set of 20 words (5 rows for the grid)
    // Each inner array represents a row in your 4-column grid.
    // Null means an empty cell in that position.
    [
      { german: 'der Apfel', english: 'the apple', isFlipped: false },
      { german: 'die Banane', english: 'the banana', isFlipped: false },
      { german: 'das Brot', english: 'the bread', isFlipped: false },
      { german: 'die Äpfel', english: 'the apples', isFlipped: false }
    ],
    [
      { german: 'der Käse', english: 'the cheese', isFlipped: false },
      null,
      { german: 'das Ei', english: 'the egg', isFlipped: false },
      { german: 'die Eier', english: 'the eggs', isFlipped: false }
    ],
    // ... Add 3 more rows to make 20 words for set1
    // ... Remember to include nulls for empty cells to maintain the 4-column structure.
  ],
  set2: [
    // Words for the second set
  ],
  // ... Add set3 through set30
};

// Helper function to get a specific word set
export function getA1WordSet(setName: string): (FlashCard | null)[][] | undefined {
  return A1_GERMAN_WORD_SETS[setName];
}