<script setup lang="ts">

</script>

<template>
  <section class="min-h-[80vh]">

    <div class="bg-cover w-full" style="background-image: url('/rezilens/page-banner.png')">
      <section
          class="md:mx-16 lg:mx-16 xl:mx-16 mx-6 pb-10 "
      >
        <div class="grid   gird-cols-1 gap-2 max-w-[1440px] mx-auto">


          <div>
            <img
                src="../../static/code-slash.png"
                alt="rezilens"
                class="absolute md:left-auto lg:left-auto xl:left-auto left-0"
            >
            <div class="text-center pt-2">
              <h1 class="text-white md:text-5xl lg:text-5xl xl:text-5xl text-4xl font-medium" style="line-height:150%">
                Industry Partnerships
              </h1>
              <div class="text-white text-3xl leading-10 mt-6">
                We partner with leaders across diverse sectors to deliver tailored solutions that address industry-specific challenges
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>

    <div class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">

        <!-- Industries Grid -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <!-- Financial Services -->
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Financial Services</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">AI-driven risk models</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Fraud detection</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Digital banking strategies</span>
              </li>
            </ul>
          </div>

          <!-- Energy & Utilities -->
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Energy & Utilities</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Carbon accounting</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Grid resilience</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Energy-market analytics</span>
              </li>
            </ul>
          </div>

          <!-- Technology & Software -->
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Technology & Software</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Cloud-native AI systems</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Secure DevOps</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Data-platform optimization</span>
              </li>
            </ul>
          </div>

          <!-- Manufacturing & Supply Chain -->
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Manufacturing & Supply Chain</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Smart factories</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">IoT security</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Process automation</span>
              </li>
            </ul>
          </div>

          <!-- Healthcare & Life Sciences -->
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-red-500">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Healthcare & Life Sciences</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Data privacy</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">AI diagnostics</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Compliance with HIPAA/GDPR</span>
              </li>
            </ul>
          </div>

          <!-- Government & Public Sector -->
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-500">
            <h3 class="text-xl font-bold text-gray-900 mb-3">Government & Public Sector</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Citizen services modernization</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Cybersecurity frameworks</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="text-gray-700">Policy guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<style scoped>

</style>