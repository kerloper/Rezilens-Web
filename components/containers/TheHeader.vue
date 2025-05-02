<template>
  <div ref="header"
       class="mx-auto top-0 transition-all ease-in duration-500 z-20 max-w-7xl"
  >
    <client-only>
      <div class="pt-10 mb-4 md:hidden lg:hidden xl:hidden">
        <nuxt-link to="/">
          <img src="../../static/rezilens/Logo-Main.png" class="mx-auto" alt="rezilens"/>
        </nuxt-link>
      </div>
      <div
          class="md:flex lg:flex xl:flex hidden flex-row py-6 mx-auto px-4 sm:px-6 lg:px-8 md:pr-12 lg:pr-12 xl:pr-12">
        <div
            class="basis-2/5 text-right"
        >
          <ul ref="iconsList"
              class="right-menu-box hidden lg:flex justify-start items-center lg:relative transition-all ease-in delay-300"
              :class="{'text-white':isTransparent,'text-black':!isTransparent}">
            <li>
              <nuxt-link to="/">
                <img src="../../static/rezilens/Logo-Main.png" class="max-h-16 object-contain" alt="Rezilens"/>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="basis-1/5 flex justify-start pt-12">

        </div>
        <div class="basis-2/5 text-left">
          <ul
              class="left-menu-title-box hidden lg:relative lg:flex justify-end transition-all ease-in delay-300 pt-4"
              :class="{ 'text-white': isTransparent, 'text-black': !isTransparent }"
          >
            <li
                v-for="(item, index) in menuItems"
                :key="index"
                class="hover:cursor-pointer w-[95px] mx-1 px-2 text-center items-center justify-center text-sm   rounded-lg transition-all relative group"
                @mouseenter="toggleSubmenu(index)"
                @mouseleave="closeSubmenus"
            >
              <nuxt-link
                  :to="item.target"
                  class="flex items-center text-black justify-center text-center hover:text-pink-900"
              >
                {{ item.title }}
                <span v-if="item.subitems" class="ml-1">▼</span>
              </nuxt-link>

              <!-- Submenu Dropdown -->
              <div
                  v-if="item.subitems && activeSubmenu === index"
                  class="absolute left-0   mt-0 w-56 text-start bg-white shadow-lg rounded-md py-1 z-50"
              >
                <nuxt-link
                    v-for="(subitem, subIndex) in item.subitems"
                    :key="subIndex"
                    :to="subitem.target"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-900"
                >
                  {{ subitem.title }}
                </nuxt-link>
              </div>
            </li>
            <li>
              <button
                  class="py-1.5 -mt-4 text-xs bg-primary hover:bg-secondary text-white font-medium rounded-lg w-36 transition-colors duration-300"
              >
                Our State of the Art GRC
              </button>
            </li>
          </ul>
        </div>
      </div>

      <!--      mobile-->
      <div class="w-full z-[100]  flex items-center justify-center fixed bottom-0">
        <ul
            class="  z-[100] shadow-xl bottom-0 bg-sky-600 mx-auto mb-4 flex rounded-lg justify-center items-center lg:hidden
            transition-all ease-in delay-300">

          <li class="py-2 px-4 hover:cursor-pointer hover:text-white   rounded-lg transition-all "
              @click="openMobileNav">
            <Icon name="ic:round-menu" class="text-2xl text-white " v-if="!isOpenMobileNav"/>
            <Icon name="gg:close" class="text-2xl text-white " v-else/>
          </li>

        </ul>

      </div>
      <MobileNav :isOpenMobileNav="isOpenMobileNav" @close-mobile-nav="closeMobileNav"/>
    </client-only>
  </div>

</template>

<script setup>
import MobileNav from "~/components/nav/MobileNav.vue";

const header = ref(null)
const isOpenMainNav = ref(false)
const isOpenMobileNav = ref(false)
const showBasketTab = ref(false)
const showLoginDialog = ref(false)
const desktopLink = ref(null)
const iconsList = ref(null)
const route = useRoute()
const path = ref(route.path)
const isTransparent = false;

const activeSubmenu = ref(null);

const toggleSubmenu = (index) => {
  activeSubmenu.value = activeSubmenu.value === index ? null : index;
};

const closeSubmenus = () => {
  activeSubmenu.value = null;
};

