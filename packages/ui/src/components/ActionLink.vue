<script setup lang="ts">
  const { tone = "brand", small = false } = defineProps<{
    href: string;
    tone?: "brand" | "dark";
    small?: boolean;
  }>();
</script>

<template>
  <a
    :href="href"
    class="inline-flex items-center justify-center text-[13px] font-extrabold whitespace-nowrap text-learnly-surface no-underline"
    :class="[
      tone === 'dark' ? 'bg-learnly-navy' : 'bg-learnly-brand',
      small
        ? 'rounded-[10px] px-[18px] py-[11px]'
        : 'rounded-[11px] px-5 py-3.5',
    ]"
  >
    <slot />
  </a>
</template>
