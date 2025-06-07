import { Component, Input } from '@angular/core';
import { VerbConjugation } from '../../../models/verb-conjugation';



@Component({
  selector: 'app-verb-table',
  templateUrl: './verb-table.component.html',
  styleUrls: ['./verb-table.component.css']
})
export class VerbTableComponent {
  @Input() verbConjugations: VerbConjugation[] = [];

}