const basketTabFlag = useCookie('basket_tab_flag')
const menuItems = ref(
    [
      {
        "title": "Home",
        "description": "A high-level overview of our value proposition, customer success story, and quick links to core offerings.",
        "target": "/"
      },
      {
        "title": "About Us",
        "target": "/about-us",
        "subitems": [
          {
            "title": "Firm story & mission",
            "target": "/about-us/firm-story"
          },
          {
            "title": "Leadership team bios",
            "target": "/about-us/leadership"
          },
          {
            "title": "Core values & differentiators",
            "target": "/about-us/diff"
          }
        ]
      },
      {
        "title": "Services",
        "target": "/services",
        "subitems": [
          {
            "title": "Strategic Foresight",
            "target": "/services/strategic"
          },
          {
            "title": "Intelligent Solutions",
            "target": "/services/intelligent"
          },
          {
            "title": "Trust & Resilience",
            "target": "/services/cybersecurity"
          },
          {
            "title": "Adaptive Transformation",
            "target": "/services/esg"
          }
        ]
      },
      {
        "title": "Industries",
        "target": "/industries"
      },
      {
        "title": "Resources",
        "target": "/resources",
        "subitems": [
          {
            "title": "Blog posts",
            "target": "/resources/post"
          },
          {
            "title": "Reports",
            "target": "/resources/report"
          },
          {
            "title": "News & Events",
            "target": "/resources/new"
          }
        ]
      },
      {
        "title": "Careers",
        "target": "/careers"
      },
      {
        "title": "Contact",
        "description": "Inquiry forms, office locations & direct-reach information.",
        "target": "/contact-us"
      }
    ]
)

watch(() => basketTabFlag.value, (value) => {
  if (!showBasketTab.value) {
    toggleBasketTab()
    basketTabFlag.value = new Date()

  }
})

watch(() => path.value, (value) => {
  showBasketTab.value = false
  document.body.classList.remove('overflow-hidden')
})


function openNavbar() {
  if (showBasketTab.value) {
    toggleBasketTab()
  }
  isOpenMainNav.value = !isOpenMainNav.value
  setTimeout(() => {
    document.body.classList.add('overflow-hidden')
  }, 450)
}

watch(
    () => route.path,
    newPath => {
      path.value = newPath
      if (showBasketTab.value) {
        showBasketTab.value = !showBasketTab.value
      }
      if (isOpenMainNav.value) {
        closeNav()
      }
      if (isOpenMobileNav.value) {
        closeMobileNav()
      }
    }
)

function toggleLogin() {
  showLoginDialog.value = !showLoginDialog.value
  if (showLoginDialog.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}

async function goToAccount() {
  await navigateTo({path: '/account/profile',});
}

function toggleBasketTab() {
  if (showBasketTab.value) {
    document.body.classList.remove('overflow-hidden')
  } else {
    document.body.classList.add('overflow-hidden')
    header.value.classList.add('bg-white')
    desktopLink.value.classList.add("text-gray-600")
    iconsList.value.classList.add("text-gray-600")
    desktopLink.value.classList.remove("text-white")
    iconsList.value.classList.remove("text-white")

    if (5 > 2) {
      header.value.classList.add("top-0")
      header.value.classList.remove("-top-28")
      if (isTransparent.value) {
        header.value.classList.add("bg-white")
        desktopLink.value.classList.add("text-gray-600")
        desktopLink.value.classList.remove("text-white")
        iconsList.value.classList.add("text-gray-600")
        iconsList.value.classList.remove("text-white")
        header.value.classList.remove("bg-transparent")

      }
    } else {

      header.value.classList.add("-top-28")
      header.value.classList.remove("top-0")
      header.value.classList.add("bg-white")
      header.value.classList.remove("bg-transparent")

    }

  }
  showBasketTab.value = !showBasketTab.value
}


function openMobileNav() {
  if (isOpenMobileNav.value) {
    setTimeout(() => {
      document.body.classList.remove('overflow-hidden')
    }, 450)
  } else {

    setTimeout(() => {
      document.body.classList.add('overflow-hidden')
    }, 450)
  }
  isOpenMobileNav.value = !isOpenMobileNav.value


}

function closeNav() {
  isOpenMainNav.value = false
  setTimeout(() => {
    document.body.classList.remove('overflow-hidden')
  }, 450)

}

function closeMobileNav() {
  isOpenMobileNav.value = false
  setTimeout(() => {
    document.body.classList.remove('overflow-hidden')
  }, 450)
}

onMounted(() => {
  addEventListener("resize", (event) => {
    if (event.target.innerWidth < 1024 && isOpenMainNav.value) {
      closeNav()
      openMobileNav()
    }
    if (event.target.innerWidth > 1024 && isOpenMobileNav.value) {
      closeMobileNav()
      openNavbar()
    }
  });
})


</script>

<style scoped>


</style>