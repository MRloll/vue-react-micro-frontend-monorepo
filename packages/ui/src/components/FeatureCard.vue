<script setup lang="ts">
  withDefaults(
    defineProps<{
      number: string;
      title: string;
      description: string;
      tone?: "cream" | "dark" | "surface";
      outlined?: boolean;
    }>(),
    { tone: "cream", outlined: false },
  );
</script>

<template>
  <article
    class="flex flex-col gap-3 p-5"
    :class="[
      outlined ? 'min-h-40 rounded-[14px] border' : 'min-h-[170px] rounded-2xl',
      tone === 'dark'
        ? 'border-learnly-navy bg-learnly-navy text-learnly-surface'
        : tone === 'surface'
          ? 'border-learnly-peach bg-learnly-surface'
          : 'border-learnly-peach bg-learnly-cream',
    ]"
  >
    <span class="text-[12px] font-extrabold text-learnly-brand">{{
      number
    }}</span>
    <h3 class="text-[17px] font-bold">{{ title }}</h3>
    <p
      class="max-w-[350px] text-[12px] leading-[1.3]"
      :class="tone === 'dark' ? 'text-learnly-on-dark' : 'text-learnly-muted'"
    >
      {{ description }}
    </p>
  </article>
</template>
