# `@repo/ui`

Shared Vue components and Nuxt UI theme configuration for the Vue and Nuxt apps.

## Components

Import components from `@repo/ui`, or register them globally in the app bootstrap when you prefer template-wide access:

```ts
import { AppButton } from "@repo/ui";

app.component("AppButton", AppButton);
```

Both apps register `AppButton` globally: Vue does so in `main.ts`, and Nuxt does so through `app/plugins/shared-ui.ts`.

## Theme

`sharedUiConfig` is consumed by Nuxt's `app.config.ts` and the Vue app's `@nuxt/ui/vite` plugin. Import `@repo/ui/theme.css` as the global stylesheet in each app.

This package declares `@nuxt/ui` and `vue` as peer dependencies. Applications install their own compatible versions.
