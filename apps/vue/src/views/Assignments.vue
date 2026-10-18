<script setup lang="ts">
import ReactWrapper from "../ReactWrapper.vue";

const loadAssignments = () => import("react_app/AssignmentsPage");
</script>

<template>
  <ReactWrapper :load="loadAssignments" />
</template>
