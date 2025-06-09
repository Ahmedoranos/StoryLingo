import { Component } from '@angular/core';
import { VerbConjugation } from 'src/app/models/verb-conjugation';

@Component({
  selector: 'app-lesson-content-b1-1',
  templateUrl: './lesson-content-b1-1.component.html',
  styleUrls: ['./lesson-content-b1-1.component.css']
})
export class LessonContentB11Component {
verbConjugations: VerbConjugation[] = [
  {
    ich: "ich erhalte",
    du: "du erhältst", 
    erEsSie: "er/es/sie erhält",
    wir: "wir erhalten",
    ihr: "ihr erhaltet",
    SieSie: "Sie/sie erhalten",
    verbName: "erhalten"
  }
];
}
