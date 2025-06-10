import { Component, Input } from '@angular/core';
import { FlashCard } from 'src/app/models/flash-card';
@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css']
})
export class WordCardComponent {
  @Input() flashcards: (FlashCard | null)[][] = [];


  private voices: SpeechSynthesisVoice[] = [];
  private germanVoice: SpeechSynthesisVoice | null = null;
  private voicesLoaded = false;

  ngOnInit(): void {
    this.loadVoices();
  }

  private loadVoices(): void {
    if ('speechSynthesis' in window) {
      // Get voices immediately
      this.voices = window.speechSynthesis.getVoices();
      this.setGermanVoice();

      // Chrome sometimes needs the onvoiceschanged event
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
          this.voices = window.speechSynthesis.getVoices();
          this.setGermanVoice();
          this.voicesLoaded = true;
        };
      }

      // Fallback timeout for voice loading
      setTimeout(() => {
        if (!this.voicesLoaded) {
          this.voices = window.speechSynthesis.getVoices();
          this.setGermanVoice();
          this.voicesLoaded = true;
        }
      }, 100);
    }
  }

  private setGermanVoice(): void {
    // Find the best German voice
    const germanVoices = this.voices.filter(voice => 
      voice.lang.startsWith('de') || voice.lang.includes('de-DE')
    );
    
    if (germanVoices.length > 0) {
      // Prefer voices with 'de-DE' specifically
      this.germanVoice = germanVoices.find(voice => voice.lang === 'de-DE') || germanVoices[0];
      console.log('German voice selected:', this.germanVoice.name);
    } else {
      console.warn('No German voices found, using default voice');
    }
  }

  flipCard(card: FlashCard): void {
    console.log("card clicked " + card.german);
    console.log("Full card object:", card); // Debug the entire card
    console.log("Card german property:", card?.german); // Debug the german property specifically
    
    if (!card) return;

    // Flip the card
    card.isFlipped = true;

    // Pronounce the German word with Chrome compatibility
    this.speakGerman(card.german);

    // Auto flip back after 3 seconds
    setTimeout(() => {
      card.isFlipped = false;
    }, 3000);
  }

  private speakGerman(text: string): void {
    console.log("speakGerman called with text:", text); // Debug the input text
    
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Ensure voices are loaded before speaking
    if (!this.voicesLoaded && this.voices.length === 0) {
      this.loadVoices();
      // Retry after a short delay
      setTimeout(() => this.speakGerman(text), 200);
      return;
    }

    // Small delay to ensure cancellation is complete (Chrome fix)
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';

      // Use specific German voice if available
      if (this.germanVoice) {
        utterance.voice = this.germanVoice;
      }

      // Chrome-friendly settings
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 1;

      // Event listeners for debugging
      utterance.onstart = () => console.log('Speech started for:', text);
      utterance.onend = () => console.log('Speech ended for:', text);
      utterance.onerror = (event) => {
        console.error('Speech error:', event);
        // Retry once on error
        if (event.error === 'network' || event.error === 'synthesis-failed') {
          setTimeout(() => {
            console.log('Retrying speech synthesis...');
            window.speechSynthesis.speak(utterance);
          }, 500);
        }
      };

      console.log("About to speak text:", text); // Debug what we're about to speak
      console.log("using voice:", utterance.voice ? utterance.voice.name : 'default');
      
      window.speechSynthesis.speak(utterance);
      console.log("Speech synthesis command sent for:", text);
    }, 100);
  }

  // Optional: Method to get available German voices (for debugging)
  getAvailableGermanVoices(): SpeechSynthesisVoice[] {
    return this.voices.filter(voice => voice.lang.startsWith('de'));
  }

  // Optional: Method to force voice reload (can be called from template)
  reloadVoices(): void {
    this.voicesLoaded = false;
    this.loadVoices();
  }
}
