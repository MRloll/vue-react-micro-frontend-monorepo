import { defineStore } from "pinia";
import type { LearningQueueItem } from "@repo/types";

export const useLearningQueueStore = defineStore("learningQueue", {
  state: () => ({
    items: [] as LearningQueueItem[],
  }),
  getters: {
    count: (state) => state.items.length,
    courseIds: (state) => state.items.map((course) => course.id),
    totalLessons: (state) =>
      state.items.reduce((total, course) => total + course.lessons, 0),
  },
  actions: {
    addCourse(course: LearningQueueItem) {
      if (this.items.some((item) => item.id === course.id)) return;

      // Keep UI-specific icons and classes out of shared state.
      const { id, title, category, lessons, progress } = course;
      this.items.push({ id, title, category, lessons, progress });
    },
    removeCourse(courseId: string) {
      this.items = this.items.filter((course) => course.id !== courseId);
    },
    toggleCourse(course: LearningQueueItem) {
      if (this.items.some((item) => item.id === course.id)) {
        this.removeCourse(course.id);
      } else {
        this.addCourse(course);
      }
    },
    clearQueue() {
      this.items = [];
    },
  },
});
