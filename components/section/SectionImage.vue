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
    <img :src="information.image" class="w-full">
  </p>
</template>
<style scoped>
</style>