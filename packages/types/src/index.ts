export interface user {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type CourseStatus = "in-progress" | "completed";

export type CourseFilter = "all" | "saved" | CourseStatus;

export interface Course {
  id: string;
  title: string;
  category: string;
  lessons: number;
  progress: number;
  status: CourseStatus;
  saved: boolean;
}

export type LearningQueueItem = Pick<
  Course,
  "id" | "title" | "category" | "lessons" | "progress"
>;

/** Framework-neutral contract between the Vue host and the React remote. */
export interface CoursesPageProps {
  queuedCourseIds?: readonly string[];
  onToggleQueue?: (course: LearningQueueItem) => void;
}
