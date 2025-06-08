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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
