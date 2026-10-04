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

  const {
    color = "primary",
    variant = "solid",
    size = "md",
  } = defineProps<{
    color?: UiColor;
    variant?: UiVariant;
    size?: UiSize;
  }>();
</script>

<template>
  <UButton v-bind="$attrs" :color="color" :variant="variant" :size="size">
    <slot />
  </UButton>
</template>
