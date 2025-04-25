<script setup  > 
const props = defineProps({
  item: Object, // Adjust the type according to your data structure
});
const convertToFormattedDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
  return date.toLocaleString(); // Adjust the locale as needed
};
function getCategory(item) {
  let category = '';
  if (item.meta) {
    if (item.meta.length > 0) {
      item.meta.forEach((meta, index) => {
        if (meta.meta_key == 'blog-category') {
          category = meta.meta_information.title
        }
      })
    }
  }
  return category;
}

</script>

<template>
  <div
      class="relative pointer  px-10">
    <nuxt-link :to="'/blog/'+item.slug">
      <div class="relative group overflow-hidden rounded-tl-xl rounded-tr-xl ">
        <img :src="item.image.src" alt="swiper" class="object-cover w-full h-full sm:w-full
            group-hover:scale-110 duration-500 transition   ease-in-out"
        />
      </div>
      <!--        description-->
      <div class="flex flex-col bg-white shadow-2xl rounded-br-lg rounded-bl-lg px-4">
        <p class="font-bold line-clamp-1 text-center  text-base pt-2 ">{{ item.title }}</p>
        <div class="   text-xs  sm:flex">
          <p class="mb-4 text-center text-sm w-full">{{ getCategory(item) }}</p>
        </div>
        <div class="  text-center text-xs w-full  sm:flex" dir="ltr">
          <p class="mb-4 w-full text-center   text-xs  " v-if="item.time_create_view">
            {{ (item.time_create_view) }}</p>
          <p class="mb-4 w-full text-center   text-xs  " v-else>{{
              convertToFormattedDate(item.time_create)
            }}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>

</style>