<template>
  <teleport to="body">
    <transition
        enter-active-class="transition ease-out duration-200 transform"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200 transform"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
      <div
          v-show="showBasketTab"
          class="  w-screen max-w-[1440px] mx-auto  "
      >
        <div
            class="fixed top-20 lg:pt-12 md:pt-12   pb-16 pt-6 z-10 inset-x-0 bottom-0 w-screen max-w-[1440px] mx-auto  justify-center   text-center bg-white">
          <div class="flex h-8">
            <div
                class="border-b-0 h-fit flex items-center w-full mx-8 sm:mx-0 sm:w-6/6 lg:w-4/4 2xl:w-5/5 focus-within:border-blue-500 transition-all duration-300 dir-rtl">
              <div class="flex items-center">
                <Icon name="simple-line-icons:handbag" class="text-4xl"/>
                <p class="mt-1 px-2 w-full text-right sm:text-xl placeholder:px-2 outline-0 placeholder:text-lg lg:justify-center hidden lg:block md:block xl:block">
                  سبد خرید
                </p>



                <div
                    class=" flex mt-1 absolute md:left-14 lx:left-14 lg:left-14 left-3 md:hidden lg:hidden lx:hidden py-3 placeholder:px-2 outline-0 placeholder:text-lg lg:justify-center">
                  <div class="col-span-3">
                    <nuxt-link v-if="list.length>0" @click="verifyOrder()"
                               class="h-10 cursor-pointer py-2 px-2 font-sans rounded-md bg-gold hover:bg-amber-500 border-gray-50 shadow-xl border w-full md:w-auto mt-1 mb-1 ml-1"
                               type="button">
                      ثبت سفارش
                    </nuxt-link>
                  </div>
                  <div class="px-2 pr-2 ">
                    <nuxt-link @click="closeTab"
                               class="h-10 cursor-pointer py-2 px-2 font-sans rounded-md bg-darker text-white w-full md:w-auto mt-1 mb-1 ml-1"
                               type="button">
                      بازگشت
                    </nuxt-link>
                  </div>

                </div>

                <div
                    class=" pt-4 pb-4 bg-gray-50 shadow-xl border border-gold w-full bottom-0 absolute md:pl-24 lx:pl-24 lg:pl-24 pl-24  text-left items-end justify-end  py-3 placeholder:px-2 outline-0 placeholder:text-lg hidden md:flex lg:flex lx:flex">
                  <div
                      class="float-right right-4 pb-3 absolute"
                  >
                    مبلغ کل سفارش:
                    {{formatPrice(priceTotal)}}
                  </div>
                  <div class="pr-2 col-span-3">
                    <nuxt-link v-if="list.length>0" @click="verifyOrder()"
                               class="h-10 cursor-pointer py-2 px-2 font-sans rounded-md bg-gold hover:bg-amber-500 border-gray-50 shadow-xl border  text-black w-full md:w-auto mt-1 mb-1 ml-1"
                               type="button">
                      ثبت سفارش
                    </nuxt-link>
                  </div>
                  <div class="px-2">
                    <nuxt-link @click="closeTab"
                               class="h-10 cursor-pointer py-2 px-2 font-sans rounded-md bg-darker text-white w-full md:w-auto mt-1 mb-1 ml-1"
                               type="button">
                      بازگشت
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=" bg-white w-full sm:mx-0 sm:w-6/6 lg:w-4/4 2xl:w-5/5 ">
            <div v-if="loading" class="loading-container absolut mt-52 ">
              <div class="loading-circle"></div>
              <p class="loading-text">لطفا منتظر بمانید</p>
            </div>
          </div>
          <div class="  bg-white w-full sm:mx-0 sm:w-6/6 lg:w-4/4 2xl:w-5/5 ">
            <div v-if="showError" class="loading-container absolut mt-52 ">
              <p class="loading-text">
                متاسفانه در دریافت اطلاعات خطایی رخ داده است
              </p>
              <button
                  @click="getBasketList()"
              >
                تلاش مجدد
              </button>
            </div>
          </div>
          <div class="w-full bg-white sm:mx-0 sm:w-6/6 lg:w-4/4 2xl:w-5/5 ">
            <div v-if="dataLoaded" class="loading-container absolut  ">

              <div
                  class="pt-6 text-sm w-full text-right float-right pr-8 lg:hidden md:hidden xl:hidden"
              >
                مبلغ کل سفارش:
                {{priceTotal}}
                تومان
              </div>
              <div class="container mx-auto lg:py-8 md:py-8 py-8 px-3">
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-h-screen overflow-y-auto lg:pb-24 md:pb-24 lx:pb-24"
                    dir="rtl">
                  <div v-for="product in list " :key="product.id" class="border p-4 h-44 flex shadow-md rounded" dir="rtl">
                    <!-- First column: Product Image -->
                    <nuxt-link :to="'/products/'+product.slug">
                      <div class="ml-4">
                        <img :src="product.image.src" :alt="product.title" class="w-24  h-36 object-contain"/>
                      </div>
                    </nuxt-link>
                    <!-- Second column: Product Information -->
                    <div class="flex-1 w-40 h-2 ">
                      <nuxt-link :to="'/products/'+product.slug">
                        <div class="  mb-2 text-right overflow-ellipsis w-50 h-6"
                             style="text-overflow: ellipsis!important;">
                          <p class="text-sm">
                            {{ product.title }}
                          </p>
                          <p v-if="product.property">
                            <span v-if="product.property.color" class="text-sm">
                              {{ product.property.color.meta_information.title }}
                            </span>
                            <span v-if="product.property['base-color']" class="text-sm">
                               - {{ product.property['base-color'].meta_information.title }}
                            </span>
                          </p>
                          <p v-if="product.property">
                            <span v-if="product.property['shed-type']" class="text-sm">
                                {{ product.property['shed-type'].meta_information.title }}
                              <span v-if="product.property">
                                <span v-if="product.property.meta_selected">
                                  {{ product.property.meta_selected.meta_value }}
                                  {{ product.property.meta_selected.meta_key_information.suffix }}
                                </span>
                                <span v-else>
                                </span>
                              </span>
                            </span>
                          </p>
                        </div>

                        <h3 class="text font-semibold mb-0 mt-10 text-left"> {{formatPrice(getPrice(product)) }}</h3>
                      </nuxt-link>
                      <hr class="mb-2"/>
                      <div class="flex items-center justify-between">
                        <!-- Minus button -->
                        <button v-if="product.count > 0" @click="subtractFromBasket(product)"
                                class="text-red-600 hover:text-red-700 focus:outline-none border border-red-600 hover:border-red-700 px-3 py-1 rounded-md">
                          -
                        </button>

                        <!-- Product count in the basket -->
                        <span class="mx-4">{{ product.count }}</span>
                        <!-- Add button -->
                        <button @click="addToBasket(product)"
                                class="text-green-600 hover:text-green-700 focus:outline-none border border-green-600 hover:border-green-700 px-3 py-1 rounded-md">
                          +
                        </button>

                        <!-- Remove button -->
                        <button @click="removeFromBasket(product)"
                                class="text-red-600 hover:text-red-700 focus:outline-none">
                          حذف
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mt-44"></div>
                  <div class="mt-44  "></div>
                  <div class="mt-44 md:block lg:block hidden"></div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <FullScreenDialogLoading v-if="showOverlay" :message="overlayMessage"/>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import {uri} from "~/utils";
