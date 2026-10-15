<script setup lang="ts">
import { AppButton, BrandLogo } from "@repo/ui";

const emit = defineEmits<{
  "toggle-sidebar": [];
}>();
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-40 flex h-[76px] items-center justify-between',
      'border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-7',
    ]"
  >
    <div class="flex items-center gap-3">
      <AppButton
        aria-label="Open navigation"
        class="size-9 rounded-lg text-slate-600 lg:hidden"
        color="neutral"
        icon="i-lucide-menu"
        square
        variant="ghost"
        @click="emit('toggle-sidebar')"
      />
      <BrandLogo href="#overview" />
    </div>

    <div class="flex items-center gap-2 sm:gap-4">
      <AppButton
        class="hidden text-sm text-slate-500 sm:inline-flex"
        color="neutral"
        href="#help"
        label="Help center"
        variant="ghost"
      />
      <AppButton
        aria-label="Notifications"
        class="size-9 rounded-full text-slate-500"
        color="neutral"
        icon="i-lucide-bell"
        square
        variant="ghost"
      />
      <UAvatar
        alt="Jordan Davis"
        class="bg-orange-100 font-semibold text-orange-800"
        size="sm"
        text="JD"
      />
    </div>
  </header>
</template>
