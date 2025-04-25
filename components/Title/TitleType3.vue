<script setup lang="ts">
// Define a prop named 'section'
const props = defineProps({
  section: Object, // Adjust the type according to your data structure
});
</script>

<template>
  <div class="grid grid-cols-6 md:mr-10 lg:mr-10 relative   ">
    <div class="md:col-span-5 lg:col-span-5 col-span-3 mr-2  md:mr-12 lg:mr-12 relative">
      <div class=" pt-16 pr-3 text-white md:text-2xl lg:text-2xl font-bold capitalize leading-10">
        {{ section.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-brush {
  position: absolute;
}


.mobile-img-brush {
  position: absolute;
  width: 120px;
  top: 35px;
  right: 5px;
}

.whiten-image {
  filter: brightness(0) invert(1) sepia(0) saturate(100) hue-rotate(0deg) !important;
}
</style>