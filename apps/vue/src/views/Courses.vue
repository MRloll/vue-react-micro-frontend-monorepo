<script setup lang="ts">
  import { computed } from "vue";
  import type { CoursesPageProps } from "@repo/types";
  import ReactWrapper from "../ReactWrapper.vue";
  import { useLearningQueueStore } from "../stores/learningQueue";

  const queue = useLearningQueueStore();
  const loadCourses = () => import("react_app/CoursesPage");
  const courseProps = computed<CoursesPageProps>(() => ({
    queuedCourseIds: queue.courseIds,
    onToggleQueue: queue.toggleCourse,
  }));
</script>

<template>
  <div class="react-component">
    <UBadge color="success" label="React Page" class="chip" />
    <ReactWrapper :load="loadCourses" :component-props="courseProps" />
  </div>
</template>
