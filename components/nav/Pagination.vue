<template>
  <!-- component -->
  <div class="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
    <div class="lg:w-5/5 w-full  flex items-center justify-between border-t border-gray-200">
      <div class="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer"  @click="changePage(currentPage - 1)">
        <button>
          <Icon name="ic:baseline-keyboard-double-arrow-right" class="text-2xl"/>
        </button>
      </div>
      <div class=" flex ">
        <div v-for="page in displayedPages" :key="page">
          <div v-if="page === '...'">
            <span>{{ page }}</span>
          </div>
          <div v-else>
            <a
                v-if="currentPage===page"
                @click="changePage(page)"
                class="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-4 mr-4 px-2"
            >
              <button :class="{ 'active': currentPage === page }">
                {{ page }}
              </button>
            </a>
            <a
                v-else
                @click="changePage(page)"
                class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-4 mr-4 px-2"
            >
              <button :class="{ 'active': currentPage === page }">{{ page }}</button>
            </a>

          </div>
        </div>
      </div>
      <div class="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer" @click="changePage(currentPage + 1)">
        <button>
          <Icon name="ic:baseline-keyboard-double-arrow-left" class="text-2xl"/>
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, defineProps, defineEmits} from 'vue';

const props = defineProps({
  currentPage: Number,
  totalPages: Number
});


const emit = defineEmits(['page-change'])

const maxDisplayedPages = 7; // Adjust this as needed
const displayedPages = computed(() => {
  const pages = [];
  if (props.totalPages <= maxDisplayedPages) {
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i);
    }
  } else {
    const leftRange = [1, 2];
    const rightRange = [props.totalPages - 1, props.totalPages];
    const currentRange = [];

    // Push adjacent pages to current page
    for (let i = Math.max(1, props.currentPage - 1); i <= Math.min(props.totalPages, props.currentPage + 1); i++) {
      currentRange.push(i);
    }

    pages.push(...leftRange, ...currentRange, ...rightRange);

  }

  // Remove duplicates and zeros
  return Array.from(new Set(pages.filter(page => page !== '...'))).filter(page => page > 0);
});

const changePage = (newPage) => {
  if (newPage >=1 && newPage <= props.totalPages)
    emit('page-change', newPage);
};
</script>

<style scoped>
/* You can style your pagination buttons here using Tailwind CSS classes */
</style>
