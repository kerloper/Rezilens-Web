<template>
  <section class="mt-32 dir-rtl">
    <Swiper
        :modules="[SwiperEffectFade, SwiperNavigation, SwiperPagination]"
        effect="fade"
        :speed="1000"
        dir="rtl"
        :disabledClass="true"
        :navigation="true"
        :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="(slide, index) in images" :key="slide" class="w-screen relative">
        <!-- Images -->
        <div class="relative">
          <!-- Show slide.image on desktop and larger mobile -->
          <img :src="slide.image" alt="Slider Images" class="w-screen h-screen object-cover hidden md:block" />
          <!-- Show slide.mobile on mobile screens (smaller than md) -->
          <img :src="slide.mobile" alt="Slider Images" class="w-screen h-screen object-cover md:hidden" />

          <!-- Styled Strong Text - Positioned on top of the image -->
          <h3
              :class="{
            'text-gradient-light-golden': index === 0,
            'text-gradient-darker-gold-liver': index === 1,
            'text-gradient-bright-golden': index === 2,
            'text-4xl font-bold text-center': true
          }"
              class="absolute bottom-20 right-5  transform text-white text-2xl font-bold text-center "
          >
            {{ index == 0 ? slide.title : index == 1 ? slide.subhead : slide.subtitle }}
          </h3>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import SwiperEffectFade from 'swiper/effect-fade';
// import SwiperNavigation from 'swiper/navigation';
// import SwiperPagination from 'swiper/pagination';
const props = defineProps({
  images: Array
})
</script>

<style  >


/* You can adjust the positioning of the text as needed */
.text-4xl {
  margin: 20px; /* Add some margin to the text for spacing */
}


/* Create the Light Golden Gradient for the Styled Strong Text (index === 0) */
.text-gradient-light-golden {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(45deg, #ffcd00, #ffe57f);
}

/* Create the Darker Gold to Liver Gradient for the Styled Strong Text (index === 1) */
.text-gradient-darker-gold-liver {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(45deg, #886800, #ab5100);
}

/* Create the Bright Golden Gradient for the Styled Strong Text */
.text-gradient-bright-golden {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(45deg, #ffb300, #ffcd00);
}
</style>