import { BookOpen, ChartColumn, Layers, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Course } from "@repo/types";

export type CourseCardData = Course & {
  icon: LucideIcon;
  thumbnailClass: string;
  iconClass: string;
};

export const courses: CourseCardData[] = [
  {
    id: "product-strategy-fundamentals",
    title: "Product Strategy Fundamentals",
    category: "Business",
    lessons: 12,
    progress: 68,
    icon: BookOpen,
    thumbnailClass: "rx:bg-learnly-secondary",
    iconClass: "rx:text-learnly-brand",
    status: "in-progress",
    saved: true,
  },
  {
    id: "data-storytelling-with-impact",
    title: "Data Storytelling with Impact",
    category: "Design & Data",
    lessons: 8,
    progress: 34,
    icon: ChartColumn,
    thumbnailClass: "rx:bg-learnly-muted-surface",
    iconClass: "rx:text-learnly-muted",
    status: "in-progress",
    saved: false,
  },
  {
    id: "leading-high-trust-teams",
    title: "Leading High-Trust Teams",
    category: "Leadership",
    lessons: 10,
    progress: 100,
    icon: Users,
    thumbnailClass: "rx:bg-learnly-accent",
    iconClass: "rx:text-learnly-accent-foreground",
    status: "completed",
    saved: false,
  },
  {
    id: "design-systems-in-practice",
    title: "Design Systems in Practice",
    category: "Product Design",
    lessons: 14,
    progress: 12,
    icon: Layers,
    thumbnailClass: "rx:bg-learnly-sidebar-accent",
    iconClass: "rx:text-learnly-sidebar-primary",
    status: "in-progress",
    saved: true,
  },
];
