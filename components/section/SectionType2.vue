<template>
  <section class="mt-20  dir-rtl">
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 mr-8 sm:mr-16 md:mr-32 lg:mr-44 xl:mr-56 2xl:mr-64">
      <h3 class="border-t-[1px] text-2xl sm:text-3xl w-2/4 sm:w-1/4 font-bold
      text-right my-4 pt-4 border-t-slate-400 ">
        <!--        مکان‌های پیشنهادی برای-->
        <!--        <br>-->
        <!--        سفر بعدی شما-->
        {{ title }}
      </h3>
      <p class="text-gray-500 sm:w-2/5 sm:mt-10">
        {{ abstract }}
      </p>

    </div>

    <Swiper
        :slidesPerView="'auto'"
        :spaceBetween="16"
        :modules="[SwiperNavigation,SwiperPagination]"
        effect="fade"
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
      <SwiperSlide v-for="(slide,index) in  items" :key="slide.id" class="w-screen px-4   sm:-mx-2 mt-16">
        <div
            class="flex flex-col items-start w-full cursor-pointer group">
          <div class="relative pointer">
            <nuxt-link :to="'/products/'+slide.slug">
              <div class=" w-full sm:h-[35rem]">
                <img v-show="index<10" :src="slide.screen" alt="swiper"
                     class="rounded-xl object-cover w-full h-120" style="text-align: center !important; background-color: rgba(0, 0, 0, 0.05);"/>
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
            <div class="absolute  bottom-16 right-4 ">
              <div class="flex flex-col">
                <p class="text-white text-3xl font-bold  ">{{ slide.title_fa }}</p>
              </div>
            </div>
            <div>
              <div
                  class=" absolute bottom-3 right-16 flex gap-4 opacity-0 text-white  group-hover:opacity-100 transition duration-300 ease-in">
                <div class="flex gap-2 font-bold">
                  <Icon name="ic:outline-access-time" class="text-2xl"/>
                  <p class="text-white ">1-3 روز</p>
                </div>
                <div class="flex gap-2 font-bold">
                  <Icon name="material-symbols:location-on-outline" class="text-2xl"/>
                  <p class="text-white ">شمال</p>
                </div>
              </div>

            </div>

          </div>
        </div>


      </SwiperSlide>
      <SwiperSlide    class="w-screen px-4   sm:-mx-2 mt-16">

      </SwiperSlide>
    </Swiper>
    <br>
  </section>
</template>

<script setup>

import {useMainStore} from "~/store";
import useSave from "~/composables/useSave";


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

checkSave()
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

:deep(.swiper-wrapper) {
  @apply sm:mx-0 sm:mr-16 md:mr-32 lg:mr-44 xl:mr-56 2xl:mr-64
}
</style>