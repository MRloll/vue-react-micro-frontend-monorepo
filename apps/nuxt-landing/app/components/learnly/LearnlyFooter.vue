<script setup lang="ts">
  import { BrandLogo, PageContainer } from "@repo/ui";

  const groups = [
    {
      title: "Product",
      links: [
        { label: "How it works", href: "#story" },
        { label: "For teams", href: "#method" },
        { label: "Pricing", href: "#cta" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#testimonial" },
        { label: "Stories", href: "#testimonial" },
        { label: "Contact", href: "#footer" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help center", href: "#footer" },
        { label: "Guides", href: "#footer" },
        { label: "Community", href: "#footer" },
      ],
    },
  ];
</script>

<template>
  <footer id="footer" class="bg-learnly-surface">
    <PageContainer
      class="flex min-h-[250px] items-start justify-between py-[42px] max-[900px]:block"
    >
      <div>
        <BrandLogo small />
        <p class="my-3 text-[13px] text-learnly-muted">
          A calmer way to keep becoming.
        </p>
      </div>
      <div
        class="flex gap-[76px] max-[900px]:mt-9 max-[900px]:gap-[30px] max-[540px]:grid max-[540px]:grid-cols-3"
      >
        <div
          v-for="group in groups"
          :key="group.title"
          class="flex flex-col gap-[11px] text-[12px]"
        >
          <strong class="text-learnly-navy">{{ group.title }}</strong>
          <a
            v-for="link in group.links"
            :key="link.label"
            :href="link.href"
            class="text-learnly-muted"
            >{{ link.label }}</a
          >
        </div>
      </div>
    </PageContainer>
  </footer>
</template>
