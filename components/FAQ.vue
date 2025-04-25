<template>
  <section class="  dir-rtl py-16 ml-8 sm:mr-16 md:mr-32 lg:mr-44 xl:mr-56 2xl:mr-64 p-3">
    <div>
      <div class=" sm:flex gap-4  ">
        <div class="  w-full font-bold text-right">
          <strong class="border-b-[1px]   ">
            {{ data.title }}
          </strong>

        </div>
      </div>
    </div>

    <div class="flex flex-col xl:flex-row gap-16 xl:gap-0  xl:justify-between">
      <div class="xl:basis-4/5 w-full	">
        <div class="border-b-2 border-b-gray-500 overflow-hidden xl:w-4/5" v-for="(item,index) in data.questions"
             :key=" item.question+index">
          <div class="flex justify-between cursor-pointer py-2 mt-3" @click="showDesc(item,index)"
               :id=" item.question+index">
            <p class="text-yellow-800 ">
              {{ item.question }}
            </p>
            <Icon name="majesticons:chevron-down" class="text-2xl  transition-all duration-300 text-yellow-800"/>
          </div>
          <p class=" h-0 translate-y-full transition duration-300 ease-in" :id="item.answer+index">
            {{ item.answer }}
          </p>
        </div>
      </div>

      <div class="w-full h-full xl:basis-96 	">
        <img src="../static/shokrin-wall.jpg" class="    object-cover  w-full  " alt="Home"/>
      </div>

    </div>


  </section>

</template>

<script setup>

const props = defineProps({
  data: Object
})


function showDesc(item, index) {
  const question = document.getElementById(item.question + index)
  const chevron = question.children[1]
  const answer = document.getElementById(item.answer + index)
  if (answer.classList.contains('open-faq')) {
    answer.classList.remove('open-faq')
    answer.classList.add('translate-y-full')
    answer.classList.add('h-0')
    chevron.classList.remove('rotate-180')
  } else {
    answer.classList.remove('h-0')
    answer.classList.remove('translate-y-full')
    chevron.classList.add('rotate-180')
    answer.classList.add('open-faq')
  }
}
</script>

<style scoped>
.open-faq {
  @apply flex translate-x-0 my-8 h-auto
}
</style>