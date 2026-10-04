<script setup lang="ts">
  const { eyebrow, href, linkLabel } = defineProps<{
    eyebrow: string;
    href: string;
    linkLabel: string;
  }>();
</script>

<template>
  <div class="mb-6 flex items-end justify-between gap-[30px] max-[900px]:block">
    <div>
      <p
        class="mb-2.5 text-[11px] font-extrabold tracking-[1px] text-learnly-brand"
      >
        {{ eyebrow }}
      </p>
      <h2
        class="text-[32px] leading-[1.08] tracking-[-1px] text-learnly-navy font-bold"
      >
        <slot />
      </h2>
    </div>
    <a
      :href="href"
      class="text-[13px] font-extrabold text-learnly-brand no-underline max-[900px]:mt-4 max-[900px]:inline-block"
      >{{ linkLabel }}&nbsp; →</a
    >
  </div>
</template>
