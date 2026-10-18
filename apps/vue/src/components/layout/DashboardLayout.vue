<script setup lang="ts">
  import { ref } from "vue";
  import DashboardNavigation from "./DashboardNavigation.vue";
  import DashboardSidebar from "./DashboardSidebar.vue";
  import DashboardHeader from "./DashboardHeader.vue";

  const sidebarOpen = ref(false);
</script>

<template>
  <div class="min-h-screen font-sans text-slate-900">
    <DashboardNavigation @toggle-sidebar="sidebarOpen = !sidebarOpen" />

    <div class="relative flex min-h-[calc(100vh-76px)]">
      <DashboardSidebar :open="sidebarOpen" @close="sidebarOpen = false" />

      <main
        class="flex min-w-0 flex-1 flex-col px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
      >
        <DashboardHeader v-if="!$route.meta.hideDashboardHeader" />
        <slot />
      </main>
    </div>
  </div>
</template>
