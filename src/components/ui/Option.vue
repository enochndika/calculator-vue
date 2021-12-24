<script lang="ts" setup>
defineProps({
  data: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<template>
  <option v-for="item in data" :id="item.value" :key="item.label" :value="item.value">
    {{ item.label }}
  </option>
</template>
