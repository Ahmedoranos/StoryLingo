import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../../models/lesson';
import { ProgressStats } from '../../../models/progress-stats';

@Component({
  selector: 'app-language-level',
  templateUrl: './language-level.component.html',
  styleUrls: ['./language-level.component.css']
})
export class LanguageLevelComponent implements OnInit{
 lessons: Lesson[] = [];
  progressStats: ProgressStats = {
    completed: 0,
    available: 0,
    locked: 0,
    percentage: 0
  };

  private readonly lessonLinks: string[] = [
    '/greetings', '/greetings', '/greetings', '/family', '/greetings',
    '/greetings', 'Family Members', 'Days of the Week',
    'Months', 'Weather', 'Food & Drinks', 'Body Parts', 'Clothing',
    'Animals', 'Transportation', 'House & Home', 'School Supplies', 'Jobs & Professions',
    'Hobbies', 'Sports', 'Music', 'Technology', 'Shopping',
    'Restaurant', 'Travel', 'Health', 'Emotions', 'Time',
    'Directions', 'Nature', 'Holidays', 'Friendship', 'Review & Assessment'
  ];

  private readonly lessonTopics: string[] = [
    'Basic Greetings', 'Numbers 1-10', 'Colors', 'Family Members', 'Days of the Week',
    'Months', 'Weather', 'Food & Drinks', 'Body Parts', 'Clothing',
    'Animals', 'Transportation', 'House & Home', 'School Supplies', 'Jobs & Professions',
    'Hobbies', 'Sports', 'Music', 'Technology', 'Shopping',
    'Restaurant', 'Travel', 'Health', 'Emotions', 'Time',
    'Directions', 'Nature', 'Holidays', 'Friendship', 'Review & Assessment'
  ];

  private readonly lessonObjectives: string[][] = [
    ['Learn common greeting phrases', 'Practice pronunciation', 'Role-play conversations'],
    ['Count from 1 to 10', 'Use numbers in sentences', 'Practice number games'],
    ['Identify basic colors', 'Describe objects by color', 'Color vocabulary quiz'],
    ['Name family members', 'Describe family interactions', 'Talk about your family','13 new words',"4 new verbs"],
    ['Learn days of the week', 'Use days in sentences', 'Weekly schedule practice'],
    ['Name all months', 'Talk about seasons', 'Date and time expressions'],
    ['Describe weather conditions', 'Weather vocabulary', 'Make weather predictions'],
    ['Food and drink vocabulary', 'Order food in English', 'Cooking terms'],
    ['Learn body part names', 'Health-related expressions', 'Describing symptoms'],
    ['Clothing vocabulary', 'Describe what you wear', 'Shopping for clothes'],
    ['Animal names and sounds', 'Habitat descriptions', 'Animal characteristics'],
    ['Transportation methods', 'Travel vocabulary', 'Giving directions'],
    ['Home and furniture', 'Room descriptions', 'Household activities'],
    ['School supplies names', 'Classroom language', 'Educational activities'],
    ['Job titles and descriptions', 'Work-related vocabulary', 'Career discussions'],
    ['Hobby vocabulary', 'Express preferences', 'Talking about free time'],
    ['Sports names and rules', 'Exercise vocabulary', 'Sports discussions'],
    ['Musical instruments', 'Music genres', 'Expressing musical preferences'],
    ['Technology vocabulary', 'Digital communication', 'Modern life expressions'],
    ['Shopping vocabulary', 'Money and prices', 'Market conversations'],
    ['Restaurant vocabulary', 'Ordering food', 'Dining etiquette'],
    ['Travel expressions', 'Airport and hotel', 'Tourist conversations'],
    ['Health vocabulary', 'Medical expressions', 'Wellness discussions'],
    ['Emotion words', 'Express feelings', 'Emotional intelligence'],
    ['Time expressions', 'Telling time', 'Schedule discussions'],
    ['Direction vocabulary', 'Navigation skills', 'Location descriptions'],
    ['Nature vocabulary', 'Environmental topics', 'Outdoor activities'],
    ['Holiday traditions', 'Celebration vocabulary', 'Cultural discussions'],
    ['Friendship expressions', 'Social interactions', 'Relationship vocabulary'],
    ['Review all topics', 'Final assessment', 'Progress evaluation']
  ];

  ngOnInit(): void {
    this.initializeLessons();
    this.updateProgress();
  }

  private initializeLessons(): void {
    this.lessons = this.lessonTopics.map((topic, index) => ({
      id: index + 1,
      title: `Lesson ${index + 1}: ${topic}`,
      isCompleted: index < 4, // First 4 lessons completed
      isLocked: index > 4, // Lock lessons after the 5th one
      expanded: false,
      objectives: this.lessonObjectives[index],
      duration: `${Math.floor(Math.random() * 15) + 10} min`,
      difficulty: index < 10 ? 'beginner' : index < 20 ? 'intermediate' : 'beginner',
      lessonLink: this.lessonLinks[index]
    }));
  }

  toggleLessonExpansion(lessonId: number): void {
    const lesson = this.lessons.find(l => l.id === lessonId);
    if (lesson) {
      // Toggle current lesson
      lesson.expanded = !lesson.expanded;
      
      // Close other expanded lessons (optional - remove for multiple open)
      this.lessons.forEach(l => {
        if (l.id !== lessonId) {
          l.expanded = false;
        }
      });
    }
  }

  startLesson(lessonId: number): void {
    const lesson = this.lessons.find(l => l.id === lessonId);
    
    if (lesson && !lesson.isLocked && !lesson.isCompleted) {
      // Mark lesson as completed
      lesson.isCompleted = true;
      
      // Unlock next lesson
      const nextLesson = this.lessons.find(l => l.id === lessonId + 1);
      if (nextLesson) {
        nextLesson.isLocked = false;
      }
      
      this.updateProgress();
      
      // Show completion message (you might want to use a proper Angular dialog/toast)
      alert(`Congratulations! You've completed ${lesson.title}!`);
    }
  }

  reviewLesson(lessonId: number): void {
    // Implement review logic here
    console.log(`Reviewing lesson ${lessonId}`);
  }

  previewLesson(lessonId: number): void {
    // Implement preview logic here
    console.log(`Previewing lesson ${lessonId}`);
  }

  private updateProgress(): void {
    const completedCount = this.lessons.filter(l => l.isCompleted).length;
    const availableCount = this.lessons.filter(l => !l.isLocked && !l.isCompleted).length;
    const lockedCount = this.lessons.filter(l => l.isLocked).length;
    const progressPercentage = (completedCount / 30) * 100;

    this.progressStats = {
      completed: completedCount,
      available: availableCount,
      locked: lockedCount,
      percentage: Math.round(progressPercentage * 10) / 10
    };
  }

  getLessonIcon(lesson: Lesson): string {
    if (lesson.isCompleted) return '✓';
    if (lesson.isLocked) return '🔒';
    return lesson.id.toString();
  }

  getLessonStatus(lesson: Lesson): string {
    if (lesson.isCompleted) return 'Completed';
    if (lesson.isLocked) return 'Locked';
    return 'Ready to start';
  }

  getLessonStatusClass(lesson: Lesson): string {
    if (lesson.isCompleted) return 'completed';
    if (lesson.isLocked) return 'locked';
    return 'available';
  }
}

