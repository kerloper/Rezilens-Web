<template>
  <div ref="header"
       class="max-w-[1440px] mx-auto top-0 transition-all ease-in duration-500 z-20"
  >
    <client-only>
      <div class="pt-10 mb-4 md:hidden lg:hidden xl:hidden  ">
        <nuxt-link to="/">
          <img src="../../static/rezilens/Logo-Main.png" class="  mx-auto" alt="rezilens"/>
        </nuxt-link>
      </div>
      <div class="md:flex lg:flex xl:flex hidden flex-row py-6 md:pl-16 lg:pl-16 xl:pl-16 md:pr-12 lg:pr-12 xl:pr-12 ">
        <div
            class="basis-2/5 text-right"
        >
          <ul ref="iconsList"
              class="right-menu-box hidden lg:flex justify-start items-center lg:relative transition-all ease-in delay-300"
              :class="{'text-white':isTransparent,'text-black':!isTransparent}">
            <li>
              <nuxt-link to="/">
                <img src="../../static/rezilens/Logo-Main.png" class="h-16" alt="Rezilens"/>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="basis-1/5 flex justify-start pt-12">

        </div>
        <div
            class="basis-2/5  text-left"
        >
          <ul
              class=" left-menu-title-box hidden lg:relative lg:flex justify-end transition-all ease-in delay-300 pt-4"
              :class="{'text-white':isTransparent,'text-black':!isTransparent}">
            <li
                v-for="item in menuItems"
                class="hover:cursor-pointer w-[85px] mx-2 px-2 text-center items-center justify-center text-sm text-white hover:text-blue-300 rounded-lg transition-all "
            >
              <nuxt-link :to="item.target" class="flex items-center text-black justify-center text-center">
                {{ item.title }}
              </nuxt-link>
            </li>
            <li>
              <button class="py-1.5   -mt-4 text-xs bg-[#3e1660] text-white font-medium rounded-lg w-36 transition-colors duration-300">
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
import TheNavbar from "~/components/nav/TheNavbar.vue";
import MobileNav from "~/components/nav/MobileNav.vue";
import {useMainStore} from "~/store";
import BasketTab from "~/components/BasketTab.vue";

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

const basketTabFlag = useCookie('basket_tab_flag')
const menuItems = ref(
    [
      {
        "title": "Home",
        "description": "A high-level overview of our value proposition, customer success story, and quick links to core offerings.",
        "target": "home"
      },
      {
        "title": "About Us",
        "target": "about-us",
        "subitems": [
          {
            "title": "Firm story & mission",
            "target": "firm-story-mission"
          },
          {
            "title": "Leadership team bios",
            "target": "leadership-team-bios"
          },
          {
            "title": "Core values & differentiators",
            "target": "core-values-differentiators"
          }
        ]
      },
      {
        "title": "Services",
        "target": "services",
        "subitems": [
          {
            "title": "Strategic Foresight",
            "target": "strategic-foresight"
          },
          {
            "title": "Intelligent Solutions (AI & Data)",
            "target": "intelligent-solutions-ai-data"
          },
          {
            "title": "Trust & Resilience (Cybersecurity & Risk)",
            "target": "trust-resilience-cybersecurity-risk"
          },
          {
            "title": "Adaptive Transformation (Change Management & ESG)",
            "target": "adaptive-transformation-change-management-esg"
          }
        ]
      },
      {
        "title": "Industries",
        "target": "industries"
      },
      {
        "title": "Resources",
        "target": "resources",
        "subitems": [
          {
            "title": "Blog posts",
            "target": "blog-posts"
          },
          {
            "title": "Reports",
            "target": "reports"
          },
          {
            "title": "News & Events",
            "target": "news-events"
          }
        ]
      },
      {
        "title": "Careers",
        "target": "careers"
      },
      {
        "title": "Contact",
        "description": "Inquiry forms, office locations & direct-reach information.",
        "target": "contact"
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