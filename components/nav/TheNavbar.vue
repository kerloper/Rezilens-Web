<template>
  <nav
      class="w-full hidden translate-x-full opacity-0 h-screen bg-white z-10 fixed top-0 left-0 right-0 transition-all  duration-500 ease-in"
      ref="mainNav">
    <div class="grid grid-cols-3 ">
      <div class="h-screen bg-green-100 relative">
        <nuxt-link to="/">

        </nuxt-link>
        <img src="../../static/banner-6-1.jpg" class="w-full h-screen object-cover  " alt="Home"/>
      </div>
      <div class="h-screen bg-goldlight  px-20 pt-44 flex items-end flex-col gap-8">
<!--        <nuxt-link v-for="(sub,index) in subs"   class="text-xl font-bold hover:text-yellow-400 transition ease-in cursor-pointer" >-->
<!--          <Icon name="ic:round-arrow-back" class="text-yellow-400"></Icon>-->
<!--          {{sub.label}}-->
<!--        </nuxt-link>-->

      </div>
      <div class="h-screen  bg-white pt-44 px-20 flex flex-col gap-16 items-end justify-between relative">
        <div
            class="p-2  hover:cursor-pointer bg-lighter hover:text-yellow-300 rounded-lg transition-all absolute top-10 right-20"
            @click="closeNav">
          <Icon name="ic:round-close" class="text-2xl  "/>
        </div>
        <div class="flex flex-col gap-12 text-right">
          <nuxt-link v-for="(item,index) in navItems" :to="item.to"  @mouseover="showSubs(item.subs)"
                     class=" font-bold  cursor-pointer underline-offset-[10px]
           hover:underline hover:decoration-yellow-400 hover:decoration-2 transition-all  hover:text-yellow-400">
            {{item.label}}
          </nuxt-link>

        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  isOpenMainNav: {
    type: Boolean,
    default: false
  }
})
const navItems = reactive([
])
const subs = ref(navItems[0].subs)
function showSubs(items){
  subs.value = items
}

const emit = defineEmits(['closeNav'])

const mainNav = ref()

watch(() => props.isOpenMainNav, (value) => {
  if (!value) {
    mainNav.value.classList.remove('translate-x-0')
    mainNav.value.classList.add('translate-x-full')
    mainNav.value.classList.remove('opacity-100')
    mainNav.value.classList.add('opacity-0')
  } else {
    mainNav.value.classList.remove('hidden')
    mainNav.value.classList.remove('translate-x-full')
    mainNav.value.classList.add('translate-x-0')
    mainNav.value.classList.remove('opacity-0')
    mainNav.value.classList.add('opacity-100')

  }
});

function closeNav() {
  emit('closeNav')
  mainNav.value.classList.remove('translate-x-0')
  mainNav.value.classList.add('translate-x-full')
  mainNav.value.classList.remove('opacity-100')
  mainNav.value.classList.add('opacity-0')
}
</script>

<style scoped>

</style>