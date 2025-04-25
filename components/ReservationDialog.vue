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
          ref="modal-backdrop"
          class="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50"
          v-show="showModal">
        <div dir="rtl"
             class="flex items-center justify-center min-h-screen text-center">
          <transition
              enter-active-class="transition ease-out duration-300 transform "
              enter-from-class="opacity-0 translate-y-10 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="ease-in duration-200"
              leave-from-class="opacity-100 translate-y-0 scale-100"
              leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
          >


            <div
                class="relative bg-white rounded-lg   overflow-hidden shadow-xl     mx-8 sm:mx-0  lg:w-2/3  	max-h-xl"
                role="dialog"
                ref="modal"
                aria-modal="true"
                v-show="showModal"
                aria-labelledby="modal-headline"
            >
              <button class="absolute top-4 left-4 hover:bg-goldlight rounded p-1 transition duration-300"
                      @click="closeModal">
                <Icon name="gg:close" class="text-2xl"/>
              </button>
              <button class="absolute top-4 right-4 hover:bg-goldlight rounded p-1 transition duration-300"
                      @click="backToMobile" v-if="hasNumber">
                <Icon name="ic:round-arrow-forward" class="text-2xl"/>
              </button>
              <div class=" py-8 sm:px-4 lg:px-16">
                <div>
                  <p class="text-center mt-4 text-slate-500 text-base dir-rtl">{{ tour.title }}</p>
                  <!-- Order Form -->
                  <form class="mt-6 space-y-6">
                    <div class="flex space-x-4 p-2">
                      <div class="flex-1 ml-3">
                        <label for="order_type" class="block text-sm font-medium text-gray-700">نوع سفارش</label>
                        <select
                            v-model="orderType"
                            id="order_type"
                            name="order_type"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-left"
                        >
                          <option value="رزرو بدون پرداخت (موقتی)">رزرو بدون پرداخت (موقتی)</option>
                        </select>
                      </div>
                      <div class="flex-1">
                        <label for="person_count" class="block text-sm font-medium text-gray-700">تعداد نفرات</label>
                        <input
                            v-model="personCount"
                            type="number"
                            id="person_count"
                            name="person_count"
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center"
                        />
                      </div>
                      <div class="flex-1">
                        <label for="total_fee" class="block text-sm font-medium text-gray-700">مبلغ کل (تومان)</label>
                        <div class="pt-5">
                          {{ tour.cost_view }} برای هر نفر
                        </div>
                      </div>
                    </div>

                    <!-- Rest of the form -->
                    <hr/>

                    <!-- Personal Information Form -->
                    <!-- Dynamic fields based on person count -->
                    <div
                        class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 p-2"
                        v-for="(index) in personCount"
                        :key="index"
                    >
                      <strong class="text-xs">
                        مشخصات مسافر {{ index }}
                      </strong>
                      <div class="flex flex-col space-y-1 sm:w-1/4">
                        <input
                            v-model="formFields[index-1].first_name"
                            type="text"
                            :id="'first_name_' + index"
                            :name="'first_name_' + index"
                            :placeholder="'نام ' "
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <p v-if="formErrors.personFields[index-1] && formErrors.personFields[index-1].firstName"
                           class="text-red-500 text-xs">{{ formErrors.personFields[index - 1].firstName }}</p>
                      </div>

                      <div class="flex flex-col space-y-1 sm:w-1/4">
                        <input
                            v-model="formFields[index-1].last_name"
                            type="text"
                            :id="'last_name_' + index"
                            :name="'last_name_' + index"
                            :placeholder="'نام خانوادگی ' "
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <p v-if="formErrors.personFields[index-1] && formErrors.personFields[index-1].lastName"
                           class="text-red-500 text-xs">{{ formErrors.personFields[index - 1].lastName }}</p>
                      </div>

                      <div class="flex flex-col space-y-1 sm:w-1/4">
                        <input
                            dir="ltr"
                            v-model="formFields[index-1].id_number"
                            type="number"
                            :id="'id_number_' + index"
                            :name="'id_number_' + index"
                            :placeholder="'شماره شناسنامه '  "
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <p v-if="formErrors.personFields[index-1] && formErrors.personFields[index-1].idNumber"
                           class="text-red-500 text-xs">{{ formErrors.personFields[index - 1].idNumber }}</p>
                      </div>

                      <div class="flex flex-col space-y-1 sm:w-1/4">
                        <input
                            dir="ltr"
                            v-model="formFields[index-1].mobile"
                            type="number"
                            :id="'mobile' + index"
                            :name="'mobile' + index"
                            :placeholder="'موبایل '  "
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <p v-if="formErrors.personFields[index-1] && formErrors.personFields[index-1].mobile"
                           class="text-red-500 text-xs">{{ formErrors.personFields[index - 1].mobile }}</p>
                      </div>

                      <hr class="border-gray-300 my-4">
                    </div>


                    <!-- Plus button -->
                    <div class="flex items-center justify-end ml-4">


                      <button
                          type="button"
                          class="mr-5 flex items-center justify-center w-8 h-8 rounded-full bg-goldlight hover:bg-green-600 text-white"
                          @click="minusPersonCount"
                      >
                        <Icon :name="'dashicons:minus'" class="text-2xl "/>

                      </button>
                      <button
                          type="button"
                          class="flex items-center justify-center w-8 h-8 rounded-full bg-goldlight hover:bg-green-600 text-white"
                          @click="incrementPersonCount"
                      >
                        <Icon :name="'dashicons:plus-alt'" class="text-2xl "/>

                      </button>
                    </div>

                    <!-- Submit Button -->
                    <div class="flex justify-start pl-4 pr-5" dir="ltr">
                      <button
                          type="button"
                          @click="storeRequest"
                          class="inline-flex items-center justify-center w-1/4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
                      >
                        ذخیره
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  tour: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits(['closeModal', 'successCallBack', 'errorCallBack'])
const showModal = ref(false);
const loading = ref(false);
const modal = ref(null);
const number = ref(null);
const interval = ref(null);
const timer = ref("1:59");
const isInvalid = ref(false)
const isOtpInvalid = ref(false)
const hasNumber = ref(false)
const numberRequired = ref(false)
const hasTime = ref(true)
const isLoading = ref(false)
const otpCode = ref(null)
const otpInput = ref()
const verifyBtn = ref('btn-otp-disabled')
import {onClickOutside} from '@vueuse/core'
import {useMainStore} from "~/store";
import {useMyFetch} from "~/composables/useMyFetch";
import {uri} from "~/utils";

