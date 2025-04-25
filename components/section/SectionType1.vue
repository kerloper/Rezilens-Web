<template>
  <section class="mt-20  dir-rtl">

    <h3 class="border-t-[1px] text-2xl sm:text-3xl w-2/4 sm:w-1/4 font-bold  text-right my-4 pt-4 border-t-slate-400 mr-8 sm:mr-16 md:mr-32 lg:mr-44 xl:mr-56 2xl:mr-64">
      {{ title }}
    </h3>
    <Swiper
        class="w-full h-full"
        :slidesPerView="'auto'"
        :spaceBetween="16"
        :modules="[SwiperNavigation,SwiperPagination]"
        effect="fade"
        :nested="true"
        dir="rtl"
        :disabledClass="true"
        :navigation="true"
        :breakpoints="{
      '300': {
         slidesPerView: 1.2,
       },
      '768': {
         slidesPerView: 3.2,
       },
       '1280': {
          slidesPerView: 4.1,
       },
    }"
    >
      <SwiperSlide v-if="items" v-for="(slide,index) in items" :key="slide.id"
                   class="w-screen px-4   sm:-mx-2 mt-16 ">

        <div class="flex flex-col items-start  w-full ">
          <div class="relative cursor-pointer">
            <nuxt-link :to="'/products/'+slide.slug">
              <div class="w-full overflow-hidden group  rounded-xl">
                <img v-show="index<10" :src="slide.image.src" alt="swiper"
                     class=" object-cover h-60 w-full group-hover:scale-110 transition duration-300"/>
              </div>
            </nuxt-link>
            <div v-show="index<10"
                 @click="saveItem(slide)"
                 class="absolute bottom-0  bg-goldlight p-3 rounded-br-lg rounded-tl-lg  cursor-pointer text-yellow-400">
              <div v-if="slide.isSaved">
                <Icon :name="'mdi:cards-heart'" class="text-2xl "/>
              </div>
              <div v-if="!slide.isSaved">
                <Icon name="mdi:cards-heart-outline" class="text-2xl "/>
              </div>
            </div>
          </div>
          <p v-show="index<10" class="font-bold mt-4 text-xl ">{{ slide.title }}</p>
          <p v-show="index<10" class=" w-4/5 mt-1 line-clamp-3 text-gray-600 ">
            {{ slide.sub_title }}</p>
        </div>

      </SwiperSlide>
      <SwiperSlide key="slide.id"
                   class="w-screen px-4   sm:-mx-2 mt-16 ">
        <div class="flex flex-col items-start  w-full ">
          <div class="relative cursor-pointer">
          </div>
        </div>
      </SwiperSlide>
    </Swiper>


  </section>
</template>

<script setup>
import {useMainStore} from "~/store";
import useSave from "~/composables/useSave";
import {setLatestItems} from "~/utils";

const props = defineProps({
  title: String,
  abstract: String,
  itemsList: Array,
})
const store = useMainStore()
const items = reactive(props.itemsList)
const saved = computed(() => store.getSavedItems)

function saveItem(item) {
  if (items.find(element => element.id === item.id)) {
    items.find(element => element.id === item.id).isSaved = !items.find(element => element.id === item.id).isSaved
  }
  useSave(item)
}

function checkSave() {
  if (saved.value && saved.value.length > 0) {
    for (const argument of store.getSavedItems) {
      const index = items.findIndex(el => el.id === argument.id)
      if (index >= 0) {
        items[index].isSaved = true
      }
    }
  } else {
    if (items && items.length > 0) {
      items.map(el => el.isSaved = false)
    }
  }

}

onBeforeMount(() => {
  checkSave()
})

</script>

<style scoped>

:deep(.swiper-button-prev:after), :deep(.swiper-button-next:after) {
  font-size: 14px;
  font-weight: bold;
  color: rgb(163, 41, 13);
}

:deep(.swiper-button-prev), :deep(.swiper-button-next) {
  top: 20px;
  right: auto;
  background-color: rgb(243, 243, 128);
  padding: 0 20px;
  border-radius: 8px;
  display: none;
  @apply lg:flex
}

:deep(.swiper-button-prev) {
  left: 20rem;
}

:deep(.swiper-button-next) {
  left: 17rem;
}

:deep(.swiper-slide) {
  box-sizing: border-box
}

:deep(.swiper-wrapper) {
  @apply sm:mx-0 sm:mr-16 md:mr-32 lg:mr-44 xl:mr-56 2xl:mr-64
}
</style>