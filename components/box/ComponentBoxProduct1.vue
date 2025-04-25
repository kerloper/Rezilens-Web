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
          price = meta.meta_value
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
          price = meta.meta_value
        }
      })
    }
  }
  return price;
}

const formatPrice = (price) => {
  const formatted = new Intl.NumberFormat('fa-IR').format(price);
  return `${formatted} تومان`;
};
</script>

<template>
  <div class="bg-white rounded-xl border hover:shadow-xl shadow-md ">
    <div
        class="col-span-1 justify-center items-center p-1"
    >
      <nuxt-link :to="'/products/'+item.slug">
        <div
            class=" rounded-md product-image-box  flex flex-row justify-center group overflow-hidden items-center h-52"
        >
          <img :src="item.image.src" class="h-40 group-hover:scale-110 duration-500 transition ease-in-out"
               :alt="item.title">

        </div>
        <div
            class="grid grid-cols-2 p-2 h-14"
        >
          <div class="w-36 truncate">
            <div class="text-sm">
              {{ item.title }}
            </div>
            <div v-if="checkSpecial(item)"
                 class="text-right text-amber-500 font-bold text-sm leading-relaxed">
              فروش ویژه
            </div>
          </div>
          <div class="text-left">
            <div v-if="checkSpecial(item)"
                 class="line-through text-red-500 text-left text-xs font-normal leading-relaxed">
              {{ formatPrice(getOldPrice(item)) }}
            </div>
            <div class="text-left text-neutral-700 text-sm font-normal leading-relaxed">
              {{ formatPrice(getPrice(item)) }}
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>

</style>