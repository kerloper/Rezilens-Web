<script setup lang="ts">
// Define a prop named 'section'
const props = defineProps({
  section: Object, // Adjust the type according to your data structure
});
</script>

<template>
  <div class="grid grid-cols-6 relative"  >
    <div class="md:col-span-6 lg:col-span-5 col-span-3 mt-3 relative">
      <div class=" pr-3 text-white md:text-2xl lg:text-2xl font-bold capitalize  ">
        {{ section.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-brush {
  position: absolute;
}

.more-style {
  text-align: left !important;
  margin-left: 70px;
  padding-top: 40px ;
}

.mobile-more-style{
  position: absolute;
  text-align: left !important;
  font-size: 12px !important;
  padding-top: 40px ;
  left: 20px;

}

.mobile-img-brush{
  position: absolute;
  width:  120px;
  top: 35px;
  right:  5px;
}
</style>