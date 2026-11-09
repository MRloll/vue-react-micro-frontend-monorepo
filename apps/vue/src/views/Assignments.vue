<script setup lang="ts">
  import ReactWrapper from "../ReactWrapper.vue";

  const loadAssignments = () => import("react_app/AssignmentsPage");
</script>

<template>
  <div class="react-component">
    <UBadge color="success" label="React Page" class="chip" />
    <ReactWrapper :load="loadAssignments" />
  </div>
</template>
