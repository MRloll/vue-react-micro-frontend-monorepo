<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from "vue";
  import { createElement, type ComponentType } from "react";
  import { createRoot, type Root } from "react-dom/client";

  type RemoteModule = {
    default: ComponentType<any>;
  };

  const props = defineProps<{
    load: () => Promise<RemoteModule>;
  }>();

  const target = ref<HTMLDivElement>();
  let root: Root | undefined;
  let disposed = false;

  onMounted(async () => {
    try {
      const { default: Component } = await props.load();

      if (disposed || !target.value) return;

      root = createRoot(target.value);
      root.render(createElement(Component));
    } catch (error) {
      console.error("Failed to load React component", error);
    }
  });

  onUnmounted(() => {
    disposed = true;
    root?.unmount();
  });
</script>

<template>
  <div ref="target" />
</template>
