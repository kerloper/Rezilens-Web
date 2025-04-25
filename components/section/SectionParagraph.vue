<script setup lang="ts">
import {defineProps} from 'vue'
const props = defineProps({
  information: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <p class="p-3">
    {{ information.text }}
  </p>
</template>
<style scoped>
</style>