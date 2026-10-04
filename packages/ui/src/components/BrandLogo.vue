<script setup lang="ts">
  const { href = "#top", small = false } = defineProps<{
    href?: string;
    small?: boolean;
  }>();
</script>

<template>
  <a
    :href="href"
    aria-label="Learnly home"
    class="inline-flex items-center gap-2.5 text-[19px] font-extrabold text-learnly-navy no-underline"
  >
    <span
      class="grid place-items-center bg-learnly-brand font-extrabold text-learnly-surface"
      :class="
        small
          ? 'size-8 rounded-[9px] text-[17px]'
          : 'size-[38px] rounded-[11px] text-[20px]'
      "
      >L</span
    >
    <span>Learnly</span>
  </a>
</template>
