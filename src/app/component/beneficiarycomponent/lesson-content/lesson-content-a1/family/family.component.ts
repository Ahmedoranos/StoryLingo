import { Component } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';
import { VerbConjugation } from 'src/app/models/verb-conjugation';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent {
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
    ]
 verbConjugations : VerbConjugation[] = [
  {
    ich: "ich besuche",
    du: "du besuchst",
    erEsSie: "er/es/sie besucht",
    wir: "wir besuchen",
    ihr: "ihr besucht",
    SieSie: "Sie/sie besuchen",
    verbName: "besuchen"
  },
  {
    ich: "ich lade ein",
    du: "du lädst ein",
    erEsSie: "er/es/sie lädt ein",
    wir: "wir laden ein",
    ihr: "ihr ladet ein",
    SieSie: "Sie/sie laden ein",
    verbName: "einladen"
  },
  {
    ich: "ich rufe an",
    du: "du rufst an",
    erEsSie: "er/es/sie ruft an",
    wir: "wir rufen an",
    ihr: "ihr ruft an",
    SieSie: "Sie/sie rufen an",
    verbName: "anrufen"
  },
  {
    ich: "ich kenne",
    du: "du kennst",
    erEsSie: "er/es/sie kennt",
    wir: "wir kennen",
    ihr: "ihr kennt",
    SieSie: "Sie/sie kennen",
    verbName: "kennen"
  }
];
// German Family Vocabulary Practice Questions with kennen, anrufen, einladen, besuchen

// Questions 1-12: kennen (to know)
qTellFriend1: string = 'Ask your colleague if he or she know your father';
correctSentence1: string = "Kennst du meinen Vater?";

qTellFriend2: string = 'Tell someone you know his or her mother very well';
correctSentence2: string = "Ich kenne deine Mutter sehr gut.";

qTellFriend3: string = 'Ask if they know your grandfather';
correctSentence3: string = "Kennst ihr meinen Opa?";

qTellFriend4: string = 'Say you don\'t know his grandmother';
correctSentence4: string = "Ich kenne seine Oma nicht.";

qTellFriend5: string = 'Ask if she knows your brother';
correctSentence5: string = "Kennt sie deinen Bruder?";

qTellFriend6: string = 'Tell a group of poeple you know their sister';
correctSentence6: string = "Ich kenne eure Schwester.";

qTellFriend7: string = 'Ask if some one if he knows your uncle';
correctSentence7: string = "Kennst du meinen Onkel?";

qTellFriend8: string = 'Say you know their aunt well';
correctSentence8: string = "Ich kenne eure Tante gut.";

qTellFriend9: string = 'Ask if he knows your son';
correctSentence9: string = "Kennt er meinen Sohn?";

qTellFriend10: string = 'Translate this sentence: "I know their daughter."';
correctSentence10: string = "Ich kenne ihre Tochter.";

qTellFriend11: string = 'Say to group of people we don\'t know our daughter';
correctSentence11: string = "Ihr Kennt unsere Tochter nicht.";

qTellFriend12: string = 'Say we don\'t know their daughter';
correctSentence12: string = "Wir kennen uere Tochter nicht.";

// Questions 13-25: anrufen (to call)
qTellFriend13: string = 'Tell someone to call (her or his) father';
correctSentence13: string = "Ruf deinen Vater an!";

qTellFriend14: string = 'Say you called your mother yesterday';
correctSentence14: string = "Ich habe gestern meine Mutter angerufen.";

qTellFriend15: string = 'Ask if they call their grandfather';
correctSentence15: string = "Ruft ihr euren Opa an?";

qTellFriend16: string = 'Say to some one (he or she) your grandmother called you';
correctSentence16: string = "Deine Oma ruft dich an.";

qTellFriend17: string = 'Tell them your brother called';
correctSentence17: string = "Mein Bruder hat angerufen.";

qTellFriend18: string = 'Ask if their sister called';
correctSentence18: string = "Hat deine Schwester angerufen?";

qTellFriend19: string = 'Say you need to call your uncle';
correctSentence19: string = "Ich muss meinen Onkel anrufen.";

qTellFriend20: string = 'Tell them their aunt called earlier';
correctSentence20: string = "Deine Tante hat früher angerufen.";

