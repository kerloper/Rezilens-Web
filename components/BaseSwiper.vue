<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";

const props = defineProps({
  data:undefined,
  title:undefined,
})

</script>

<template>
  <section >


    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
        {{ title }}
      </h2>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full mt-2 ">
        <div class="relative overflow-hidden">
          <Swiper
              class="w-full h-full"
              :slidesPerView="'auto'"
              :spaceBetween="16"
              :modules="[
            SwiperNavigation,SwiperPagination]"
              effect="fade"
              :nested="true"
              :disabledClass="true"
              :navigation="true"
              :breakpoints="{
                      '300': {
                         slidesPerView: 3.2,
                       },
                      '768': {
                         slidesPerView: 4.1,
                       },
                       '1280': {
                          slidesPerView: 5.4,
                       },
                    }"
          >
            <SwiperSlide v-for="item in data"
                         :key="item.image"
                         class="w-screen sm:-mx-2 mt-4 pb-12 px-1 ">
              <div class="flex-shrink-0 w-[120.5px]">
                <img :src="item.image" alt="AWS certified" class="mx-auto">
              </div>

            </SwiperSlide>
          </Swiper>

        </div>
      </div>
    </div>


  </section>
</template>


<style scoped>

:deep(.swiper-button-prev:after), :deep(.swiper-button-next:after) {
  font-size: 14px;
  font-weight: bold;
  color: rgb(243, 235, 233);
}

:deep(.swiper-button-prev), :deep(.swiper-button-next) {
  top: 60px;
  right: auto;
  background-color: #3e1660;
  padding: 0 20px;
  border-radius: 8px;
  display: none;
  @apply lg:flex
}

:deep(.swiper-button-prev) {
  left: 0rem;
}

:deep(.swiper-button-next) {
  right: 0rem;
}

:deep(.swiper-slide) {
  box-sizing: border-box
}

:deep(.swiper-wrapper) {
  @apply sm:mx-0 sm:mr-16 md:mr-32 lg:mr-44 xl:mr-56 2xl:mr-64
}
</style>