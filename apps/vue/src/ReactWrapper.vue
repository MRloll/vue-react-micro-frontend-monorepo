<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import React from "react";
  import ReactDOM from "react-dom/client";

  const container = ref();

  onMounted(async () => {
    const module = await import("react_app/ReactApp");

    const Component = module.default;

    ReactDOM.createRoot(container.value).render(React.createElement(Component));
  });
</script>

<template>
  <div ref="container"></div>
</template>
