<script setup lang="ts">
  const features = [
    {
      number: "01",
      title: "One clear path",
      description: "Your courses, goals, and next steps in one calm view.",
    },
    {
      number: "02",
      title: "Practice that sticks",
      description:
        "Turn passive watching into active recall and real confidence.",
    },
    {
      number: "03",
      title: "Momentum, measured",
      description: "Celebrate the tiny wins that add up to a new capability.",
    },
  ] as const;
</script>

<template>
  <section id="method" class="bg-learnly-cream py-[42px]">
    <PageContainer>
      <SectionHeading
        eyebrow="BUILT FOR THE WAY YOU ACTUALLY LEARN"
        href="#cta"
        link-label="Explore the method"
        >Less tab switching.<br />More becoming.</SectionHeading
      >
      <div class="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
        <FeatureCard
          v-for="feature in features"
          :key="feature.number"
          v-bind="feature"
          outlined
        />
      </div>
    </PageContainer>
  </section>
</template>
