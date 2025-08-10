import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';
import { VerbConjugation } from 'src/app/models/verb-conjugation';
import { Question } from 'src/app/models/question';
import { WordCardTitleComponent } from '../../word-card-title/word-card-title.component';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent {

quizLink = '/family-words-quiz';
title = 'Family Vocabulary List';
familyWordsSecondFlag = 'Audio Included'
description = 'Master German family vocabulary with interactive learning!';
emoji = '📖';
familyHowItWorks = 'Browse through flashcards, listen to pronunciations, and practice until youre confident with each word.';



titleForDialogue = 'Dialogue Practice';
descriptionForDialogue = 'This is an exercises to improve your speaking and listening skills';
emojiForDialogue = '🎧';
lessonWordCount = '13 Essential words';


checkNote  = '13 essential family member words in German';
checkNote1 = 'This lesson includes audio pronunciation for each word.';
checkNote2 = 'Practice speaking by repeating the words after listening to the audio.';
checkNote3 = 'Use the flashcards to test your memory and recognition of family vocabulary.';
checkNote4 = "Note plural forms only words like (die Eltern, die Geschwister)"



titleForVerbTable = 'Verb Conjugation Practice';
descriptionForVerbTable = 'Practice conjugating the verbs "kennen", "anrufen", "einladen", and "besuchen"';
emojiForVerbTable = '📚'  ;
verbWordCount = '4 Essential Verbs';
verbSecondFlag = 'Present / Past tense conjugation';
verbHowItWorks = 'Review the verb conjugation table carefully, then practice what you’ve learned in the interactive question section below.';


checkNoteVerb = 'How to say that you know someone using "kennen".';
checkNoteVerb1 = 'How to call someone on the phone with "anrufen".';
checkNoteVerb2 = 'How to invite someone to an event using "einladen".';
checkNoteVerb3 = 'How to say you\'re visiting someone with "besuchen".';
checkNoteVerb4 = 'When and how to use each verb correctly in a sentence.';
checkNoteVerb5 = 'The correct cases (like accusative) that go with each verb.';
checkNoteVerb6 = 'Practice examples and everyday situations with these verbs.';










   flashcards: (FlashCard | null)[][] = [
      [
        null
        ,
        null
        ,
        {german: 'das Baby', english: 'the baby', isFlipped: false }
        ,
        { german: 'die Babys', english: 'the babies', isFlipped: false }
      ],
       [
        null
        ,
        {german: 'die Mutter', english: 'the mother', isFlipped: false }

        ,
        null
        ,
        { german: 'die Mütter', english: 'the mothers', isFlipped: false }
      ],
      [
        null
        ,
        {german: 'die Großmutter', english: 'the grandmother', isFlipped: false }

        ,
        null
        ,
        { german: 'die GroßMütter', english: 'the grandmothers', isFlipped: false }
      ],
       [
        {german: 'der Großvater', english: 'the grandfather', isFlipped: false }
        ,
        null
        ,
        null
        ,
        { german: 'die Großväter', english: 'the grandfathers', isFlipped: false }
      ],
      [
        {german: 'der vater', english: 'the father', isFlipped: false }
        ,
        null
        ,
        null
        ,
        { german: 'die väter', english: 'the fathers', isFlipped: false }
      ],
      [
        {german: 'der Bruder', english: 'the brother', isFlipped: false }
        ,
        null
        ,
        null
        ,
        { german: 'die Brüder', english: 'the brothers', isFlipped: false }
      ],
       [
        null
        ,
        {german: 'die Schwester', english: 'the sister', isFlipped: false }

        ,
        null
        ,
        { german: 'die Schwestern', english: 'the sisters', isFlipped: false }
      ],
       [
        null
        ,
        null

        ,
        null
        ,
        { german: 'die Geschwister', english: 'the siblings', isFlipped: false }
      ],
        [
        {german: 'der Opa', english: 'the grandfather', isFlipped: false }
        ,
        null

        ,
        null
        ,
        { german: 'die Opas', english: 'the grandfathers', isFlipped: false }
      ],
       [
        null
        ,
        {german: 'die Oma', english: 'the grandmather', isFlipped: false }

        ,
        null
        ,
        { german: 'die Omas', english: 'the grandmothers', isFlipped: false }
      ],
          [
        null
        ,
        null
        ,
        null
        ,
        { german: 'die Eltern', english: 'the parents', isFlipped: false }
      ],
        [
        { german: 'der Sohn', english: 'the son', isFlipped: false }
        ,
        null
        ,
        null
        ,
        { german: 'die Söhne', english: 'the sons', isFlipped: false }
      ],
        [
        null
        ,
        { german: 'die Tochter', english: 'the daughter', isFlipped: false }

        ,
        null
        ,
        { german: 'die Töchter', english: 'the daughters', isFlipped: false }
      ],
    ]
 verbConjugations : VerbConjugation[] = [
  {
    ich: "ich besuche",
    du: "du besuchst",
    erEsSie: "er/es/sie besucht",
    wir: "wir besuchen",
    ihr: "ihr besucht",
    SieSie: "Sie/sie besuchen",
    verbName: "besuchen",
    partizipII: "besucht"
  },
  {
    ich: "ich lade ein",
    du: "du lädst ein",
    erEsSie: "er/es/sie lädt ein",
    wir: "wir laden ein",
    ihr: "ihr ladet ein",
    SieSie: "Sie/sie laden ein",
    verbName: "einladen",
    partizipII: "eingeladen"
  },
  {
    ich: "ich rufe an",
    du: "du rufst an",
    erEsSie: "er/es/sie ruft an",
    wir: "wir rufen an",
    ihr: "ihr ruft an",
    SieSie: "Sie/sie rufen an",
    verbName: "anrufen",
    partizipII: "angerufen"
  },
  {
    ich: "ich kenne",
    du: "du kennst",
    erEsSie: "er/es/sie kennt",
    wir: "wir kennen",
    ihr: "ihr kennt",
    SieSie: "Sie/sie kennen",
    verbName: "kennen",
    partizipII: "gekannt"
  }
];
// German Family Vocabulary Practice Questions with kennen, anrufen, einladen, besuchen
  // Question interface

  questionList1: Question[] = [
     {
      questionText: 'Ask your colleague if he or she know your father',
      questionAnswer: "Kennst du meinen Vater?"
    },
    {
      questionText: 'Tell someone you know his or her mother very well',
      questionAnswer: "Ich kenne deine Mutter sehr gut."
    },
    {
      questionText: 'Ask if they know your grandfather',
      questionAnswer: "Kennst ihr meinen Opa?"
    },
    {
      questionText: 'Say you don\'t know his grandmother',
      questionAnswer: "Ich kenne seine Oma nicht."
    },
    {
      questionText: 'Ask some one "does she knows your brother"',
      questionAnswer: "Kennt sie deinen Bruder?"
    },
    {
      questionText: 'Tell a group of poeple you know their sister',
      questionAnswer: "Ich kenne eure Schwester."
    },
    {
      questionText: 'Ask some one if he knows your uncle',
      questionAnswer: "Kennst du meinen Onkel?"
    },
    {
      questionText: 'Say you know their aunt well',
      questionAnswer: "Ich kenne eure Tante gut."
    },
    {
      questionText: 'Ask if he knows your son',
      questionAnswer: "Kennt er meinen Sohn?"
    },
    {
      questionText: 'Translate this sentence: "I know their daughter."',
      questionAnswer: "Ich kenne ihre Tochter."
    },
    {
      questionText: 'Say to group of people you don\'t know our daughter',
      questionAnswer: "Ihr Kennt unsere Tochter nicht."
    },
    {
      questionText: 'Say we don\'t know their daughter',
      questionAnswer: "Wir kennen euere Tochter nicht."
    },

  ];
  questionList2: Question[] = [
      {
      questionText: 'Say he call his father',
      questionAnswer: "Er ruft seinen Vater an."
    },
    {
      questionText: 'Say i called my mother yesterday',
      questionAnswer: "Ich habe gestern meine Mutter angerufen."
    },
    {
      questionText: 'Ask if they call their grandfather',
      questionAnswer: "Ruft ihr euren Opa an?"
    },
    {
      questionText: 'Say to some one (he or she) your grandmother called you',
      questionAnswer: "Deine Oma ruft dich an."
    },
    {
      questionText: 'Tell them your brother called',
      questionAnswer: "Mein Bruder hat angerufen."
    },
    {
      questionText: 'Ask if their sister called',
      questionAnswer: "Hat deine Schwester angerufen?"
    },
    {
      questionText: 'Say you need to call your uncle',
      questionAnswer: "Ich muss meinen Onkel anrufen."
    },
    {
      questionText: 'Tell them their aunt called earlier',
      questionAnswer: "Deine Tante hat früher angerufen."
    },
    {
      questionText: 'Say you will call your son tonight',
      questionAnswer: "Ich rufe heute Abend meinen Sohn an."
    },
    {
      questionText: 'Ask if they called their daughter',
      questionAnswer: "Hast du deine Tochter angerufen?"
    },
    {
      questionText: 'Say your cousin (male) called me',
      questionAnswer: "Mein Cousin hat mich angerufen."
    },
    {
      questionText: 'Tell them to call their cousin (female)',
      questionAnswer: "Ruf deine Cousine an!"
    },
    {
      questionText: 'Ask when they will call their parents',
      questionAnswer: "Wann rufst du deine Eltern an?"
    },
  ];
  questionList3: Question[] = [
       {
      questionText: 'Say you invited your father to dinner',
      questionAnswer: "Ich habe meinen Vater zum Abendessen eingeladen."
    },
    {
      questionText: 'Ask if they will invite their mother',
      questionAnswer: "Lädst du deine Mutter ein?"
    },
    {
      questionText: 'Say your grandfather invited us',
      questionAnswer: "Mein Opa hat uns eingeladen."
    },
    {
      questionText: 'Tell them to invite their grandmother',
      questionAnswer: "Lade deine Oma ein!"
    },
    {
      questionText: 'Say your brother invited me to the party',
      questionAnswer: "Mein Bruder hat mich zur Party eingeladen."
    },
    {
      questionText: 'Ask if their sister invited them',
      questionAnswer: "Hat deine Schwester dich eingeladen?"
    },
    {
      questionText: 'Say you want to invite your uncle',
      questionAnswer: "Ich möchte meinen Onkel einladen."
    },
    {
      questionText: 'Tell them their aunt invited everyone',
      questionAnswer: "Deine Tante hat alle eingeladen."
    },
    {
      questionText: 'Say you invited your son to lunch',
      questionAnswer: "Ich habe meinen Sohn zum Mittagessen eingeladen."
    },
    {
      questionText: 'Ask if they invited their daughter',
      questionAnswer: "Hast du deine Tochter eingeladen?"
    },
    {
      questionText: 'Say your cousin (male) invited us to his wedding',
      questionAnswer: "Mein Cousin hat uns zu seiner Hochzeit eingeladen."
    },
    {
      questionText: 'Tell them to invite their cousin (female)',
      questionAnswer: "Lade deine Cousine ein!"
    },
    {
      questionText: 'Ask who invited your parents',
      questionAnswer: "Wer hat deine Eltern eingeladen?"
    },
  ];
  questionList4: Question[] = [
       {
      questionText: 'Say you visited your father last week',
      questionAnswer: "Ich habe letzte Woche meinen Vater besucht."
    },
    {
      questionText: 'Ask if they will visit their mother',
      questionAnswer: "Besuchst du deine Mutter?"
    },
    {
      questionText: 'Say your grandfather visits us often',
      questionAnswer: "Mein Opa besucht uns oft."
    },
    {
      questionText: 'Tell them you want to visit your grandmother',
      questionAnswer: "Ich möchte meine Oma besuchen."
    },
    {
      questionText: 'Say your brother visited me yesterday',
      questionAnswer: "Mein Bruder hat mich gestern besucht."
    },
    {
      questionText: 'Ask when they visited their sister',
      questionAnswer: "Wann hast du deine Schwester besucht?"
    },
    {
      questionText: 'Say you need to visit your uncle',
      questionAnswer: "Ich muss meinen Onkel besuchen."
    },
    {
      questionText: 'Tell them their aunt visits them regularly',
      questionAnswer: "Deine Tante besucht euch regelmäßig."
    },
    {
      questionText: 'Say you will visit your son tomorrow',
      questionAnswer: "Ich besuche morgen meinen Sohn."
    },
    {
      questionText: 'Ask if they visited their daughter',
      questionAnswer: "Hast du deine Tochter besucht?"
    },
    {
      questionText: 'Say your cousin (female) visited us',
      questionAnswer: "Meine Cousine hat uns besucht."
    },
    {
      questionText: 'Tell them you visited your parents last month',
      questionAnswer: "Ich habe letzten Monat meine Eltern besucht."
    }
  ];


}
