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
  <table class="table-auto border-collapse border border-slate-400 p-3 ">
    <thead>
    <tr>
      <th v-for="th in information.table.headers" class="border border-slate-300 p-3">
        {{ th.text }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row in information.table.rows">
      <td v-for="td in row" class="border border-slate-300 p-3">
        {{ td.text }}
      </td>
    </tr>
    </tbody>
  </table>
</template>
<style scoped>
</style>