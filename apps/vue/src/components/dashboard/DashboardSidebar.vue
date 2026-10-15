<script setup lang="ts">
import { AppButton } from "@repo/ui";

defineProps<{
    open: boolean;
  }>();

  const emit = defineEmits<{
    close: [];
  }>();

  const learningLinks = [
    { label: "Overview", icon: "i-lucide-layout-dashboard", active: true },
    { label: "My Courses", icon: "i-lucide-book-open", active: false },
    { label: "Assignments", icon: "i-lucide-clipboard-check", active: false },
    { label: "Analytics", icon: "i-lucide-chart-bar", active: false },
  ];

  const personalLinks = [
    { label: "Calendar", icon: "i-lucide-calendar" },
    { label: "Messages", icon: "i-lucide-message-square" },
  ];
</script>

<template>
  <button
    v-if="open"
    aria-label="Close navigation"
    class="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
    type="button"
    @click="emit('close')"
  />

  <aside
    :class="[
      'fixed inset-y-0 left-0 z-50 flex w-[230px] flex-col',
      'bg-slate-900 px-4 py-5 text-white transition-transform duration-200',
      'lg:sticky lg:top-[76px] lg:h-[calc(100vh-76px)] lg:shrink-0 lg:translate-x-0',
      open ? 'translate-x-0' : '-translate-x-full',
    ]"
  >
    <div class="mb-4 flex justify-end lg:hidden">
      <AppButton
        aria-label="Close navigation"
        class="size-9 rounded-lg text-slate-300"
        color="neutral"
        icon="i-lucide-x"
        square
        variant="ghost"
        @click="emit('close')"
      />
    </div>

    <nav aria-label="Learning hub" class="space-y-2">
      <p
        class="px-3 pb-1 text-[11px] font-semibold tracking-[0.12em] text-slate-400"
      >
        LEARNING HUB
      </p>
      <AppButton
        v-for="item in learningLinks"
        :key="item.label"
        :class="[
          'w-full justify-start gap-3 rounded-lg px-3 py-2.5 text-sm',
          item.active
            ? 'bg-primary-500 text-white hover:bg-primary-600'
            : 'text-slate-300 hover:bg-white/10 hover:text-white',
        ]"
        :color="item.active ? 'primary' : 'neutral'"
        :icon="item.icon"
        :variant="item.active ? 'solid' : 'ghost'"
        @click="emit('close')"
      >
        {{ item.label }}
      </AppButton>
    </nav>

    <nav aria-label="Your space" class="mt-7 space-y-2">
      <p
        class="px-3 pb-1 text-[11px] font-semibold tracking-[0.12em] text-slate-400"
      >
        YOUR SPACE
      </p>
      <AppButton
        v-for="item in personalLinks"
        :key="item.label"
        :class="[
          'w-full justify-start gap-3 rounded-lg px-3 py-2.5 text-sm',
          'text-slate-300 hover:bg-white/10 hover:text-white',
        ]"
        color="neutral"
        :icon="item.icon"
        variant="ghost"
        @click="emit('close')"
      >
        {{ item.label }}
      </AppButton>
    </nav>

    <div class="mt-auto rounded-xl border border-slate-700 bg-slate-800/70 p-3">
      <p class="text-xs leading-5 text-slate-300">
        Keep your learning momentum going.
      </p>
      <AppButton
        class="mt-3 w-full justify-center rounded-lg border-slate-600 text-xs text-white hover:bg-white/10"
        color="neutral"
        href="#plan"
        label="View plan"
        size="xs"
        variant="outline"
      />
    </div>
  </aside>
</template>
