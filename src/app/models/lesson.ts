export interface Lesson {
  id: number;
  title: string;
  isCompleted: boolean;
  isLocked: boolean;
  expanded: boolean;
  objectives: string[];
  duration: string;
  difficulty: 'beginner' | 'intermediate';
}