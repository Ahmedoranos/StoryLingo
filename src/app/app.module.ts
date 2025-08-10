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
import { LessonContentB12Component } from './component/beneficiarycomponent/lesson-content/lesson-content-b1/lesson-content-b1-2/lesson-content-b1-2.component';
import { AirportComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/airport/airport.component';
import { TrainstationComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/trainstation/trainstation.component';
import { FamilyComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/family/family.component';
import { ShoppingComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/shopping/shopping.component';
import { HouseComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/house/house.component';
import { GroceryComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/grocery/grocery.component';
import { FruitComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/fruit/fruit.component';
import { FinancialsComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/financials/financials.component';
import { HumanBodyComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/human-body/human-body.component';
import { ParkComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/park/park.component';
import { GeneralComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/general/general.component';
import { SchoolComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/school/school.component';
import { GreetingsComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/greetings/greetings.component';
import { WeatherComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/weather/weather.component';
import { TimeComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/time/time.component';
import { LandingPageComponent } from './component/beneficiarycomponent/landing-page/landing-page.component';
import { CommonStructureComponent } from './component/beneficiarycomponent/grammar-role/components/common-structure/common-structure.component';
import { WordCardTitleComponent } from './component/beneficiarycomponent/lesson-content/word-card-title/word-card-title.component';
import { QuizComponent } from './component/beneficiarycomponent/lesson-content/quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { DialogeQuizComponent } from './component/beneficiarycomponent/lesson-content/dialoge-quiz/dialoge-quiz.component';
import { CheckNoteComponent } from './component/beneficiarycomponent/lesson-content/word-card-title/check-note/check-note.component';
import { FamilyQuizComponent } from './component/beneficiarycomponent/lesson-content/lesson-content-a1/family/family-quiz/family-quiz.component';

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
    LessonContentB12Component,
    AirportComponent,
    TrainstationComponent,
    FamilyComponent,
    ShoppingComponent,
    HouseComponent,
    GroceryComponent,
    FruitComponent,
    FinancialsComponent,
    HumanBodyComponent,
    ParkComponent,
    GeneralComponent,
    SchoolComponent,
    GreetingsComponent,
    WeatherComponent,
    TimeComponent,
    LandingPageComponent,
    CommonStructureComponent,
    WordCardTitleComponent,
    QuizComponent,
    DialogeQuizComponent,
    CheckNoteComponent,
    FamilyQuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
