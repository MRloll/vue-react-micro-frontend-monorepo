# `@repo/ui`

Shared Tailwind theme for React, Vue, and Nuxt, plus Vue components and Nuxt UI configuration.

## Components

Import components from `@repo/ui`, or register them globally in the app bootstrap when you prefer template-wide access:

```ts
import { AppButton } from "@repo/ui";

app.component("AppButton", AppButton);
```

Both apps register `AppButton` globally: Vue does so in `main.ts`, and Nuxt does so through `app/plugins/shared-ui.ts`.

## Theme

`theme.css` contains shared theme variables and styles. React imports Tailwind directly in `src/index.css` so tools such as the shadcn CLI can detect its Tailwind v4 setup:

```css
@import "tailwindcss";
@import "@repo/ui/theme.css";
```

Vue imports `@repo/ui/vue-styles.css` in its global stylesheet. Nuxt registers that same entry in `nuxt.config.ts`'s `css` array. This entry imports Tailwind, Nuxt UI styles, and the shared theme.

`sharedUiConfig` is consumed by Nuxt's `app.config.ts` and the Vue app's `@nuxt/ui/vite` plugin.

This package declares `@nuxt/ui` and `vue` as optional peer dependencies. Vue and Nuxt applications install their own compatible versions. React consumes the CSS entry without importing the Vue components.
