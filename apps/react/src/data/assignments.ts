export type AssignmentStatus =
  | "due-soon"
  | "in-review"
  | "not-started"
  | "submitted";

export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  dueLabel: string;
  status: AssignmentStatus;
}

// Snapshot from the Pen design; these dates and totals are sample course data.
export const assignmentSummary = {
  dueThisWeek: "05",
  submitted: "18",
  needsReview: "03",
};

export const assignments: Assignment[] = [
  {
    id: "competitive-analysis-brief",
    title: "Competitive analysis brief",
    course: "Product Strategy",
    dueDate: "2024-10-14T18:00:00",
    dueLabel: "Today, 6:00 PM",
    status: "due-soon",
  },
  {
    id: "dashboard-critique",
    title: "Dashboard critique",
    course: "Design Systems",
    dueDate: "2024-10-18",
    dueLabel: "Oct 18, 2024",
    status: "in-review",
  },
  {
    id: "interview-reflection",
    title: "Interview reflection",
    course: "Leadership",
    dueDate: "2024-10-21",
    dueLabel: "Oct 21, 2024",
    status: "not-started",
  },
  {
    id: "storytelling-worksheet",
    title: "Storytelling worksheet",
    course: "Data Storytelling",
    dueDate: "2024-10-24",
    dueLabel: "Oct 24, 2024",
    status: "submitted",
  },
  {
    id: "team-charter",
    title: "Team charter",
    course: "High-Trust Teams",
    dueDate: "2024-10-28",
    dueLabel: "Oct 28, 2024",
    status: "not-started",
  },
];
