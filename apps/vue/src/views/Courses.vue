<template>
  <div>
    <ReactWrapper :load="() => import('react_app/CoursesPage')" />
  </div>
</template>

<script setup>
  import ReactWrapper from "../ReactWrapper.vue";
</script>

<style lang="scss" scoped></style>
