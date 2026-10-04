<script setup lang="ts">
  import { ActionLink, PageContainer } from "@repo/ui";
  import LearnlyDashboardPreview from "./LearnlyDashboardPreview.vue";
</script>

<template>
  <section>
    <PageContainer
      class="flex min-h-[492px] items-center gap-10 pt-11 pb-7 max-[900px]:block max-[900px]:pt-[52px]"
    >
      <div class="w-1/2 max-w-[600px] max-[900px]:w-full">
        <p
          class="mb-2.5 text-[11px] font-extrabold tracking-[1px] text-learnly-brand"
        >
          THE LEARNING OPERATING SYSTEM
        </p>
        <h1
          class="text-[60px] leading-[0.98] font-bold tracking-[-2px] text-learnly-navy max-[900px]:text-[48px] max-[540px]:text-[42px]"
        >
          Turn learning into<br />forward motion.
        </h1>
        <p
          class="my-5 max-w-[500px] text-[17px] leading-[1.35] text-learnly-muted max-[540px]:text-[15px]"
        >
          Learnly brings courses, practice, and progress into one clear rhythm —
          so every lesson becomes momentum you can feel.
        </p>
        <div class="flex items-center gap-3">
          <ActionLink href="#cta">Start learning <span>→</span></ActionLink>
          <a href="#testimonial" class="text-[14px] text-learnly-navy"
            ><span class="mr-1.5 text-[11px]">▶</span> Watch the story</a
          >
        </div>
        <div
          class="mt-[22px] flex items-center gap-2.5 text-[12px] text-learnly-muted"
        >
          <span class="text-[16px] tracking-[2px] text-learnly-brand"
            >● ● ●</span
          >
          <span>Loved by 12,000+ curious minds</span>
        </div>
      </div>
      <LearnlyDashboardPreview />
    </PageContainer>
  </section>
</template>
