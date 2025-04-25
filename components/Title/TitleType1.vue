<script setup lang="ts">
// Define a prop named 'section'
const props = defineProps({
  section: Object, // Adjust the type according to your data structure
});
</script>

<template>
  <div class="grid grid-cols-6   relative"  >
    <div class="md:col-span-5 lg:col-span-5 col-span-3 relative">
<!--      <img src="../../static/brush.png" class=" img-brush hidden md:block lg:block">-->
<!--      <img src="../../static/brush.png" class=" mobile-img-brush md:hidden lg:hidden">-->
      <div class="title-brush pt-12 pr-3 text-emerald-950 md:text-2xl lg:text-2xl font-bold capitalize leading-10">
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
  padding-top: 10px ;
}

.mobile-more-style{
  position: absolute;
  text-align: left !important;
  font-size: 12px !important;
  padding-top: 10px ;
  left: 20px;

}

.mobile-img-brush{
  position: absolute;
  width:  120px;
  top: 15px;
  right:  5px;
}
</style>