qTellFriend21: string = 'Say you will call your son tonight';
correctSentence21: string = "Ich rufe heute Abend meinen Sohn an.";

qTellFriend22: string = 'Ask if they called their daughter';
correctSentence22: string = "Hast du deine Tochter angerufen?";

qTellFriend23: string = 'Say your cousin (male) called me';
correctSentence23: string = "Mein Cousin hat mich angerufen.";

qTellFriend24: string = 'Tell them to call their cousin (female)';
correctSentence24: string = "Ruf deine Cousine an!";

qTellFriend25: string = 'Ask when they will call their parents';
correctSentence25: string = "Wann rufst du deine Eltern an?";

// Questions 26-38: einladen (to invite)
qTellFriend26: string = 'Say you invited your father to dinner';
correctSentence26: string = "Ich habe meinen Vater zum Abendessen eingeladen.";

qTellFriend27: string = 'Ask if they will invite their mother';
correctSentence27: string = "Lädst du deine Mutter ein?";

qTellFriend28: string = 'Say your grandfather invited us';
correctSentence28: string = "Mein Opa hat uns eingeladen.";

qTellFriend29: string = 'Tell them to invite their grandmother';
correctSentence29: string = "Lade deine Oma ein!";

qTellFriend30: string = 'Say your brother invited me to the party';
correctSentence30: string = "Mein Bruder hat mich zur Party eingeladen.";

qTellFriend31: string = 'Ask if their sister invited them';
correctSentence31: string = "Hat deine Schwester dich eingeladen?";

qTellFriend32: string = 'Say you want to invite your uncle';
correctSentence32: string = "Ich möchte meinen Onkel einladen.";

qTellFriend33: string = 'Tell them their aunt invited everyone';
correctSentence33: string = "Deine Tante hat alle eingeladen.";

qTellFriend34: string = 'Say you invited your son to lunch';
correctSentence34: string = "Ich habe meinen Sohn zum Mittagessen eingeladen.";

qTellFriend35: string = 'Ask if they invited their daughter';
correctSentence35: string = "Hast du deine Tochter eingeladen?";

qTellFriend36: string = 'Say your cousin (male) invited us to his wedding';
correctSentence36: string = "Mein Cousin hat uns zu seiner Hochzeit eingeladen.";

qTellFriend37: string = 'Tell them to invite their cousin (female)';
correctSentence37: string = "Lade deine Cousine ein!";

qTellFriend38: string = 'Ask who invited your parents';
correctSentence38: string = "Wer hat deine Eltern eingeladen?";

// Questions 39-50: besuchen (to visit)
qTellFriend39: string = 'Say you visited your father last week';
correctSentence39: string = "Ich habe letzte Woche meinen Vater besucht.";

qTellFriend40: string = 'Ask if they will visit their mother';
correctSentence40: string = "Besuchst du deine Mutter?";

qTellFriend41: string = 'Say your grandfather visits us often';
correctSentence41: string = "Mein Opa besucht uns oft.";

qTellFriend42: string = 'Tell them you want to visit your grandmother';
correctSentence42: string = "Ich möchte meine Oma besuchen.";

qTellFriend43: string = 'Say your brother visited me yesterday';
correctSentence43: string = "Mein Bruder hat mich gestern besucht.";

qTellFriend44: string = 'Ask when they visited their sister';
correctSentence44: string = "Wann hast du deine Schwester besucht?";

qTellFriend45: string = 'Say you need to visit your uncle';
correctSentence45: string = "Ich muss meinen Onkel besuchen.";

qTellFriend46: string = 'Tell them their aunt visits them regularly';
correctSentence46: string = "Deine Tante besucht euch regelmäßig.";

qTellFriend47: string = 'Say you will visit your son tomorrow';
correctSentence47: string = "Ich besuche morgen meinen Sohn.";

qTellFriend48: string = 'Ask if they visited their daughter';
correctSentence48: string = "Hast du deine Tochter besucht?";

qTellFriend49: string = 'Say your cousin (female) visited us';
correctSentence49: string = "Meine Cousine hat uns besucht.";

qTellFriend50: string = 'Tell them you visited your parents last month';
correctSentence50: string = "Ich habe letzten Monat meine Eltern besucht.";
}
