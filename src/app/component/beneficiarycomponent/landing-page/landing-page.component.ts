import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface AnimatedStats {
  students: number;
  languages: number;
  completionRate: number;
  satisfactionRate: number;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  @ViewChild('statsSection', { static: false }) statsSection?: ElementRef;

  progressPercentage = 0;
  dayStreak = 28;
  wordsLearned = 1247;

  animatedStats: AnimatedStats = {
    students: 0,
    languages: 0,
    completionRate: 0,
    satisfactionRate: 0
  };

  private targetStats: AnimatedStats = {
    students: 50000,
    languages: 25,
    completionRate: 94,
    satisfactionRate: 98
  };

  features: Feature[] = [
    {
      icon: '🎯',
      title: 'Interactive Study Plans',
      description: 'AI-powered personalized learning paths that adapt to your learning style, pace, and goals. Every lesson is tailored specifically for you.'
    },
    {
      icon: '🏆',
      title: 'Competitive Learning',
      description: 'Challenge friends, join language tournaments, and climb leaderboards. Turn your learning journey into an exciting competition.'
    },
    {
      icon: '💬',
      title: 'Real Conversation Practice',
      description: 'Practice with native speakers through our integrated video chat system. Get instant feedback on pronunciation and fluency.'
    },
    {
      icon: '📊',
      title: 'Advanced Progress Tracking',
      description: 'Detailed analytics show exactly where you excel and what needs improvement. Track vocabulary, grammar, and speaking skills separately.'
    },
    {
      icon: '🌟',
      title: 'Gamified Experience',
      description: 'Earn XP, unlock achievements, and collect rewards as you progress. Learning feels like playing your favorite game.'
    },
    {
      icon: '⚡',
      title: 'Lightning-Fast Results',
      description: 'Our proven methodology helps students achieve conversational fluency 3x faster than traditional learning methods.'
    }
  ];

  private intersectionObserver?: IntersectionObserver;
  private scrollListener?: () => void;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Animate progress bar on component load
    setTimeout(() => {
      this.progressPercentage = 75;
    }, 500);
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
    this.setupScrollListener();
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private setupIntersectionObserver(): void {
    if (!this.statsSection) return;

    const options = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateStats();
          this.intersectionObserver?.unobserve(entry.target);
        }
      });
    }, options);

    this.intersectionObserver.observe(this.statsSection.nativeElement);
  }

  private setupScrollListener(): void {
    this.scrollListener = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero') as HTMLElement;
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  private animateStats(): void {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      this.animatedStats = {
        students: Math.floor(this.targetStats.students * easeOutQuart),
        languages: Math.floor(this.targetStats.languages * easeOutQuart),
        completionRate: Math.floor(this.targetStats.completionRate * easeOutQuart),
        satisfactionRate: Math.floor(this.targetStats.satisfactionRate * easeOutQuart)
      };

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }

  onStartLearning(event: Event): void {
    event.preventDefault();
    // Navigate to registration or course selection page
    this.router.navigate(['/register']);
  }

  onExploreCourses(event: Event): void {
    event.preventDefault();
    // Navigate to courses page
    this.router.navigate(['/courses']);
  }

  onGetStarted(event: Event): void {
    event.preventDefault();
    // Navigate to registration page
    this.router.navigate(['/register']);
  }

  onViewCourses(event: Event): void {
    event.preventDefault();
    // Navigate to courses page
    this.router.navigate(['/courses']);
  }
}
