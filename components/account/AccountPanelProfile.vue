<template>
  <div class="max-w-md mx-auto">
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
      <p class="mt-5 text-sm text-indigo-600">بارگذاری...</p>
    </div>
    <div v-else>


      <form @submit.prevent="submitForm" class="space-y-6 mt-5 md:w-96 lg:w-96 lx:w-96 w-full">
        <div>
          <label for="first_name" class="block text-sm font-medium text-gray-700">نام</label>
          <input
              v-model="formData.first_name"
              type="text"
              id="first_name"
              name="first_name"
              autocomplete="given-name"
              class="border w-full p-2 rounded"
          >
          <p
              v-if="isInvalid('first_name')"
              class="text-red-500"
          >
            لطفاً نام را وارد کنید
          </p>
        </div>
        <div>
          <label for="last_name" class="block text-sm font-medium text-gray-700">نام خانوادگی</label>
          <input
              v-model="formData.last_name"
              type="text" id="last_name"
              name="last_name"
              autocomplete="family-name"
              class="border w-full p-2 rounded"
          >
          <p
              v-if="isInvalid('last_name')"
              class="text-red-500"
          >
            لطفاً نام خانوادگی را وارد کنید
          </p>
        </div>
        <div>
          <label for="birthdate" class="block text-sm font-medium text-gray-700">تاریخ تولد</label>
          <input
              v-model="formData.birthdate"
              type="date"
              id="birthdate"
              name="birthdate"
              class="border w-full p-2 rounded"
          >
          <p v-if="isInvalid('birthdate')" class="text-red-500">
            لطفاً تاریخ تولد را وارد کنید
          </p>
        </div>
        <div>
          <button type="submit"
                  class="inline-flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gold hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            ذخیره
          </button>
        </div>
      </form>
    </div>
    <dialog v-if="showSuccessDialog" class="dialog-overlay">
      <div class="dialog-box">
        <p>به روز رسانی اطلاعات با موفقیت انجام شد.</p>
        <button @click="closeDialog" class="dialog-button">بستن</button>
      </div>
    </dialog>
    <dialog v-if="showErrorDialog" class="dialog-overlay">
      <div class="dialog-box">
        <p>لطفاً تمامی فیلدها را پر کنید</p>
        <button @click="closeErrorDialog" class="dialog-button">بستن</button>
      </div>
    </dialog>
    <dialog v-if="showErrorDialog" class="dialog-overlay">
      <div class="dialog-box">
        <p>{{ errorMessage }}</p>
        <button @click="closeErrorDialog" class="dialog-button">بستن</button>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { uri } from "~/utils";
import { useFetchData } from "~/composables/useFetchData";
// import PersianDatePicker from 'vue3-persian-datetime-picker'

const user = useCookie('user');
const token = useCookie('token');
const isLogin = useCookie('is_login');
const formData = ref({
  first_name: user.value.first_name,
  last_name: user.value.last_name,
  birthdate: user.value.birthdate,
  // id_number: user.value.id_number,
});

const loading = ref(false);
const showSuccessDialog = ref(false);
const showErrorDialog = ref(false);
const errorMessage = ref('');

const closeErrorDialog = () => {
  showErrorDialog.value = false;
  errorMessage.value = '';
};

const submitForm = async () => {
  if (!validateForm()) {

    // showErrorDialog.value = true;
    return;
  }

  loading.value = true;

  const bodyData = new URLSearchParams({
    'first_name': formData.value.first_name,
    'last_name': formData.value.last_name,
    'birthdate': formData.value.birthdate,
    // 'id_number': formData.value.id_number,
  });

  try {
    const { data, error } = await useFetchData(
        {
          service: uri.update_profile,
          fields: {},
          token: isLogin.value ? token.value : '',
          callBack: () => {},
          error: () => {},
        },
        {
          method: 'POST',
          body: bodyData,
        }
    );

    if (data.value) {
      user.value = data.value.data;
      console.log(data.value.data);
      loading.value = false;
      showSuccessDialog.value = true;
    }

    if (error.value) {
      loading.value = false;
      showErrorDialog.value = true;
      errorMessage.value = error.value.message;
    }
  } catch (error) {
    loading.value = false;
    showErrorDialog.value = true;
    errorMessage.value = 'خطایی رخ داده است. لطفاً دوباره امتحان کنید';
  }
};

const validateForm = () => {
  for (const field in formData.value) {
    if (field !== 'id_number' && (!formData.value[field] || !formData.value[field].trim())) {
      return false;
    }
  }
  return true;
};

const isInvalid = (field) => {
  return (
      !formData.value[field] ||
      (field !== 'id_number' && !formData.value[field].trim())
  );
};

const closeDialog = () => {
  showSuccessDialog.value = false;
};

</script>


<style>
/* Add custom styles as needed */
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-box {
  background-color: #fff;
  padding: 20px;
  max-width: 400px;
  text-align: center;
}

.dialog-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
