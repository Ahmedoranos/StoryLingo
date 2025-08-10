import { Component, OnInit, OnDestroy } from '@angular/core';

interface DialogueLine {
  personA: string;
  personB: string;
  englishPrompt: string;
}

@Component({
  selector: 'app-dialoge-quiz',
  templateUrl: './dialoge-quiz.component.html',
  styleUrls: ['./dialoge-quiz.component.css']
})
export class DialogeQuizComponent implements OnInit, OnDestroy {
  dialogue: DialogueLine[] = [
    {
      personA: "Hallo! Wie geht es dir?",
      personB: "Hallo! Es geht mir gut, danke. Und dir?",
      englishPrompt: "Greet your friend and ask how they are doing"
    },
    {
      personA: "Auch gut. Hast du deine Familie besucht?",
      personB: "Ja, ich habe meine Mutter und meine Großmutter besucht. Und du?",
      englishPrompt: "Say you're also good and ask if they visited their family"
    },
    {
      personA: "Ich habe meinen Bruder und meine Schwester angerufen. Wir besuchen unsere Eltern am Wochenende.",
      personB: "Das ist schön. Hast du einen Vater und eine Mutter?",
      englishPrompt: "Say you called your brother and sister, and that you're visiting your parents on the weekend"
    },
    {
      personA: "Ja, ich habe Eltern. Meine Großväter sind sehr alt, aber sie sind sehr nett.",
      personB: "Das ist gut. Ich habe meine Großeltern sehr gern.",
      englishPrompt: "Say yes, you have parents. Mention your grandfathers are very old but very nice"
    },
    {
      personA: "Ich kenne sie. Sie sind sehr nett.",
      personB: "Ja, das stimmt. Bis bald!",
      englishPrompt: "Say you know them and they are very nice"
    },
    {
      personA: "Bis bald!",
      personB: "",
      englishPrompt: "Say goodbye"
    }
  ];

  currentLineIndex = 0;
  isRecording = false;
  isProcessing = false;
  hasRecorded = false;
  showComputerResponse = false;
  isPlaying = false;
  quizCompleted = false;
  userSpeech = '';

  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private speechSynthesis: SpeechSynthesis;

  constructor() {
    this.speechSynthesis = window.speechSynthesis;
  }

  ngOnInit() {
    // Initialize any setup needed
  }

  ngOnDestroy() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
  }

  get currentLine(): DialogueLine {
    return this.dialogue[this.currentLineIndex];
  }

  get progressPercentage(): number {
    return ((this.currentLineIndex + 1) / this.dialogue.length) * 100;
  }

  get isLastLine(): boolean {
    return this.currentLineIndex === this.dialogue.length - 1;
  }

  async toggleRecording() {
    if (this.isRecording) {
      this.stopRecording();
    } else {
      await this.startRecording();
    }
  }

  private async startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);
      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (event) => {
        this.audioChunks.push(event.data);
      };

      this.mediaRecorder.onstop = () => {
        this.processRecording();
      };

      this.mediaRecorder.start();
      this.isRecording = true;
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access microphone. Please check your permissions.');
    }
  }

  private stopRecording() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
      this.isRecording = false;
      this.isProcessing = true;

      // Stop all tracks to free up the microphone
      this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
  }

  private processRecording() {
    // Simulate processing time
    setTimeout(() => {
      this.isProcessing = false;
      this.hasRecorded = true;
      // Simulate speech recognition result
      this.userSpeech = this.currentLine.personA;
      this.displayComputerResponse();
    }, 1000);
  }

  private displayComputerResponse() {
    this.showComputerResponse = true;
    // Auto-play computer response after a short delay
    setTimeout(() => {
      if (this.currentLine.personB.trim() !== '') {
        this.playComputerResponse();
      }
    }, 300);
  }

  playComputerResponse() {
    if (this.currentLine.personB.trim() === '') {
      // Last line has no computer response
      return;
    }

    this.isPlaying = true;
    const utterance = new SpeechSynthesisUtterance(this.currentLine.personB);
    utterance.lang = 'de-DE';
    utterance.rate = 0.8;
    
    utterance.onend = () => {
      this.isPlaying = false;
    };

    utterance.onerror = () => {
      this.isPlaying = false;
      console.error('Speech synthesis error');
    };

    this.speechSynthesis.speak(utterance);
  }

  nextLine() {
    if (this.currentLineIndex < this.dialogue.length - 1) {
      this.currentLineIndex++;
      this.resetCurrentLine();
    }
  }

  resetCurrentLine() {
    this.hasRecorded = false;
    this.showComputerResponse = false;
    this.userSpeech = '';
    this.isPlaying = false;
  }

  finishQuiz() {
    this.quizCompleted = true;
  }

  restartQuiz() {
    this.currentLineIndex = 0;
    this.quizCompleted = false;
    this.resetCurrentLine();
  }
}