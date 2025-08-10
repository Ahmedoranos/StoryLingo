import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-word-card-title',
  templateUrl: './word-card-title.component.html',
  styleUrls: ['./word-card-title.component.css']
})
export class WordCardTitleComponent {
  constructor(private router: Router) {}

@Input() title: string = '';
@Input() description: string = '';
@Input() emoji: string = '';
@Input() lessonWordCount: string= '';
@Input() secondFlag: string = '';
@Input() howItWork: string = '';
@Input() quizRouteLink: string = '';

  navigate() {
    if (this.quizRouteLink) 
      this.router.navigate([this.quizRouteLink]);
    }


}
