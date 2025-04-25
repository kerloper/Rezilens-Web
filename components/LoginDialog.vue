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
        <div
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
                class="relative bg-white rounded-lg   overflow-hidden shadow-xl p-4 lg:p-8 mx-8 sm:mx-0  lg:w-1/2 max-w-lg	max-h-xl"
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
              <button class="absolute top-4 bg-gold right-4 hover:bg-goldlight rounded p-1 transition duration-300"
                      @click="backToMobile" v-if="hasNumber">
                <Icon name="ic:round-arrow-forward" class="text-2xl"/>
              </button>
              <div class=" py-8 sm:px-4 lg:px-16">
                <div>
                  <p class="text-xl text-center font-bold mt-4 dir-rtl">{{ title }}</p>
                  <p class="text-center mt-4 text-slate-500 text-base dir-rtl">{{ info }}</p>
                  <form class="flex flex-col items-center dir-rtl" @submit.prevent="getOtpCode" v-if="!hasNumber">
                    <div class="relative flex flex-col w-full items-center mt-8">
                      <input
                          type="tel"
                          id="userNumber"
                          maxlength="11"
                          v-model="number"
                          @input="sanitizeInput"
                          placeholder="شماره موبایل"
                          class="mt-1 px-2 w-full rounded-md border border-gray-300
                          shadow-sm sm:text-sm py-3 placeholder:px-2 outline-1 outline-blue-500
                          placeholder:text-lg lg:justify-center"

                      />
                      <p class="w-full text-red-400 text-sm mt-1 text-right" v-show="numberRequired">شماره موبایل الزامی
                        میباشد.</p>
                      <p class="w-full text-red-400 text-sm mt-1 text-right" v-show="isInvalid">شماره موبایل صحیح
                        نمیباشد.</p>
                    </div>
                    <div class="flex justify-center items-start gap-1 mt-8 text-sm">
                      <Icon name="mdi:warning-circle-outline" class="pb-1 text-xl"/>
                      <p class=" text-right">استفاده از Rezilens به معنی پذیرش
                        <nuxt-link to="/about-us" @click="closeModal">
                          <span
                              class="cursor-pointer px-1 rounded text-blue-500 hover:bg-sky-50 transition duration-300">قوانین و مقررات </span>
                        </nuxt-link>
                        این سرویس است.
                      </p>
                    </div>
                    <button
                        :class="otpBtn"
                        class="w-full py-3 mt-8 bg-golder hover:bg-gold rounded   text-white" type="submit"
                        :disabled="isLoading">
                      <span v-show="!isLoading" class="text-white"> تایید و دریافت کد</span>
                      <svg v-show="isLoading" class="w-full text-center" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z">
                          <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                                            values="0 12 12;360 12 12"/>
                        </path>
                      </svg>

                    </button>
                  </form>
                  <form class="flex flex-col items-center" @submit.prevent="verifyMobileNumber" v-if="hasNumber">
                    <div class="code-inputs">
                      <VOtpInput
                          ref="otpInput"
                          input-classes=" mt-12  px-2 w-full rounded-md border-gray-200 border border-gray-300
                       shadow-sm sm:text-sm py-3 text-center outline-1 outline-blue-500"
                          separator=""
                          :num-inputs="6"
                          :should-auto-focus="true"
                          :is-input-num="true"
                          inputmode="numeric"
                          @on-change="handleOnChange"
                          @on-complete="handleOnComplete"
                      />
                    </div>
                    <p class="w-full text-red-400 text-xs mt-1 text-right" v-show="isOtpInvalid">
                      کد ورود اشتباه است، لطفا مجددا تلاش نمایید
                    </p>
                    <div class="flex justify-between w-full  items-center gap-1 mt-8 text-sm">
                      <div :class="resendClass" @click="resendCode">
                        ارسال مجدد کد
                        <Icon name="ic:round-refresh" class=" text-xl  "/>
                      </div>
                      <span class="text-blue-500">{{ timer }}</span>
                    </div>
                    <button
                        :class="verifyBtn"
                        class="w-full py-3 mt-8 bg-gold rounded text-white" type="submit" :disabled="isLoading">
                      <span v-show="!isLoading" class="text-white"> تایید و ادامه</span>
                      <svg v-show="isLoading" class="w-full text-center" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z">
                          <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                                            values="0 12 12;360 12 12"/>
                        </path>
                      </svg>
                    </button>
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
import VOtpInput from "vue3-otp-input";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['closeModal', 'successCallBack'])
const showModal = ref(false);
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

onClickOutside(modal, (event) => closeModal())


const title = computed(() => {
  if (hasNumber.value) {
    return "کد تایید را وارد کنید"
  }
  return "ورود یا ثبت‌نام"
})
const info = computed(() => {
  if (hasNumber.value) {
    return ` کد شش رقمی به شماره موبایل ${number.value} ارسال شد.`
  }
  return "برای ادامه شماره موبایل خود را وارد کنید."
})

