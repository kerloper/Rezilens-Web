<!-- Modal.vue -->

<template>
  <div class="modal-overlay w-full h-full dir-rt text-right" dir="rtl">
    <div class="modal-content w-full h-full flex">

      <!-- Image list on the right side -->
      <div class="image-list overflow-auto w-36 p-4 hidden md:block lg:block xl:block">
        <div
            v-for="(image, index) in props.images"
            :key="index"
            @click="selectImage(index)"
        >
          <img
              :src="image.src"
              alt="Product Thumbnail"
              class="w-32 cursor-pointer border border-gray-200 mb-4 rounded-md"
              :class="{ 'selected': index === currentIndex }"
          />
        </div>
      </div>
      <!-- Main image display -->
      <img
          :src="currentImage"
          alt="Product Image"
          class="h-full object-contain flex-1 w-screen"
          style="width: 100% !important;"
      />

      <!-- Close button -->
      <button
          class="bg-black absolute top-3 left-3 py-2 px-3 text-white rounded-md text-xs hover:bg-gray-700"
          @click="closeModal"
      >
         بازگشت
        <Icon name="mdi:close" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['images', 'currentImage', 'currentIndex']);
const emit = defineEmits(['closeModal', 'selectImage']);

const currentImage = ref(props.currentImage);
const currentIndex = ref(props.currentIndex);

watch(
    () => props.currentImage,
    (newCurrentImage) => {
      currentImage.value = newCurrentImage;
    }
);

const closeModal = () => {
  currentImage.value = '';
  emit('closeModal');
};

const selectImage = (index) => {
  currentIndex.value = index;
  currentImage.value = props.images[index].src;
  emit('selectImage', index);
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(256, 256, 256, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999 !important;
}

.modal-content {
  overflow: hidden;
  position: relative;
}

.image-list {
  max-height: 100%;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent
}
/* Webkit browsers (Chrome, Safari) */
.image-list::-webkit-scrollbar {
  width: 8px; /* Set your desired scrollbar width */
}

.image-list::-webkit-scrollbar-thumb {
  background-color: #ccc; /* Set your desired scrollbar color */
  border-radius: 4px; /* Set your desired border radius */
}

.image-list::-webkit-scrollbar-track {
  background-color: transparent; /* Set your desired scrollbar track color */
}
.image-list img {
  transition: border-color 0.3s ease;
}

.selected {
  border: 1px solid #FFD700;

}
</style>
