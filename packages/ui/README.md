# `@repo/ui`

Shared Tailwind theme for React, Vue, and Nuxt, plus Vue components and Nuxt UI configuration.

## Components

Import components from `@repo/ui`, or register them globally in the app bootstrap when you prefer template-wide access:

```ts
import { AppButton } from "@repo/ui";

app.component("AppButton", AppButton);
```

Nuxt registers `AppButton` globally through `app/plugins/shared-ui.ts`. Vue components can import it directly.

Reusable building blocks are available to both Nuxt and Vue:

```vue
<script setup lang="ts">
  import { ActionLink, FeatureCard } from "@repo/ui";
</script>

<template>
  <ActionLink href="/courses">Browse courses</ActionLink>
  <FeatureCard
    number="01"
    title="Your next chapter"
    description="Continue your learning path."
  />
</template>
```

`ActionLink`, `BrandLogo`, `FeatureCard`, `PageContainer`, and `SectionHeading` provide the reusable building blocks. All components use Tailwind utilities without component stylesheets. Landing-specific sections live in `apps/nuxt-landing/app/components/learnly`; the Vue app remains separate for the dashboard.

## Theme

`theme.css` contains the shared palette as Tailwind theme tokens and scans the package's components with `@source`. The landing palette uses `learnly-*` utilities such as `bg-learnly-cream`, `text-learnly-navy`, and `bg-learnly-brand`; orange aliases reuse the existing `walid` scale. The palette uses a prefix to avoid collisions with the React app's semantic colors. React imports Tailwind directly in `src/index.css` so tools such as the shadcn CLI can detect its Tailwind v4 setup:

```css
@import "tailwindcss";
@import "@repo/ui/theme.css";
```

Vue imports `@repo/ui/vue-styles.css` in its global stylesheet. Nuxt registers that same entry in `nuxt.config.ts`'s `css` array. This entry imports Tailwind, Nuxt UI styles, and the shared theme.

`sharedUiConfig` is consumed by Nuxt's `app.config.ts` and the Vue app's `@nuxt/ui/vite` plugin.

This package declares `@nuxt/ui` and `vue` as optional peer dependencies. Vue and Nuxt applications install their own compatible versions. React consumes the CSS entry without importing the Vue components.
