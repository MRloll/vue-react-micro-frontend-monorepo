# `@repo/ui`

Shared Tailwind theme for Vue and Nuxt, plus Vue components and Nuxt UI configuration.

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

`theme.css` is the shared source of truth for the `walid` brand palette and the Learnly semantic tokens. It defines light values in `:root`, dark overrides under `.dark`, and `learnly-*` Tailwind utilities with `@theme inline`. Shared components can use tokens such as `bg-learnly-background`, `text-learnly-foreground`, `bg-learnly-surface`, and `bg-learnly-brand`; existing landing aliases like `bg-learnly-cream` and `text-learnly-navy` also adapt to dark mode.

The theme only changes to dark mode when the consuming Vue or Nuxt app adds `.dark` to the root `<html>` element.

Vue imports `@repo/ui/vue-styles.css` in its global stylesheet. Nuxt registers that same entry in `nuxt.config.ts`'s `css` array. This entry imports Tailwind, Nuxt UI styles, and the shared theme.

`sharedUiConfig` maps Nuxt UI's `primary` semantic color to the shared `walid` palette. It is consumed by Nuxt's `app.config.ts` and the Vue app's `@nuxt/ui/vite` plugin.

This package declares `@nuxt/ui` and `vue` as optional peer dependencies. Vue and Nuxt applications install their own compatible versions. The React app owns its Shadcn theme in `apps/react/src/index.css` and has no dependency on this package.