function closeModal() {
  if (showModal.value === true) {
    showModal.value = false;
    emit('closeModal');
  }
}

function sanitizeInput() {
  number.value = number.value.replace(/[^0-9.-]/g, '');
  if (number.value.length === 0) {
    numberRequired.value = true
    isInvalid.value = false
  } else if (number.value.length < 11 || number.value[0] !== '0') {
    numberRequired.value = false
    isInvalid.value = true
  } else {
    isInvalid.value = false
    numberRequired.value = false
  }
}

function countdown() {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    timer.value = timer.value.split(':');
    let minutes = timer.value[0];
    let seconds = timer.value[1];
    seconds -= 1;
    if (minutes < 0) return;
    else if (seconds < 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    } else if (seconds < 10 && seconds.length != 2) seconds = '0' + seconds;
    timer.value = (minutes + ':' + seconds);
    if (minutes == 0 && seconds == 0) {
      hasTime.value = false
      clearInterval(interval.value);
    }
  }, 1000);
}

function resendCode() {
  if (!hasTime.value) {
    hasTime.value = true
    timer.value = "1:59"
    getOtpCode()
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
const otpBtn = computed(() => {
  if (number.value && number.value[0] === '0' && number.value.length === 11) {
    return 'btn-otp-active'
  }
  return 'btn-otp-disabled'

})

watch(() => props.show, show => {
  showModal.value = show;
});

async function getOtpCode() {
  if (number.value && number.value[0] === '0' && number.value.length === 11) {
    isLoading.value = true
    const phoneNumber = "+98" + number.value.substring(1)
    const bodyData = new URLSearchParams({
      'mobile': phoneNumber,
      'country': 'IR',
    })

    const {data, pending, error, refresh} = await useFetchData({
      service: uri.otp,
      fields: {},
      callBack: () => {
      },
      error: () => {
      },
    }, {
      method: 'POST',
      body: bodyData,
    })
    console.log("end");
    console.log(data);

    if (data.value) {

      console.log("ok");
      isLoading.value = false
      hasNumber.value = true
      countdown()
    }
    if (error.value) {

      console.log("oops");
      isLoading.value = false
      hasNumber.value = false
    }

    console.log("fine");
  } else {
    hasNumber.value = false
  }

}

function handleOnComplete(value) {
  // console.log('OTP completed: ', value);
  otpCode.value = value
}

function handleOnChange(value) {
  // console.log('OTP changed: ', value);
  isOtpInvalid.value = false
  if (value && value.length === 6 && hasTime.value) {
    verifyBtn.value = 'btn-otp-active'
  } else {
    verifyBtn.value = 'btn-otp-disabled'
  }


}

function handleClearInput() {
  otpInput.value.clearInput();
}

const user = useCookie('user', {
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
})
const isLogin = useCookie('is_login', {
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
})
const token = useCookie('token', {
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
})
const store = useMainStore()

async function verifyMobileNumber() {
  if (otpCode.value && otpCode.value.length === 6 && hasTime.value) {
    isLoading.value = true
    const phoneNumber = "+98" + number.value.substring(1)
    const bodyData = new URLSearchParams({
      'mobile': phoneNumber,
      'country': 'IR',
      'otp': otpCode.value,
    })

    // const {data, pending, error, refresh} = await useMyFetch('user/authentication/mobile/verify', {
    //   method: 'post',
    //   body: bodyData
    // })

    const {data, pending, error, refresh} = await useFetchData({
      service: uri.verify,
      fields: {},
      callBack: () => {
      },
      error: () => {
      },
    }, {
      method: 'POST',
      body: bodyData,
    })

    if (data.value) {
      isLoading.value = false
      user.value = data.value.data
      token.value = user.value.access_token
      emit('successCallBack');
      isLogin.value = true
      isOtpInvalid.value = false
      closeModal()
      number.value = null
      backToMobile()
    }
    if (error.value) {
      isLoading.value = false
      if (error.value.status === 403) {
        isOtpInvalid.value = true
      }
    }

  }

}
</script>

<style scoped>
.btn-otp-disabled {
  @apply bg-lighter pointer-events-none cursor-not-allowed
}

.btn-otp-active {
  @apply bg-golder cursor-pointer hover:bg-gold  pointer-events-auto
  transition
  duration-300
}


.otp-input {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 40px;
  border: 1px solid gray;
}

.code-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

}

.code-inputs div {
  gap: 10px;
}

.resend-active {
  @apply pointer-events-auto cursor-pointer  py-1  rounded text-blue-500 hover:bg-sky-50 transition duration-300

}

.resend-disabled {
  @apply pointer-events-none text-gray-400
}

</style>