<template>
  <nav
      class="bg-[#211952] w-full hidden translate-y-full h-screen text-white z-10 fixed top-0 left-0 right-0 transition-all duration-500 ease-in overflow-y-auto"
      ref="mobileNav"
  >
    <div class="flex flex-col  items-start gap-8 h-screen">
      <div class="flex w-full flex-row pt-10  justify-between">
        <div class="mx-6">
          <img src="../../static/logo.png" alt="logo"
               class="w-44"/>
        </div>
      </div>

      <div class="w-full flex flex-col gap-4">
        <ul :id="item.title" v-for="(item,index) in navItems" :key="index" @click="showItems(item.title)">
          <li class="cursor-pointer">
            <div class="flex group justify-between  my-4 flex-row items-start mx-8 ">
              <nuxt-link :to="item.target" class="font-bold  cursor-pointer underline-offset-[10px]
                               hover:underline hover:decoration-gray-400 hover:decoration-2 transition-all hover:text-white">
                {{ item.title }}
              </nuxt-link>
              <Icon name="majesticons:chevron-down" class="text-3xl transition-all duration-300 text-white"/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

const props = defineProps({
  isOpenMobileNav: {
    type: Boolean,
    default: false
  }
})
const navItems = reactive([
  {
    title: "Home",
    target: "/",
  },
  {
    title: "Services",
    target: "/services",
  },
  {
    title: "Solutions",
    target: "/solutions",
  },
  {
    title: "Blog",
    target: "/blog",
  },
  {
    title: "About Us",
    target: "/about-us",
  },
  {
    title: "Contact Us",
    target: "/contact-us",
  },
  // {
  //   title: "Support",
  //   target: "/contact-us",
  // },
])
const emit = defineEmits(['closeMobileNav'])

const mobileNav = ref()
watch(() => props.isOpenMobileNav, (value) => {
  if (!value) {
    mobileNav.value.classList.remove('translate-y-0')
    mobileNav.value.classList.add('translate-y-full')
    mobileNav.value.classList.remove('opacity-100')
    mobileNav.value.classList.add('opacity-0')
  } else {
    mobileNav.value.classList.remove('hidden')
    mobileNav.value.classList.remove('translate-y-full')
    mobileNav.value.classList.add('translate-y-0')
    mobileNav.value.classList.remove('opacity-0')
    mobileNav.value.classList.add('opacity-100')

  }
});


function showItems(id) {
  const link = document.getElementById(id)
  const items = link.children[0]
  const item = items.children[0]
  const chevron = item.children[1]
  const sub = items.children[1]

  if (sub) {
    if (!sub.classList.contains('dropdown-active')) {
      chevron.classList.add('rotate-180')
      sub.classList.add("dropdown-active")
      sub.style.height = "auto"
      let height = sub.clientHeight + "px"
      sub.style.height = '0px';
      setTimeout(function () {
        sub.style.height = height;
      }, 0);
    } else {
      chevron.classList.remove('rotate-180')
      sub.style.height = '0px';
      sub.addEventListener('transitionend', function () {
        sub.classList.remove('dropdown-active');
      }, {
        once: true
      });
    }

  }
}

</script>

<style scoped>
.dropdown-active {
  @apply flex overflow-hidden transition-all duration-300 ease-in-out
}

.dropdown {
  @apply flex flex-col items-start gap-5  overflow-hidden transition-all duration-300 ease-in-out
  /*transition: height 0.35s ease-in-out;*/

}

.dropdown:not(.dropdown-active) {
  display: none;
}
</style>