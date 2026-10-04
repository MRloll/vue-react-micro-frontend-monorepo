<script setup lang="ts">
  import { ActionLink, PageContainer } from "@repo/ui";
</script>

<template>
  <section id="cta" class="bg-learnly-peach">
    <PageContainer
      class="flex min-h-[270px] items-center justify-between py-[42px] max-[900px]:block"
    >
      <div>
        <p
          class="mb-2.5 text-[11px] font-extrabold tracking-[1px] text-learnly-brand"
        >
          YOUR NEXT CHAPTER STARTS HERE
        </p>
        <h2
          class="text-[40px] leading-[1.02] font-bold tracking-[-1px] text-learnly-navy"
        >
          Make progress<br />feel inevitable.
        </h2>
        <p class="mt-2.5 text-[14px] text-learnly-ink">
          Join a learning space designed to help you keep going.
        </p>
      </div>
      <ActionLink href="#top" class="max-[900px]:mt-7"
        >Start learning free&nbsp; →</ActionLink
      >
    </PageContainer>
  </section>
</template>
