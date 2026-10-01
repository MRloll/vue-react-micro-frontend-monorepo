<script setup lang="ts">
  type UiColor =
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "error"
    | "neutral"
    | "walid";
  type UiVariant = "solid" | "outline" | "soft" | "subtle" | "ghost" | "link";
  type UiSize = "xs" | "sm" | "md" | "lg" | "xl";

  defineOptions({ inheritAttrs: false });

  withDefaults(
    defineProps<{
      color?: UiColor;
      variant?: UiVariant;
      size?: UiSize;
    }>(),
    {
      color: "primary",
      variant: "solid",
      size: "md",
    },
  );
</script>

<template>
  <UButton v-bind="$attrs" :color="color" :variant="variant" :size="size">
    <slot />
  </UButton>
</template>
