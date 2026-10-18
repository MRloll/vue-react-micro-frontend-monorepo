<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from "vue";
  import { createElement, type ComponentType } from "react";
  import { createRoot, type Root } from "react-dom/client";

  type RemoteModule = {
    default: ComponentType;
  };

  const props = defineProps<{
    load: () => Promise<RemoteModule>;
  }>();

  const target = ref<HTMLDivElement>();
  const loading = ref(true);
  const loadFailed = ref(false);
  let root: Root | undefined;
  let disposed = false;

  async function loadRemote() {
    loading.value = true;
    loadFailed.value = false;
    try {
      const { default: Component } = await props.load();

      if (disposed || !target.value) return;

      root = createRoot(target.value);
      root.render(createElement(Component));
    } catch (error) {
      if (!disposed) loadFailed.value = true;
      console.error("Failed to load React component", error);
    } finally {
      if (!disposed) loading.value = false;
    }
  }

  onMounted(loadRemote);

  function retryLoad() {
    // Failed dynamic imports are cached by the browser and the federation runtime.
    window.location.reload();
  }

  onUnmounted(() => {
    disposed = true;
    root?.unmount();
  });
</script>

<template>
  <div class="flex min-w-0 flex-1 flex-col" :aria-busy="loading">
    <p v-if="loading" role="status" class="py-8 text-sm text-slate-500">
      Loading your learning workspace…
    </p>
    <div
      v-if="loadFailed"
      role="alert"
      class="rounded-xl border border-slate-200 bg-white p-6"
    >
      <p class="text-sm text-slate-600">
        We couldn’t load this page. Please try again.
      </p>
      <button
        type="button"
        class="mt-3 rounded-full bg-primary-500 px-4 py-2 text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
        @click="retryLoad"
      >
        Try again
      </button>
    </div>
    <div ref="target" class="flex min-w-0 flex-1 flex-col" />
  </div>
</template>
