<script setup>
const props = defineProps({
  item: Object, // Adjust the type according to your data structure
});

function checkSpecial(item) {
  let flag = false
  if (item.meta) {
    if (item.meta.length > 0) {
      item.meta.forEach((meta, index) => {
        if (meta.meta_key == 'special-suggest') {
          flag = (meta.meta_value == 1)
        }
      })
    }
  }
  return flag;
}

function getOldPrice(item) {
  let price = 'نامشخص';
  if (item.meta) {
    if (item.meta.length > 0) {
      item.meta.forEach((meta, index) => {
        if (meta.meta_key == 'before-special-price') {
          price = meta.meta_value + 'تومان'
        }
      })
    }
  }
  return price;
}

function getPrice(item) {
  let price = 'نامشخص';
  if (item.meta) {
    if (item.meta.length > 0) {
      item.meta.forEach((meta, index) => {
        if (meta.meta_key == 'price') {
          price = meta.meta_value + 'تومان'
        }
      })
    }
  }
  return price;
}
</script>

<template>
  <nuxt-link :to="'/products/'+item.slug">
    <div
        class="border rounded-md product-image-box group flex flex-row justify-center items-center group overflow-hidden p-3 h-64 shadow-md"
    >
      <img :src="item.image.src" class="h-60 group-hover:scale-110 duration-500 transition ease-in-out"
           :alt="item.title">

    </div>
    <div
        class="grid grid-cols-2 p-2"
    >
      <div class="  w-40 truncate">
        {{ item.title }}
        <div v-if="checkSpecial(item)" class="text-right text-amber-500 font-bold  text-base  leading-relaxed">
          فروش ویژه
        </div>
      </div>
      <div class="text-left">
        <div v-if="checkSpecial(item)"
             class="line-through text-red-500 text-left   text-base font-normal leading-relaxed">
          {{ getOldPrice(item) }}
        </div>
        <div class="text-left text-neutral-700 text-base font-normal leading-relaxed">
          {{ getPrice(item) }}
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped>

</style>