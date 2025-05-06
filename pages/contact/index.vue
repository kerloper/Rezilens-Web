<script setup>

const isLoading = shallowRef(false);
const isDone = shallowRef(false);


const formConfig = {
  "formOptions": {
    "subject": [
      {"key": "gisec-promotion-free-ai-assessment", "value": "GISEC Promotion - Free AI Assessment"},
      {"key": "voucher", "value": "Request a Voucher Code"},
      {"key": "assessment", "value": "Cyber Resilience Assessment"},
      {"key": "penetration", "value": "Penetration Testing"},
      {"key": "demo", "value": "Book a Demo"},
      {"key": "bundled", "value": "Bundled services inquiry"},
      {"key": "other", "value": "Other inquiry"}
    ],
    "framework": [
      {
        "id": 4,
        "title": "NESA",
        "framework_id": 4,
      },
      {
        "id": 3,
        "title": "CIS - Center for Internet Security",
        "framework_id": 3,
      },
    ],
    "fields": {
      "first_name": {
        "label": "First name",
        "type": "text",
        "required": true,
        "placeholder": "Enter your first name"
      },
      "last_name": {
        "label": "Last name",
        "type": "text",
        "required": true,
        "placeholder": "Enter your last name"
      },
      "email": {
        "label": "Email",
        "type": "email",
        "required": true,
        "placeholder": "your.email@example.com"
      },
      "mobile": {
        "label": "Mobile",
        "type": "tel",
        "required": true,
        "placeholder": "+1 (___) ___-____"
      },
      "company_name": {
        "label": "Company Name",
        "type": "text",
        "required": false,
        "placeholder": "Your company name"
      },
      "job_title": {
        "label": "Job Title",
        "type": "text",
        "required": false,
        "placeholder": "Your position"
      },
      "description": {
        "label": "Description",
        "type": "textarea",
        "required": true,
        "placeholder": "Tell us about your inquiry..."
      }
    }
  }
}
const form = ref({
  title: 'rezilens',
  priority: 0,
  subject: '',
  first_name: '',
  last_name: '',
  email: '',
  mobile: '',
  company_name: '',
  job_title: '',
  description: '',
  type: 'rezilens',
  source: 'web-rezilens'
})

const formRef = ref(null)

function resetForm() {
  formRef.value?.reset()
}

const handleSubmit = async () => {
  isLoading.value = true
  const {data, pending, error} = await useFetch('https://crm-api.rezilens.com/admin/content/entity/add', {
    method: 'POST',
    body: form,
  })
  isDone.value = true
  isLoading.value = false
}

</script>

