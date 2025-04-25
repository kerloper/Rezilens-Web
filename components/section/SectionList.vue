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
  <ul>
    <li class="p-3" v-for="item in information.items">
      {{ item.text }}
    </li>
  </ul>
</template>
<style scoped>
</style>