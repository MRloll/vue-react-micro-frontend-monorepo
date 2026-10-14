<script setup lang="ts">
  defineProps<{
    number: string;
    title: string;
    description: string;
    outlined?: boolean;
  }>();
</script>

<template>
  <article
    class="flex flex-col gap-3 min-h-40 p-5 rounded-[14px] border border-learnly-peach hover:bg-learnly-navy hover:text-learnly-surface group"
  >
    <span class="text-[12px] font-extrabold text-learnly-brand">{{
      number
    }}</span>
    <h3 class="text-[17px] font-bold">{{ title }}</h3>
    <p
      class="max-w-[350px] text-[12px] leading-[1.3] group-hover:text-learnly-on-dark"
    >
      {{ description }}
    </p>
  </article>
</template>