import {useFetchData} from "~/composables/useFetchData";


import {useMainStore} from "~/store";
import {ref} from "vue";
import FullScreenDialogLoading from "~/components/loading/FullScreenDialogLoading.vue";

const store = useMainStore()
const isNeedRefresh = ref(store.getIsNeedRefresh)

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const route = useRoute()
const emit = defineEmits(['closeBasketTab'])
const list = ref([]);
const showBasketTab = ref(false);
const showError = ref(false);
const loading = ref(true);
const dataLoaded = ref(false);

const isLogin = useCookie('is_login')
const user = useCookie('user')
const token = useCookie('token')
const flagCart = useCookie('flag_cart')


function closeTab() {
  store.setRefreshStatus(true)
  if (showBasketTab.value === true) {
    showBasketTab.value = false;
    emit('closeBasketTab');
  }
}

watch(() => props.show, show => {
  showBasketTab.value = show;
  if (show) {
    getBasketList()
  }
});

function getPrice(item) {
  if (item.property) {
    if (item.property.meta_selected) {
      let price = 'نامشخص';
      let list = item.property.meta_selected_data;
      if (list) {
        if (list.length > 0) {
          list.forEach((meta, index) => {
            if (meta.meta_key == 'price') {
              price = meta.meta_value + ' ' + (meta.meta_key_information ? meta.meta_key_information.suffix : '')
            }
          })
        }
      }
      return price;
    }
  }


  let price = 'نامشخص';
  if (item.meta) {
    if (item.meta.length > 0) {
      item.meta.forEach((meta, index) => {
        if (meta.meta_key == 'price') {
          price = meta.meta_value
        }
      })
    }
  }
  return price;
}