const user = useCookie('user')
const isLogin = useCookie('is_login')
const token = useCookie('token')
const store = useMainStore()

const personCount = ref(1);
const formErrors = ref({personFields: []});
const formFields = ref([{
  first_name: user.value.first_name,
  last_name: user.value.last_name,
  id_number: user.value.id_number,
  mobile: user.value.mobile
}]);
// Update the form fields based on the person count
const updateFormFields = () => {

  const currentCount = formFields.value.length;
  const targetCount = personCount.value;

  if (!Number.isInteger(targetCount) || targetCount < 1) {
    personCount.value = currentCount; // Revert to previous value
    return;
  }

  if (currentCount < targetCount) {
    for (let i = currentCount; i < targetCount; i++) {
      formFields.value.push({first_name: '', last_name: '', id_number: '', mobile: ''});
    }
  } else if (currentCount > targetCount) {
    formFields.value.splice(targetCount);
  }
};

function incrementPersonCount() {
  personCount.value++;
}

function minusPersonCount() {
  personCount.value--;
}

// Watch for changes in the person count
watch(personCount, updateFormFields);

onClickOutside(modal, (event) => closeModal())


function closeModal() {
  if (showModal.value === true) {
    showModal.value = false;
    emit('closeModal');
  }
}

function backToMobile() {
  clearInterval(interval.value)
  timer.value = "1:59"
  hasTime.value = true
  otpCode.value = null
  hasNumber.value = false
  handleClearInput()
}

const resendClass = computed(() => {
  if (timer.value === "0:00") {
    return 'resend-active'
  } else {
    return 'resend-disabled'
  }
})

watch(() => props.show, show => {
  showModal.value = show;
});

function handleClearInput() {
  formData.value.clearInput();
}


async function storeRequest() {
  // Reset form errors
  formErrors.value.personFields = [];

  // Check if any person field is empty or contains invalid data
  let hasErrors = false;
  formFields.value.forEach((person, index) => {
    const errors = {};

    // Validate first_name and last_name (no changes from previous code)
    if (!person.first_name) {
      errors.firstName = 'لطفاً نام را وارد کنید';
      hasErrors = true;
    }
    if (!person.last_name) {
      errors.lastName = 'لطفاً نام خانوادگی را وارد کنید';
      hasErrors = true;
    }

    // Validate id_number
    if (!person.id_number) {
      errors.idNumber = 'لطفاً شماره شناسنامه را وارد کنید';
      hasErrors = true;
    } else if (person.id_number.toString().length !== 10) {
      errors.idNumber = 'شماره شناسنامه باید 10 رقمی باشد';
      hasErrors = true;
    }

    // Validate mobile
    if (!person.mobile) {
      errors.mobile = 'لطفاً شماره موبایل را وارد کنید';
      hasErrors = true;
    } else if (person.mobile.toString().length !== 10) {
      errors.mobile = 'شماره موبایل باید 11 رقمی باشد';
      hasErrors = true;
    }

    formErrors.value.personFields[index] = errors;
  });

  // If there are errors, return without submitting the form
  if (hasErrors) {
    return;
  }

  // Continue with form submission logic...


  loading.value = true
  const bodyData = new URLSearchParams({
    'item_slug': props.tour.slug,
    'item_id': props.tour.id,
    'count': personCount.value,
    'information': JSON.stringify(formFields.value),
  })
  const {data, pending, error, refresh} = await useFetchData(
      {
        service: uri.reserve,
        fields: {},
        token: isLogin.value ? token.value : '',
        callBack: () => {
        },
        error: () => {
        },

      },
      {
        method: 'POST',
        body: bodyData,
      })

  if (data.value) {
    emit('successCallBack');
    isLoading.value = false

  }
  if (error.value) {
    emit('errorCallBack');
    isLoading.value = false
    if (error.value.status === 403) {

    }
  }


}
</script>

<style scoped>

.code-inputs div {
  gap: 10px;
}

.shimmer-placeholder {
  background-color: #f2f2f2; /* Shimmer color */
  animation: shimmer 1s infinite linear;
  width: 100%;
  height: 100px; /* Adjust the height as per your component's content */
}

@keyframes shimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}
</style>