<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from "vue";
  import React from "react";
  import ReactDOM from "react-dom/client";

  const container = ref<HTMLDivElement>();
  let root: ReactDOM.Root | null = null;

  onMounted(async () => {
    const module = await import("react_app/ReactApp");
    const Component = module.default;
    root = ReactDOM.createRoot(container.value!);
    root.render(React.createElement(Component));
  });

  onUnmounted(() => {
    root?.unmount();
  });
</script>

<template>
  <div ref="container"></div>
</template>
