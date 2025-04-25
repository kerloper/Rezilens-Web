<template>
  <div class=" h-28 bg-white w-screen max-w-[1440px] mx-auto fixed top-0 transition-all ease-in   duration-500 z-20"
       dir="rtl">
    <nav class="flex lg:right-20 md:right-20 lx:right-20 right-0 pr-20">
      <nuxt-link to="/">
        <img src="../../static/logo.png" alt="logo"
             class="w-36 absolute    left-0 right-0  mx-auto lg:mx-0 lg:left-12  top-10 lg:right-auto "/>
      </nuxt-link>
      <ul
          class="hidden lg:flex  items-center justify-center transition-all ease-in delay-300 mt-10 gap-8 "
          :class="{'text-white':isTransparent,'text-black':!isTransparent}">
        <li class="cursor-pointer  underline-offset-8  hover:underline hover:decoration-yellow-400 hover:decoration-2 ">
          <nuxt-link to="/" class="flex p-2">
            صفحه اصلی
          </nuxt-link>
        </li>
        <li class="cursor-pointer underline-offset-8 hover:underline hover:decoration-yellow-400 hover:decoration-2 ">
          <nuxt-link to="/account/profile" class="flex p-2">
            پروفایل
          </nuxt-link>
        </li>
        <li class="cursor-pointer  underline-offset-8  hover:underline hover:decoration-yellow-400 hover:decoration-2 ">
          <nuxt-link to="/account/favorites" class="flex p-2">
            علاقه مندی ها
          </nuxt-link>
        </li>
        <li class="cursor-pointer  underline-offset-8  hover:underline hover:decoration-yellow-400 hover:decoration-2 ">
          <nuxt-link to="/account/orders" class="flex p-2">
            سفارشات
          </nuxt-link>
        </li>
        <li class="cursor-pointer underline-offset-8 hover:underline hover:decoration-yellow-400 hover:decoration-2 "
            @click="logout()">
          <span class=" hover:text-yellow-400 flex p-2">
              <Icon name="mdi:login" class="text-2xl hover:text-yellow-400"/>
           خروج

          </span>
        </li>
      </ul>
      <!--desktop-->

      <!--      mobile-->
      <div class="w-full z-[100] hide-on-print right-0  flex items-center justify-center fixed bottom-0">
        <ul
            class="  z-[100] shadow-xl bottom-0 mx-auto mb-4 flex bg-darker rounded-lg justify-center items-center    lg:hidden
          transition-all ease-in delay-300 dir-rtl">

          <li class="py-2 px-4  hover:cursor-pointer p  hover:text-yellow-400 hover:bg-sky-50 rounded-br-lg rounded-tr-lg transition-all border-l-2 "
              @click="openMobileNav">
            <Icon name="ic:round-menu" class="text-2xl text-yellow-400 " v-if="!isOpenMobileNav"/>
            <Icon name="gg:close" class="text-2xl text-yellow-400 " v-else/>
          </li>

          <li v-if="isLogin"
              class="py-2 px-4  hover:cursor-pointer hover:bg-sky-50 hover:text-yellow-400   transition-all  border-l-2 "
              @click="goToAccount">
            <Icon name="material-symbols:account-circle-full" class="text-2xl  text-yellow-400"/>
          </li>
          <li class="py-2 px-4    hover:cursor-pointer hover:bg-sky-50 hover:text-yellow-400  transition-all border-l-2 relative">
            <nuxt-link to="/account/favorites">
              <Icon name="mdi:cards-heart-outline" class="text-2xl text-yellow-400"/>
            </nuxt-link>
            <span class="w-2 h-2 rounded absolute bg-green-600 top-2 right-4 border-[1px]	border-white"
                  v-if="savedItems && savedItems.length > 0"/>

          </li>
          <li class="py-2 px-4    hover:cursor-pointer hover:bg-sky-50 hover:text-yellow-400  transition-all border-l-2 relative">
            <nuxt-link to="/account/orders">
              <Icon name="icon-park-solid:transaction-order" class="text-2xl text-yellow-400"/>
            </nuxt-link>

          </li>

          <nuxt-link to="/">
            <li
                class="py-2 px-4  hover:cursor-pointer rounded-lg   hover:bg-sky-50 hover:text-yellow-400  transition-all "
                @click="logout()"
            >
              <Icon name="codicon:sign-out" class="text-2xl text-yellow-400"/>
            </li>
          </nuxt-link>
        </ul>
      </div>
    </nav>
    <MobileNav :isOpenMobileNav="isOpenMobileNav" @close-mobile-nav="closeMobileNav"/>
  </div>
</template>

<script setup>
import MobileNav from "~/components/nav/MobileNav.vue";
import {useMainStore} from "~/store";
import {useFetchData} from "~/composables/useFetchData";
import {uri} from "~/utils";

const isOpenMainNav = ref(false)
const isOpenMobileNav = ref(false)
const showBasketTab = ref(false)
const desktopLink = ref(null)
const iconsList = ref(null)
const route = useRoute()
const path = ref(route.path)
const store = useMainStore()
const savedItems = computed(() => store.getSavedItems)
const isTransparent = false;
const user = useCookie('user')
const isLogin = useCookie('is_login')
const token = useCookie('token')
const basketTabFlag = useCookie('basket_tab_flag')


watch(() => basketTabFlag.value, (value) => {
  if (!showBasketTab.value) {
    basketTabFlag.value = new Date()

  }
})

watch(() => path.value, (value) => {
  showBasketTab.value = false
  document.body.classList.remove('overflow-hidden')
})


async function goToAccount() {
  await navigateTo({path: '/account/profile' });
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


async function logout() {
  const {data, error} = await useFetchData(
      {
        service: uri.logout,
        fields: {},
        token: isLogin.value ? token.value : '',
        callBack: () => {
        },
        error: () => {
        },
      },
      {
        method: 'POST',
      }
  );
  user.value = null
  isLogin.value = false
  token.value = ''
  await goToMain();


}

async function goToMain() {
  await navigateTo({path: '/'})
}
</script>

<style scoped>

@media print {
  /* Hide elements with class "hide-on-print" */
  .hide-on-print {
    display: none !important;
  }

  /* Add additional print-specific styles as needed */
}
</style>