<template>
  <section class="min-h-[80vh]">

    <div class="bg-cover w-full" style="background-image: url('/rezilens/page-banner.png')">
      <section
          class="md:mx-16 lg:mx-16 xl:mx-16 mx-6 pb-10 "
      >
        <div class="grid   gird-cols-1 gap-2 max-w-[1440px] mx-auto">


          <div>
            <!--            <img-->
            <!--                src="../../static/code-slash.png"-->
            <!--                alt="rezilens"-->
            <!--                class="absolute md:left-auto lg:left-auto xl:left-auto left-0"-->
            <!--            >-->
            <div class="text-center pt-2">
              <h1 class="text-white md:text-5xl lg:text-5xl xl:text-5xl text-4xl font-medium" style="line-height:150%">
                Contact Us
              </h1>
              <div class="text-white text-3xl leading-10 mt-6">
                We'd love to hear from you. Whether it's a quick question or a full RFP, our team is here to help.
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>

    <div class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3-2 xl:grid-cols-3 gap-12">

          <div class="col-span-2 skeleton">
            <div class="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
              <div v-if="isDone"  >
                <div>
                  <h2 class="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">Your Request <span class="text-primary">Submitted</span></h2>
                  <p class="p-2 text-lg text-gray-800">
                    A member of our team will be in touch with you shortly to guide you through the next step.
                  </p>
                </div>
              </div>
              <form @submit.prevent="handleSubmit" ref="formRef" class="space-y-6" v-else>
                <!-- Service Type Select -->
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                    <span class="text-red-600 font-semibold">*</span> Select an subject
                  </label>
                  <select
                      v-model="form.subject"
                      class="w-full px-4 py-2 border rounded-md"
                  >
                    <option disabled value="">Select an option</option>
                    <option
                        v-for="(option, index) in formConfig.formOptions.subject"
                        :key="option.key"
                        :value="option"
                    >
                      {{ option.value }}
                    </option>
                  </select>

                </div>

                <div
                    v-show="form.subject?.key==='voucher'||form.subject?.key==='gisec-promotion-free-ai-assessment'"
                >
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                    <span class="text-red-600 font-semibold">*</span> Select an framework
                  </label>
                  <select
                      v-model="form.framework"
                      class="w-full px-4 py-2 border rounded-md"
                  >
                    <option disabled value="">Select an option</option>
                    <option
                        v-for="(option, index) in formConfig.formOptions.framework"
                        :key="option.id"
                        :value="option"
                    >
                      {{ option.title }}
                    </option>
                  </select>

                </div>

                <!-- Dynamic Fields -->
                <div class="grid md:grid-cols-2 gap-6">
                  <!-- Text Inputs -->
                  <div
                      v-for="([fieldName, fieldConfig], index) in Object.entries(formConfig.formOptions.fields)"
                      :key="index"
                      :class="{'md:col-span-2': fieldConfig.type === 'textarea'}"
                  >
                    <label :for="fieldName" class="block text-sm font-medium text-gray-700 mb-2">
                      <span v-if="fieldConfig.required" class="text-red-600 font-semibold">*</span>
                      {{ fieldConfig.label }}
                    </label>

                    <textarea
                        v-if="fieldConfig.type === 'textarea'"
                        :id="fieldName"
                        v-model="form[fieldName]"
                        :placeholder="fieldConfig.placeholder"
                        :required="fieldConfig.required"
                        rows="4"
                        class="w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                    ></textarea>

                    <input
                        v-else
                        :id="fieldName"
                        v-model="form[fieldName]"
                        :type="fieldConfig.type"
                        :placeholder="fieldConfig.placeholder"
                        :required="fieldConfig.required"
                        class="w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-150 ease-in-out"
                    />
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="flex justify-end">
                  <button
                      :disabled="isLoading"
                      type="submit"
                      class="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <span v-if="isLoading" class="text-white">
                     Processing…
                    </span>
                    <span v-else class="text-white">
                     Submit
                    </span>
                    <svg class="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-if="!isLoading"
                         xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>


          <div class="grid gap-12 lg:grid-cols-1">
            <div class="space-y-8">
              <div class="bg-white p-8 rounded-xl shadow-sm h-full flex flex-col">

                <div class=" ">
                  <h3 class="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                  <ul class="space-y-8">
                    <li class="flex items-start">
                      <div class="flex-shrink-0 bg-indigo-100 rounded-lg p-2 mr-4">
                        <svg class="h-6 w-6 text-pink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-sm font-medium text-gray-500">Email</h4>
                        <p class="text-gray-900 mt-1">accounts@rezilens.com</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <div class="flex-shrink-0 bg-indigo-100 rounded-lg p-2 mr-4">
                        <svg class="h-6 w-6 text-pink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-sm font-medium text-gray-500  ">Phone</h4>
                        <p class="text-gray-900">+971 4348 3599</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <div class="flex-shrink-0 bg-indigo-100 rounded-lg p-2 mr-4">
                        <svg class="h-6 w-6 text-pink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-sm font-medium text-gray-500">Address</h4>
                        <p class="text-gray-900 mt-1">113, SOL Bay, Business Bay, Dubai, UAE</p>
                        <p class="text-gray-900 mt-1">PO Box: 25313</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-auto pt-6 border-t border-gray-200">
                  <h4 class="text-sm font-medium text-gray-500 mb-2">Business Hours</h4>
                  <p class="text-gray-900">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                  <p class="text-gray-900">Friday - Saturday: Closed</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

  </section>
</template>

<style scoped>

</style>