<template>
  <section class="mt-20 bg-lighter  dir-rtl py-16">
    <div class="mr-8 ml-8 sm:mr-16 md:mr-32 lg:mr-44 xl:mr-56 2xl:mr-64">
      <div class=" sm:flex gap-8  ">
        <div class="  w-2/4 sm:w-1/4 font-bold
              text-right">
          <h3 class="border-t-[1px] text-2xl sm:text-3xl  my-4 pt-4 border-t-slate-400 ">
            {{ props.title }}
          </h3>
          <nuxt-link to="/blog" class="flex items-center gap-1 cursor-pointer group">
            <p class="font-bold text-yellow-400 group-hover:text-green-700 transition">دیدن تمام بلاگ ها</p>
            <Icon name="ic:round-arrow-back"
                  class="text-yellow-400 mt-1 group-hover:font-bold group-hover:text-green-700 transition"/>
          </nuxt-link>
        </div>

        <p class="text-gray-500 sm:w-2/5 mt-10">
          {{ props.abstract }}
        </p>

      </div>

      <div
          class="grid   gap-8 grid-cols-1 sm:grid-cols-2    xl:grid-cols-3 mt-16 sm:grid-flow-row-dense   sm:ml-16 md:ml-32 lg:ml-44 xl:ml-56 2xl:ml-64 ">

        <div class="w-full sm:w-96 sm:w-full cursor-pointer"
             v-for="(item,index) in knowItems"
             :class="{'sm:col-start-2':index===2,'xl:col-auto':index===2,'row-span-2':dSpan(index) }">
          <!--        image container-->
          <div class="relative pointer">
            <nuxt-link :to="'/blog/'+item.slug">
              <div class="relative group overflow-hidden rounded-tl-xl rounded-tr-xl ">
                <img :src="item.thumbnail" alt="swiper" class="object-cover w-full sm:w-96  h-full sm:w-full
            group-hover:scale-110 duration-500 transition   ease-in-out"
                     :class="{'sm:h-[30rem]':dSpan(index)}"/>
              </div>
              <!--        description-->
              <div class="flex flex-col bg-white shadow-2xl rounded-br-lg rounded-bl-lg px-4">
                <p class="font-bold text-xs py-2 ">{{ item.title }}</p>
                <div class="hidden  text-xs  sm:flex">
                  <p class="mb-4 line-clamp-3  text-xs w-full">{{ item.tag }}</p>
                 </div>
                <div class="hidden  text-xs w-full  sm:flex">
                   <p class="mb-4 line-clamp-3  text-xs align-left" style="float: left">{{ item.date }}</p>
                </div>

              </div>
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>


  </section>
</template>

<script setup>
import useSave from "~/composables/useSave";
import {useMainStore} from "~/store";

const props = defineProps({
  title: String,
  itemsList: Array,
  abstract: String
})

const store = useMainStore()
const knowItems = reactive(props.itemsList)
const saved = computed(() => store.getSavedItems)

function saveItem(item) {
  if (knowItems.find(element => element.id === item.id)) {
    knowItems.find(element => element.id === item.id).isSaved = !knowItems.find(element => element.id === item.id).isSaved
  }
  useSave(item)
}

function dSpan(index) {
  return index === 10 || index === 30 || index === 40;

}

function checkSave() {
  if (saved.value && saved.value.length > 0) {
    for (const argument of store.getSavedItems) {
      const index = knowItems.findIndex(el => el.id === argument.id)
      if (index >= 0) {
        knowItems[index].isSaved = true
      }
    }
  } else {
    if (knowItems && knowItems.length > 0) {
      knowItems.map(el => el.isSaved = false)
    }
  }
}

checkSave()

</script>

<style scoped>


</style>