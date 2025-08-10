import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordGroupComponent } from './component/beneficiarycomponent/word-group/word-group.component';
import { EinComponent } from './component/beneficiarycomponent/ein/ein.component';
import { MeinComponent } from './component/beneficiarycomponent/mein/mein.component';
import { WordSet1Component } from './component/word-sets/word-set1/word-set1.component';
import { DativePrepositionsComponent } from './component/beneficiarycomponent/dative-prepositions/dative-prepositions.component';
import { DativeVerbsComponent   } from './component/beneficiarycomponent/dative-verbs/dative-verbs.component';
import { PronounsCasesComponent } from './component/beneficiarycomponent/pronouns-cases/pronouns-cases.component';
import { LanguageLevelComponent } from './component/beneficiarycomponent/language-level/language-level.component';
import { LessonContent1Component } from './component/beneficiarycomponent/lesson-content/lesson-content-1/lesson-content-1.component';
import { WordCardNoHeaderComponent } from './component/beneficiarycomponent/word-card-no-header/word-card-no-header.component';
import { GrammarRoleComponent } from './component/beneficiarycomponent/grammar-role/grammar-role.component';
import { LessonContentB11Component } from './component/beneficiarycomponent/lesson-content/lesson-content-b1/lesson-content-b1-1/lesson-content-b1-1.component';
import { AirportComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/airport/airport.component'; 
import { TrainstationComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/trainstation/trainstation.component';
import { GreetingsComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/greetings/greetings.component';
import { FamilyComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/family/family.component';
import { WeatherComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/weather/weather.component';
import { TimeComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/time/time.component';
import { LandingPageComponent } from './component/beneficiarycomponent/landing-page/landing-page.component';
import { WordCardTitleComponent } from './component/beneficiarycomponent/lesson-content/word-card-title/word-card-title.component';
import { QuizComponent } from './component/beneficiarycomponent/lesson-content/quiz/quiz.component';
import { DialogeQuizComponent } from './component/beneficiarycomponent/lesson-content/dialoge-quiz/dialoge-quiz.component';
import { FamilyQuizComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/family/family-quiz/family-quiz.component';

const routes: Routes = [
  { path: 'word-groups', component: WordGroupComponent },
  { path: 'ein-cases', component: EinComponent },
  { path: 'mein-cases', component: MeinComponent },
  { path: 'word-set-1', component: WordSet1Component }, 
  { path: 'dative-prepositions', component: DativePrepositionsComponent } ,
  { path: 'dative-verbs', component: DativeVerbsComponent } ,
  { path: 'pronouns-cases', component: PronounsCasesComponent } ,
  { path: 'language-level', component: LanguageLevelComponent } ,
  { path: 'app-lesson-content-1', component: LessonContent1Component } ,
  { path: 'wordcard-noheader', component: WordCardNoHeaderComponent } ,
  { path: 'grammar-role', component: GrammarRoleComponent } ,
  { path: 'lesson-content-b1-1', component: LessonContentB11Component } ,
  { path: 'airport', component: AirportComponent } ,
  { path: 'train-station', component: TrainstationComponent } ,
  { path: 'greetings', component: GreetingsComponent } ,
  { path: 'family', component: FamilyComponent } ,
  { path: 'weather', component: WeatherComponent } ,
  { path: 'time-day', component: TimeComponent } ,
  { path: 'landing-page', component: LandingPageComponent } ,
  { path: 'title', component: WordCardTitleComponent } ,
  { path: 'quiz', component: QuizComponent } ,
  { path: 'dialoge-quiz', component: DialogeQuizComponent } ,
  { path: 'family-quiz', component: DialogeQuizComponent } ,
    { path: 'family-words-quiz', component: FamilyQuizComponent } ,

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
