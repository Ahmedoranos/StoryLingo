import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordGroupComponent } from './component/beneficiarycomponent/word-group/word-group.component';
import { HeaderComponent } from './component/beneficiarycomponent/header/header.component';
import { EinComponent } from './component/beneficiarycomponent/ein/ein.component';
import { MeinComponent } from './component/beneficiarycomponent/mein/mein.component';
import { FlashcardGridComponent } from './component/common/flashcard-grid/flashcard-grid.component';
import { WordSet1Component } from './component/word-sets/word-set1/word-set1.component';
import { LessonComponent } from './component/beneficiarycomponent/lesson/lesson.component';
import { DativePrepositionsComponent } from './component/beneficiarycomponent/dative-prepositions/dative-prepositions.component';
import { DativeVerbsComponent } from './component/beneficiarycomponent/dative-verbs/dative-verbs.component';
import { PronounsCasesComponent } from './component/beneficiarycomponent/pronouns-cases/pronouns-cases.component';
import { ConstructQuestionComponent } from './component/beneficiarycomponent/construct-question/construct-question.component';
import { VerbTableComponent } from './component/beneficiarycomponent/verb-table/verb-table.component';
import { LanguageLevelComponent } from './component/beneficiarycomponent/language-level/language-level.component';
import { LessonContent1Component } from './component/beneficiarycomponent/lesson-content/lesson-content-1/lesson-content-1.component';
import { LessonContent10Component } from './component/beneficiarycomponent/lesson-content/lesson-content-10/lesson-content-10.component';
import { WordCardComponent } from './component/beneficiarycomponent/word-card/word-card.component';
import { WordCardNoHeaderComponent } from './component/beneficiarycomponent/word-card-no-header/word-card-no-header.component';
import { LessonContentB11Component } from './component/beneficiarycomponent/lesson-content/lesson-content-b1/lesson-content-b1-1/lesson-content-b1-1.component';
import { GrammarRoleComponent } from './component/beneficiarycomponent/grammar-role/grammar-role.component';

@NgModule({
  declarations: [
    AppComponent,
    WordGroupComponent,
    HeaderComponent,
    EinComponent,
    MeinComponent,
    FlashcardGridComponent,
    WordSet1Component,
    LessonComponent,
    DativePrepositionsComponent,
    DativeVerbsComponent,
    PronounsCasesComponent,
    ConstructQuestionComponent,
    VerbTableComponent,
    LanguageLevelComponent,
    LessonContent1Component,
    LessonContent10Component,
    WordCardComponent,
    WordCardNoHeaderComponent,
    LessonContentB11Component,
    GrammarRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
