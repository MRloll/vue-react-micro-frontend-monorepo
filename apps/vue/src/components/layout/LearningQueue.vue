<script setup lang="ts">
  import UPopover from "@nuxt/ui/components/Popover.vue";
  import UIcon from "@nuxt/ui/components/Icon.vue";
  import { useLearningQueueStore } from "../../stores/learningQueue";

  const queue = useLearningQueueStore();
</script>

<template>
  <UPopover :content="{ align: 'end', sideOffset: 12 }">
    <AppButton
      :aria-label="`Learning queue, ${queue.count} ${queue.count === 1 ? 'course' : 'courses'}`"
      class="gap-2 rounded-full text-slate-600"
      color="neutral"
      icon="i-lucide-list-plus"
      variant="ghost"
    >
      <span class="hidden sm:inline">Learning queue</span>
      <span
        aria-hidden="true"
        class="flex min-w-5 items-center justify-center rounded-full bg-primary-100 px-1.5 py-0.5 text-[11px] font-semibold text-primary-700"
      >
        {{ queue.count }}
      </span>
    </AppButton>

    <template #content="{ close }">
      <section
        aria-label="Your learning queue"
        class="w-[360px] max-w-[calc(100vw-32px)] rounded-xl bg-white text-slate-900"
      >
        <div
          class="flex items-start justify-between gap-4 border-b border-slate-100 p-5"
        >
          <div>
            <h2 class="text-base font-semibold">Your learning queue</h2>
            <p class="mt-1 text-xs text-slate-500">
              {{ queue.count }} {{ queue.count === 1 ? "course" : "courses" }} ·
              {{ queue.totalLessons }} lessons
            </p>
          </div>
          <AppButton
            v-if="queue.count"
            label="Clear all"
            color="neutral"
            variant="ghost"
            size="xs"
            class="text-slate-500"
            @click="queue.clearQueue()"
          />
        </div>

        <ul
          v-if="queue.count"
          class="max-h-[min(360px,50dvh)] divide-y divide-slate-100 overflow-y-auto px-5"
        >
          <li
            v-for="(course, index) in queue.items"
            :key="course.id"
            class="flex items-start gap-3 py-4"
          >
            <span
              aria-hidden="true"
              class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-xs font-semibold text-primary-600"
              >{{ index + 1 }}</span
            >
            <div class="min-w-0 flex-1">
              <p class="text-sm font-medium leading-5">{{ course.title }}</p>
              <p class="mt-1 text-xs text-slate-500">{{ course.category }}</p>
              <p class="mt-1 text-xs text-slate-500">
                {{ course.lessons }} lessons · {{ course.progress }}% complete
              </p>
            </div>
            <AppButton
              :aria-label="`Remove ${course.title} from learning queue`"
              icon="i-lucide-x"
              square
              color="neutral"
              variant="ghost"
              size="xs"
              class="shrink-0 rounded-full text-slate-400 hover:text-slate-700"
              @click="queue.removeCourse(course.id)"
            />
          </li>
        </ul>
        <div v-else class="px-6 py-8 text-center">
          <UIcon
            name="i-lucide-list-plus"
            class="mx-auto mb-3 size-8 text-primary-500"
          />
          <p class="text-sm font-medium">Make room for your next skill.</p>
          <p class="mt-2 text-xs leading-5 text-slate-500">
            Add courses from My Courses to plan your next learning session.
          </p>
        </div>

        <div class="border-t border-slate-100 p-4">
          <AppButton
            to="/courses"
            :label="queue.count ? 'Manage courses' : 'Browse my courses'"
            class="w-full justify-center rounded-full"
            size="sm"
            @click="close()"
          />
        </div>
      </section>
    </template>
  </UPopover>
  <p role="status" class="sr-only" aria-live="polite">
    {{ queue.count }} {{ queue.count === 1 ? "course" : "courses" }} in your
    learning queue.
  </p>
</template>
