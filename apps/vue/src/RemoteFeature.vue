<script setup lang="ts">
  import { onBeforeUnmount, onMounted, ref } from "vue";

  type RemoteMount = (container: HTMLElement) => () => void;

  interface RemoteModule {
    mount?: RemoteMount;
  }

  const props = defineProps<{ properties?: any }>();
  const container = ref<HTMLDivElement | null>(null);
  const status = ref<"idle" | "loading" | "ready" | "error">("idle");
  const errorMessage = ref("");
  const remoteUrl =
    import.meta.env.VITE_REACT_REMOTE_URL || "http://localhost:5174/remote.js";

  let disposed = false;
  let unmountRemote: (() => void) | undefined;
  let requestToken = 0;

  async function loadRemote() {
    if (disposed || status.value === "loading" || status.value === "ready")
      return;

    const currentRequest = ++requestToken;
    status.value = "loading";
    errorMessage.value = "";

    try {
      const remote = (await import(
        /* @vite-ignore */ remoteUrl
      )) as Partial<RemoteModule>;

      // import() may finish after Vue has removed this view.
      if (disposed || currentRequest !== requestToken) return;
      if (!container.value) throw new Error("مكان عرض الميزة غير متاح.");

      const mount = remote.mount;
      if (!mount || typeof mount !== "function") {
        throw new Error(`React  app doesnt provide mount function`);
      }

      const cleanup = mount(container.value);

      if (typeof cleanup !== "function")
        throw new Error("دالة العرض لم تُرجع دالة التنظيف المطلوبة.");

      unmountRemote = cleanup;
      status.value = "ready";
    } catch (error) {
      if (disposed || currentRequest !== requestToken) return;
      errorMessage.value =
        error instanceof Error ? error.message : "تعذر استيراد ميزة React.";
      status.value = "error";
    }
  }

  // watch(
  //   () => props.feature,
  //   () => {
  //     requestToken += 1;
  //     unmountRemote?.();
  //     unmountRemote = undefined;
  //     status.value = "idle";
  //     errorMessage.value = "";
  //     void loadRemote();
  //   },
  // );

  onMounted(loadRemote);

  onBeforeUnmount(() => {
    disposed = true;
    requestToken += 1;
    unmountRemote?.();
    unmountRemote = undefined;
  });
</script>

<template>
  <div class="host-remote-feature">
    <div class="host-remote-status" aria-live="polite">
      <span v-if="status === 'ready'" class="host-remote-ready">
        <span aria-hidden="true">●</span>
        Ready
      </span>
      <span v-else-if="status === 'loading'"> Loading <bdi>React</bdi>…</span>
      <span v-else-if="status === 'error'" class="host-remote-error-label">
        there is an error
      </span>
    </div>

    <div v-if="status === 'loading'" class="host-remote-notice" role="status">
      <span class="host-loader" aria-hidden="true"></span>
      <p>Importing <bdi>React</bdi>....</p>
    </div>

    <div
      v-if="status === 'error'"
      class="host-remote-notice host-remote-error"
      role="alert"
    >
      <p class="host-error-title">
        There is an error importing <bdi>React</bdi> .
      </p>
      <a
        class="host-remote-url"
        :href="remoteUrl"
        target="_blank"
        rel="noreferrer"
        ><bdi>{{ remoteUrl }}</bdi></a
      >
      <p class="host-error-detail">
        <bdi>{{ errorMessage }}</bdi>
      </p>
      <button class="host-button host-button-retry" @click="loadRemote">
        Retry Importing
      </button>
    </div>

    <div
      ref="container"
      class="host-remote-mount"
      data-testid="react-remote-container"
      :aria-busy="status === 'loading'"
    ></div>
  </div>
</template>
