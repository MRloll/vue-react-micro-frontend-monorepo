<script setup lang="ts">
  import { FeatureCard, PageContainer, SectionHeading } from "@repo/ui";

  const steps = [
    {
      number: "01",
      title: "Choose your next chapter",
      description: "A focused path built around what you want to become.",
      tone: "cream",
    },
    {
      number: "02",
      title: "Practice in the flow",
      description:
        "Short lessons and real prompts turn knowledge into instinct.",
      tone: "dark",
    },
    {
      number: "03",
      title: "See yourself move",
      description: "A living dashboard makes every win impossible to miss.",
      tone: "cream",
    },
  ] as const;
</script>

<template>
  <section id="story" class="bg-learnly-surface pt-[34px] pb-[42px]">
    <PageContainer>
      <SectionHeading
        eyebrow="A BETTER WAY TO GROW"
        href="#method"
        link-label="See how Learnly works"
        >Small steps. Visible progress.<br />A story worth
        continuing.</SectionHeading
      >
      <div class="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
        <FeatureCard v-for="step in steps" :key="step.number" v-bind="step" />
      </div>
    </PageContainer>
  </section>
</template>
