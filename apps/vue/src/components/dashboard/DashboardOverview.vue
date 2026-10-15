<script setup lang="ts">
import { AppButton } from "@repo/ui";

const stats = [
  {
    label: "Courses in progress",
    value: "04",
    icon: "i-lucide-book-open",
    tone: "bg-orange-50 text-orange-500",
  },
  {
    label: "Hours learned",
    value: "18.5 h",
    icon: "i-lucide-clock-3",
    tone: "bg-blue-50 text-blue-500",
  },
  {
    label: "Current streak",
    value: "12 days",
    icon: "i-lucide-flame",
    tone: "bg-emerald-50 text-emerald-500",
  },
  {
    label: "Avg. score",
    value: "92%",
    icon: "i-lucide-trophy",
    tone: "bg-violet-50 text-violet-500",
  },
];

const activities = [
  {
    action: "Completed lesson",
    detail: "Customer discovery",
    time: "2h ago",
    icon: "i-lucide-circle-check",
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    action: "Earned certificate",
    detail: "Data storytelling",
    time: "Yesterday",
    icon: "i-lucide-award",
    tone: "bg-violet-50 text-violet-600",
  },
  {
    action: "Joined course",
    detail: "Leadership essentials",
    time: "Oct 11",
    icon: "i-lucide-users",
    tone: "bg-orange-50 text-orange-600",
  },
];
</script>

<template>
  <div id="overview" class="mx-auto flex w-full max-w-[1440px] flex-col gap-6">
    <section class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="text-[11px] font-semibold tracking-[0.12em] text-primary-600">
          MONDAY, OCTOBER 14, 2024
        </p>
        <h1 class="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[28px]">
          Good morning, Jordan
        </h1>
        <p class="mt-1 text-sm text-slate-500">
          Here’s what’s happening with your learning journey.
        </p>
      </div>

      <AppButton
        class="rounded-full px-4"
        color="primary"
        href="#continue-learning"
        label="Continue learning"
        size="sm"
      />
    </section>

    <section
      aria-label="Learning progress"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="rounded-xl border border-slate-200 bg-white p-4"
      >
        <div class="flex items-center justify-between gap-3">
          <p class="text-xs text-slate-500">{{ stat.label }}</p>
          <UAvatar :class="['rounded-lg', stat.tone]" :icon="stat.icon" size="sm" />
        </div>
        <p class="mt-3 text-xl font-semibold tracking-tight text-slate-900">{{ stat.value }}</p>
      </div>
    </section>

    <section class="grid gap-5 xl:grid-cols-[minmax(0,1.7fr)_minmax(280px,0.8fr)]">
      <div id="continue-learning" class="min-w-0">
        <h2 class="mb-3 text-sm font-semibold text-slate-900">Continue learning</h2>
        <article class="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <span
              class="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-semibold tracking-wide text-orange-700"
            >
              IN PROGRESS
            </span>
            <span class="text-xs font-semibold text-primary-600">68%</span>
          </div>

          <h3 class="mt-4 text-base font-semibold text-slate-900">
            Product Strategy Fundamentals
          </h3>
          <p class="mt-1 text-sm leading-6 text-slate-500">
            Build sharper product instincts with frameworks you can use this week.
          </p>

          <div
            aria-label="Course progress"
            aria-valuemax="100"
            aria-valuemin="0"
            aria-valuenow="68"
            class="mt-5 h-2 overflow-hidden rounded-full bg-orange-100"
            role="progressbar"
          >
            <div class="h-full w-[68%] rounded-full bg-primary-500" />
          </div>

          <div class="mt-4 flex flex-wrap justify-between gap-2 text-xs text-slate-500">
            <span>Lesson 08 of 12</span>
            <span>42 min left</span>
          </div>
        </article>
      </div>

      <div id="recent-activity" class="min-w-0">
        <h2 class="mb-3 text-sm font-semibold text-slate-900">Recent activity</h2>
        <div class="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white px-4">
          <article
            v-for="activity in activities"
            :key="activity.action"
            class="flex items-start gap-3 py-4"
          >
            <UAvatar :class="['mt-0.5', activity.tone]" :icon="activity.icon" size="sm" />
            <div class="min-w-0 flex-1">
              <p class="text-xs font-medium text-slate-800">{{ activity.action }}</p>
              <p class="mt-1 truncate text-xs text-slate-500">{{ activity.detail }}</p>
            </div>
            <time class="shrink-0 pt-0.5 text-[10px] text-slate-400">{{ activity.time }}</time>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