async function getBasketList() {
  loading.value = true
  dataLoaded.value = false
  showError.value = false

  const bodyData = new URLSearchParams({
    type: 'cart'
  })
  const {data, pending, error, refresh} = await useFetchData({
    service: uri.get_cart_list,
    fields: {},
    callBack: () => {
    },
    error: () => {
    },
    token: isLogin.value ? token.value : '',
  }, {
    method: 'POST',
    body: bodyData,
  })
  if (data.value) {
    list.value = data.value.data.list
    loading.value = false
    showError.value = false
    dataLoaded.value = true
    if (list.value.length == 0)
      flagCart.value = false
    priceTotal.value = 0
    list.value.forEach((item) => {
      fixPrice(item)
    })
  }
  if (error.value) {
    dataLoaded.value = false
    loading.value = false
    showError.value = true
  }
}

async function updateBasketList(product) {

  store.setRefreshStatus(true)
  loading.value = true
  dataLoaded.value = false
  showError.value = false

  const bodyData = new URLSearchParams(product)
  const {data, pending, error, refresh} = await useFetchData({
    service: uri.update_cart,
    fields: {},
    callBack: () => {
    },
    error: () => {
    },
    token: isLogin.value ? token.value : '',
  }, {
    method: 'POST',
    body: bodyData,
  })
  await getBasketList()
}

async function deleteBasket(product) {

  store.setRefreshStatus(true)
  loading.value = true
  dataLoaded.value = false
  showError.value = false

  const bodyData = new URLSearchParams(product)
  const {data, pending, error, refresh} = await useFetchData({
    service: uri.delete_cart,
    fields: {},
    callBack: () => {
    },
    error: () => {
    },
    token: isLogin.value ? token.value : '',
  }, {
    method: 'POST',
    body: bodyData,
  })
  await getBasketList()
}


async function addToBasket(product) {
  // Check if the product is already in the basket
  const index = list.value.findIndex(item => item.cart_slug === product.cart_slug);

  if (index > -1) {
    // If the product is already in the basket, increment its count
    if (parseInt(list.value[index].count) >= parseInt(getStock(list.value[index]))) {
      await setLoading(
          'تعداد بیشتر کالا موجود نمی باشد',
          true,
          () => {
          }
          // openBasketTab(),
      );
      return
    }
    list.value[index].count++;
    updateBasketList(product)
  } else {
    // If the product is not in the basket, add it with a count of 1
    // list.value.push({...product, count: 1});
    // deleteBasket(product)
  }
}

// Method to subtract a product from the basket
function subtractFromBasket(product) {
  // Check if the product is in the basket
  const index = list.value.findIndex(item => item.cart_slug === product.cart_slug);

  if (index > -1) {
    // If the product is in the basket and its count is greater than 1, decrement its count
    if (list.value[index].count > 1) {
      list.value[index].count--;
      updateBasketList(product)
    } else {
      // If the product's count is 1, remove it from the basket
      list.value.splice(index, 1);
      deleteBasket(product)
    }
  }
}

// Method to remove a product from the basket
function removeFromBasket(product) {
  // Check if the product is in the basket
  const index = list.value.findIndex(item => item.id === product.id);

  if (index > -1) {
    // If the product is in the basket, remove it
    list.value.splice(index, 1);
    deleteBasket(product)
  }
}

function getStock(item) {
  let stock = 0;
  if (item.meta) {
    if (item.meta.length > 0) {
      item.meta.forEach((meta, index) => {
        if (meta.meta_key == 'stock') {
          stock = meta.meta_value
        }
      })
    }
  }
  return stock;
}

const showOverlay = ref(false);
const overlayMessage = ref('');

async function setLoading(message, autoClose, doneAction) {
  overlayMessage.value = message;
  showOverlay.value = true;
  if (autoClose) {
    setTimeout(function () {
      stopLoading();
      doneAction;
    }, 2000)
  }
}

function stopLoading() {
  showOverlay.value = false;
  overlayMessage.value = '';
}

async function verifyOrder() {
  // Access the getter
  store.setRefreshStatus(true)
  const isCheckoutPage = route.path === '/checkout'
  isCheckoutPage ? closeTab() :
      await navigateTo({path: '/checkout'});
}


let priceList = ref([])
let priceTotal = ref(0)

function fixPrice(item) {
  let price = 0;
  if (item.property.meta_selected) {
    (item.property.meta_selected_data).forEach((meta, index) => {
      if (meta.meta_key == 'price') {
        price = meta.meta_value
      }
    })
  } else {
    if (item.meta) {
      if (item.meta.length > 0) {
        item.meta.forEach((meta, index) => {
          if (meta.meta_key == 'price') {
            price = meta.meta_value
          }
        })
      }
    }
  }
  priceList.value[item.cart_slug] = price;
  priceTotal.value += (price * item.count)
}


const formatPrice = (price) => {
  const formatted = new Intl.NumberFormat('fa-IR').format(price);
  return `${formatted} تومان`;
};
</script>


<style scoped>
/* Style for the loading indicator */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
}

.loading-circle {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #ccba05; /* Adjust the color as needed */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

.loading-text {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}

/* Animation for the circular loading icon */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>