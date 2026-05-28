<script setup lang="ts">
  import { defineAsyncComponent } from "vue";
  import type { user } from "@repo/types";
  const user: user = {
    email: "test",
    id: 1,
    name: "test",
    password: "122",
  };

  const ReactApp = await defineAsyncComponent(
    () => import("react_app/ReactApp"),
  );
</script>

<template>
  <div className="bg-green-400">
    <ReactApp />
  </div>
</template>
