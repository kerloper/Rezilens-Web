<template>
  <div ref="header" class="pd:mx-16 pg:mx-16 xl:px-16 px-6 max-w-[1440px] mx-auto top-0 transition-all ease-in duration-500 z-20  ">
    <client-only>
      <!-- Mobile Header -->
      <div class="lg:hidden flex items-center justify-between   py-4">
        <nuxt-link to="/">
          <img src="../../static/rezilens/Logo-Main.png" class="h-10" alt="rezilens"/>
        </nuxt-link>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="p-2 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Desktop Header -->
      <div class="hidden lg:flex flex-row py-6 mx-auto  ">
        <div class="basis-2/5 text-right">
          <ul ref="iconsList"
              class="right-menu-box hidden lg:flex justify-start items-center lg:relative transition-all ease-in delay-300"
              :class="{'text-white':isTransparent,'text-black':!isTransparent}">
            <li>
              <nuxt-link to="/">
                <img src="../../static/rezilens/Logo-Main.png" class=" h-16 object-contain " alt="Rezilens"/>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="basis-1/5 flex justify-start pt-12"></div>
        <div class="basis-2/5 text-left">
          <ul class="left-menu-title-box hidden lg:relative lg:flex flex-wrap min-w-[800px] justify-end transition-all ease-in delay-300 pt-4"
              :class="{ 'text-white': isTransparent, 'text-black': !isTransparent }">
            <li v-for="(item, index) in menuItems" :key="index"
                class="hover:cursor-pointer mt-1 mx-1 px-2 text-center items-center justify-center text-sm rounded-lg transition-all relative group"
                @mouseenter="toggleSubmenu(index)" @mouseleave="closeSubmenus">
              <nuxt-link :to="item.target" class="flex items-center text-[16px] text-black justify-center text-center hover:text-pink-900">
                {{ item.title }}
                <span v-if="item.subitems" class="ml-1">▼</span>
              </nuxt-link>

              <!-- Desktop Submenu Dropdown -->
              <div v-if="item.subitems && activeSubmenu === index"
                   class="absolute left-0 mt-0 w-56 text-start bg-white shadow-lg rounded-md py-1 z-50">
                <nuxt-link v-for="(subitem, subIndex) in item.subitems" :key="subIndex" :to="subitem.target"
                           class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-900">
                  {{ subitem.title }}
                </nuxt-link>
              </div>
            </li>
            <li>
              <nuxt-link to="https://digrc.com/">
                <button class="px-2 py-1 bg-primary text-white font-medium rounded-lg transition-colors duration-300">
                  Our State of the Art GRC
                </button>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div v-if="isMobileMenuOpen" class="lg:hidden fixed inset-0 bg-white z-50 pt-4 overflow-y-auto">
        <div class="flex justify-between items-center px-4 pb-4 border-b">
          <nuxt-link to="/" @click="toggleMobileMenu">
            <img src="../../static/rezilens/Logo-Main.png" class="h-10" alt="rezilens"/>
          </nuxt-link>
          <button @click="toggleMobileMenu" class="p-2 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div class="px-4 py-4">
          <ul class="space-y-4">
            <li v-for="(item, index) in menuItems" :key="index">
              <div @click="toggleMobileSubmenu(index)" class="flex justify-between items-center py-2">
                <nuxt-link :to="item.target" @click="!item.subitems ? toggleMobileMenu() : null"
                           class="text-xl font-medium text-gray-900">
                  {{ item.title }}
                </nuxt-link>
                <span v-if="item.subitems" class="ml-2">
                  <svg class="w-4 h-4 transform transition-transform duration-200"
                       :class="{'rotate-180': activeMobileSubmenu === index}"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </div>

              <!-- Mobile Submenu -->
              <div v-if="item.subitems && activeMobileSubmenu === index" class="pl-4 mt-2 space-y-3">
                <nuxt-link v-for="(subitem, subIndex) in item.subitems" :key="subIndex"
                           :to="subitem.target" @click="toggleMobileMenu"
                           class="block py-2 text-gray-700 hover:text-pink-900">
                  {{ subitem.title }}
                </nuxt-link>
              </div>
            </li>
            <li class="pt-4">
              <nuxt-link to="https://digrc.com/" @click="toggleMobileMenu">
                <button class="w-full px-4 py-2 bg-primary text-white font-medium rounded-lg">
                  Our State of the Art GRC
                </button>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup>
import { menuItems } from "~/constants/config";

const header = ref(null);
const iconsList = ref(null);
const route = useRoute();
const isTransparent = false;

// Desktop submenu
const activeSubmenu = ref(null);
const toggleSubmenu = (index) => {
  activeSubmenu.value = activeSubmenu.value === index ? null : index;
};
const closeSubmenus = () => {
  activeSubmenu.value = null;
};

// Mobile menu
const isMobileMenuOpen = ref(false);
const activeMobileSubmenu = ref(null);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.classList.toggle('overflow-hidden', isMobileMenuOpen.value);
};

const toggleMobileSubmenu = (index) => {
  activeMobileSubmenu.value = activeMobileSubmenu.value === index ? null : index;
};

watch(
    () => route.path,
    () => {
      if (isMobileMenuOpen.value) {
        toggleMobileMenu();
      }
    }
);
</script>

<style scoped>
/* Add any custom styles here */
</style>