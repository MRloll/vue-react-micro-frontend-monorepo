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
