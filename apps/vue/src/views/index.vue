<script setup lang="ts">
  import type { user } from "@repo/types";

  const user: user = {
    email: "test",
    id: 1,
    name: "test",
    password: "122",
  };
</script>

<template>
  <div className="bg-green-400">
    <h1>
      {{ user.name }}
    </h1>
    <p>
      {{ user.email }}
    </p>
  </div>
</template>
