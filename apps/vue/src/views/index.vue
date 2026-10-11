<script setup lang="ts">
  import ReactWrapper from "../ReactWrapper.vue";
  import { AppButton } from "@repo/ui";
</script>

<template>
  <ReactWrapper :load="() => import('react_app/AsideComponent')" />
  <h1 class="dark:bg-walid-500">walid</h1>
  <AppButton color="walid">Shared UI button</AppButton>
  <UButton color="walid">Shared UI button</UButton>
  <UAvatar src="https://github.com/benjamincanac.png" />
  <ReactWrapper :load="() => import('react_app/NavBarComponent')" />
</template>
