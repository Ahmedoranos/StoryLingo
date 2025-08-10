import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';
import { VerbConjugation } from 'src/app/models/verb-conjugation';
import { Question } from 'src/app/models/question';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

grammarRoleTitle: string = 'Word Order';
grammarRoleSubTitle: string = 'Correct Word Order with Time Adverbs in German Sentences';
grammarMainText: string = 'In German, the word order in sentences can change based on the presence of time adverbs. The general structure is Subject - Verb - Time Adverb - Object. For example, "Ich gehe heute ins Kino" (I am going to the cinema today). The time adverb "heute" (today) comes after the verb "gehe" (am going).';



weatherAdjFlashcards: (FlashCard | null)[][] =  [
  [
     { german: "sonnig", english: "sunny", isFlipped: false },
    { german: "regnerisch", english: "rainy", isFlipped: false },
    { german: "windig", english: "windy", isFlipped: false },
    { german: "bewölkt", english: "cloudy", isFlipped: false }
  ],
  [
    { german: "stürmisch", english: "stormy", isFlipped: false },
    { german: "kalt", english: "cold", isFlipped: false },
    { german: "kühl", english: "cool", isFlipped: false },
    { german: "warm", english: "warm", isFlipped: false },
  ],
  [
    { german: "heiß", english: "hot", isFlipped: false },
    { german: "frostig", english: "frosty", isFlipped: false },
  ]
];

flashcards: (FlashCard | null)[][] = [
      [
        null
        ,
        null
        ,
        {german: 'das Wetter ', english: 'the weather', isFlipped: false }
        ,
        null
      ],
      [
        {german: 'das Regen ', english: 'the rain', isFlipped: false }
        ,
        null
        ,
        null
        ,
        null
      ],
       [
        null
        ,
        {german: 'die Sonne', english: 'the sun', isFlipped: false }
        ,
        null
        ,
        {german: 'die Sonnen', english: 'the suns', isFlipped: false }
      ],
       [
        {german: 'die Grad', english: 'the degree', isFlipped: false }
        ,
        null
        ,
        null
        ,
        {german: 'die Grade', english: 'the degrees', isFlipped: false }
      ],
       [
        {german: 'die Himmel', english: 'the sky', isFlipped: false }
        ,
        null
        ,
        null
        ,
        {german: 'die Himmel', english: 'the Himmel', isFlipped: false }
      ],
    ]


 verbConjugations: VerbConjugation[] = [
  {
    ich: "ich regne",
    du: "du regnest",
    erEsSie: "es regnet",
    wir: "wir regnen",
    ihr: "ihr regnet",
    SieSie: "Sie/sie regnen",
    verbName: "regnen",
    partizipII: "geregnet"
  },
  {
    ich: "ich scheine",
    du: "du scheinst",
    erEsSie: "er/sie/es scheint",
    wir: "wir scheinen",
    ihr: "ihr scheint",
    SieSie: "Sie/sie scheinen",
    verbName: "scheinen",
    partizipII: "geschienen"
  },
]
questionListWeather: Question[] = [
  {
    questionText: 'Say that it is sunny today.',
    questionAnswer: "Heute ist es sonnig."
  },
  {
    questionText: 'Say that the sun is shining.',
    questionAnswer: "Die Sonne scheint."
  },
  {
    questionText: 'Say that it is raining.',
    questionAnswer: "Es regnet."
  },
  {
    questionText: 'Say that the weather is bad.',
    questionAnswer: "Das Wetter ist schlecht."
  },
  {
    questionText: 'Say that it is cloudy.',
    questionAnswer: "Es ist bewölkt."
  },
  {
    questionText: 'Say that it is windy and cold.',
    questionAnswer: "Es ist windig und kalt."
  },
  {
    questionText: 'Say that the sky is grey.',
    questionAnswer: "Der Himmel ist grau."
  },
  {
    questionText: 'Say that it is hot today.',
    questionAnswer: "Heute ist es heiß."
  },
  {
    questionText: 'Say that it is 20 degrees.',
    questionAnswer: "Es sind 20 Grad."
  },
  {
    questionText: 'Say that it is stormy and rainy.',
    questionAnswer: "Es ist stürmisch und regnerisch."
  },
  {
    questionText: 'Say that it is frosty in the morning.',
    questionAnswer: "Am Morgen ist es frostig."
  },
  {
    questionText: 'Say that the weather is nice.',
    questionAnswer: "Das Wetter ist schön."
  },
  {
    questionText: 'Say that the sun is not shining.',
    questionAnswer: "Die Sonne scheint nicht."
  },
  {
    questionText: 'Say that the weather is cold today.',
    questionAnswer: "Heute ist das Wetter kalt."
  },
  {
    questionText: 'Say that it is cool and cloudy.',
    questionAnswer: "Es ist kühl und bewölkt."
  }
];
}
