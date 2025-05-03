<template>
  <section class="    dir-rtl ">
    <div class="  default-x-m">
      <div v-show="pending">
        <svg class="w-full text-center text-blue-500 h-16 mt-12" xmlns="http://www.w3.org/2000/svg" width="24"
             height="24" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z">
            <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                              values="0 12 12;360 12 12"/>
          </path>
        </svg>
      </div>
      <div class="grid gap-8 grid-cols-1 sm:grid-cols-1 xl:grid-cols-1 mt-5 sm:grid-flow-row-dense" v-if="orders"
           v-show="!pending">
        <div class="w-full cursor-pointer"
             v-for="(item,index) in orders" :key="item.id">

          <div class="max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="md:flex">
              <!-- tour image -->
              <div class="md:w-1/3">
                <img :src="item.ordered.thumbnail" alt="Tour Image" class="h-64 w-full object-cover">
              </div>
              <div class="md:w-2/3 p-4 flex flex-col justify-between">
                <!-- Tour Title -->
                <h2 class="text-xl font-bold mb-2">{{ item.ordered.title }}</h2>

                <!-- Persons Information -->
                <div class="mb-4">
                  <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-300 text-xs">
                      <thead>
                      <tr>
                        <th class="px-6 py-3 bg-gray-100 border-b border-gray-300 text-right text-xs font-medium text-gray-600 uppercase">
                          نام
                        </th>
                        <th class="px-6 py-3 bg-gray-100 border-b border-gray-300 text-right text-xs font-medium text-gray-600 uppercase">
                          نام خانوادگی
                        </th>
                        <th class="px-6 py-3 bg-gray-100 border-b border-gray-300 text-right text-xs font-medium text-gray-600 uppercase">
                          شماره تلفن
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="person in item.persons" :key="person.id">
                        <td class="px-6 py-4 whitespace-nowrap border-b border-gray-300">
                          {{ person.first_name }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap border-b border-gray-300">
                          {{ person.last_name }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap border-b border-gray-300">
                          {{ person.mobile }}
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <table class="border-collapse border border-gray-300 min-w-full bg-white border border-gray-300 text-xs">
                      <tbody>

                      <!-- Add a row for total cost -->
                      <tr>
                        <td class="border border-gray-300 p-2 font-bold" colspan="2">جمع کل</td>
                        <td class="border border-gray-300 p-2 font-bold">
                          {{ item.persons.length }}&nbsp;&times;&nbsp;{{ item.ordered.cost }} تومان
                          <!-- Conditionally show cost_dollar if it's greater than 0 -->
                          <template v-if="item.ordered.cost_dollar > 0">
                            به اضافه {{ item.persons.length }}&nbsp;&times;&nbsp;{{ item.ordered.cost_dollar }} دلار
                          </template>
                        </td>
                      </tr>
                      <!-- Add a row for start time -->
                      <tr>
                        <td class="border border-gray-300 p-2" colspan="2">زمان شروع</td>
                        <td class="border border-gray-300 p-2">{{ item.ordered.start_at_view }}</td>
                      </tr>
                      <!-- Add a row for end time -->
                      <tr>
                        <td class="border border-gray-300 p-2" colspan="2">زمان پایان</td>
                        <td class="border border-gray-300 p-2">{{ item.ordered.end_at_view }}</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex justify-end">
                  <nuxt-link :to="'/products/'+item.ordered.slug" class="mr-2">
                    <Icon name="clarity:details-line" class="text-2xl "/>
                  </nuxt-link>
                  <!-- Share Tour -->
                  <!--                  <button class="mr-2" @click="shareTour">-->
                  <!--                    <Icon name="heroicons-outline:share" class="text-2xl "/>-->
                  <!--                  </button>-->
                  <!--                  &lt;!&ndash; Delete Tour &ndash;&gt;-->
                  <!--                  <button class="mr-2" @click="deleteTour">-->
                  <!--                    <Icon name="heroicons-outline:trash" class="text-2xl "/>-->
                  <!--                  </button>-->
                </div>
              </div>
            </div>
          </div>


          <!--          <nuxt-link :to="'/tours/'+item.ordered.slug">-->
          <!--            &lt;!&ndash;        image container&ndash;&gt;-->
          <!--            <div class="relative group overflow-hidden rounded-tl-xl rounded-tr-xl ">-->
          <!--              <img :src="item.ordered.thumbnail" :alt="item.ordered.title" class="object-cover w-full sm:w-96  h-full sm:w-full-->
          <!--            group-hover:scale-110 duration-500 transition   ease-in-out"-->
          <!--              />-->

          <!--            </div>-->
          <!--            &lt;!&ndash;        description&ndash;&gt;-->
          <!--            <div class="flex flex-col     rounded-br-lg rounded-bl-lg px-4">-->
          <!--              <p class="font-bold text-xl py-2 ">{{ item.ordered.title }}</p>-->
          <!--              <div class="hidden sm:flex">-->
          <!--                <p class="mb-4 line-clamp-3">{{ item.ordered.move_time }}</p>-->
          <!--              </div>-->

          <!--            </div>-->
          <!--          </nuxt-link>-->
        </div>
      </div>
      <div v-if="error">
        <p>Something wrong try again later</p>
      </div>
    </div>

  </section>
</template>

<script setup>
import {ref} from "vue";
import {uri} from "~/utils";
import {useAsyncFetchData} from "~/composables/useAsyncFetchData";

const page = ref('1')
const limit = ref('200')
const type = ref('tour')
const categoriesData = ref(null);
const locationsData = ref(null);
const startDate = ref(null);
const endDate = ref(null);

const user = useCookie('user');
const token = useCookie('token');
const isLogin = useCookie('is_login');

///TODO: move this to composable
const {
  data: orders,
  pending,
  refresh,
  error
} = await useAsyncFetchData(
    {
      key: 'list',
      token: isLogin.value ? token.value : '',
      service: uri.reserve_list,
      watchData: [endDate, startDate],
    }, {
      method: 'post',
      body: new URLSearchParams({
        type: type.value,
        limit: limit.value,
        page: page.value,
        start_date: startDate.value,
        end_date: endDate.value,
        categories: categoriesData.value,
        location: locationsData.value
      }),
    })


let request = ref(
    {
      service: '',
      fields: {},
      callBack: () => {
      },
      error: () => {
      },
    }
)

function callback(response) {
}

function errorHandler(error) {
}

function goToTourDetail() {
}

function deleteTour() {
}

function shareTour() {
  // Handle the action to share the tour
}

</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style scoped>
:deep(.multiselect) {
  @apply text-right;
}

:deep(.vpd-next) {
  margin-left: 40px;
}

/* Add your custom styling here */
button {
}

button:hover {
}
</style>