<script setup lang="ts">
  import { PageContainer } from "@repo/ui";
</script>

<template>
  <section id="testimonial" class="bg-learnly-navy text-learnly-surface">
    <PageContainer
      class="flex min-h-[260px] items-center gap-[60px] px-8 py-[42px] max-[900px]:px-0 max-[540px]:gap-[25px]"
    >
      <div
        aria-hidden="true"
        class="text-[94px] leading-[0.6] text-learnly-brand italic max-[540px]:text-[65px]"
      >
        “
      </div>
      <div>
        <blockquote
          class="mb-3.5 max-w-[760px] text-[25px] leading-[1.15] font-extrabold max-[540px]:text-[20px]"
        >
          Learnly made my learning feel less like a backlog and more like a
          story I was writing every day.
        </blockquote>
        <p class="text-[13px] text-learnly-on-dark">
          Maya Chen&nbsp; · &nbsp;Product designer&nbsp; · &nbsp;Learnly member
          since 2022
        </p>
      </div>
    </PageContainer>
  </section>
</template>
