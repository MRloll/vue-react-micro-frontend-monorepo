<script setup lang="ts">
  import { ActionLink, BrandLogo, PageContainer } from "@repo/ui";
</script>

<template>
  <header>
    <PageContainer
      class="flex h-[82px] items-center justify-between max-[540px]:h-[70px]"
    >
      <BrandLogo />
      <nav
        aria-label="Primary navigation"
        class="mr-[42px] ml-auto flex gap-[30px] text-[13px] text-learnly-muted max-[900px]:hidden"
      >
        <a href="#story">How it works</a>
        <a href="#method">For teams</a>
        <a href="#testimonial">Stories</a>
      </nav>
      <div class="flex items-center gap-4">
        <a
          href="#footer"
          class="text-[13px] text-learnly-ink max-[540px]:hidden"
          >Sign in</a
        >
        <ActionLink href="#cta" tone="dark" small>Get started</ActionLink>
      </div>
    </PageContainer>
  </header>
</template>
