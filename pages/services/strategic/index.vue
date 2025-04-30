<script setup lang="ts">

</script>

<template>
  <section class="min-h-[80vh]">

    <div class="bg-cover w-full" style="background-image: url('/rezilens/page-banner.png')">
      <section
          class="md:mx-16 lg:mx-16 xl:mx-16 mx-6 pb-10 "
      >
        <div class="grid gird-cols-1 gap-2 max-w-[1440px] mx-auto">
          <div>
            <img
                src="../../../static/code-slash.png"
                alt="rezilens"
                class="absolute md:left-auto lg:left-auto xl:left-auto left-0"
            >
            <div class="text-center pt-2">
              <h1 class="text-white md:text-5xl lg:text-5xl xl:text-5xl text-4xl font-medium" style="line-height:150%">
                Strategic Foresight
              </h1>
              <div class="text-white text-3xl leading-10 mt-6">
                Anticipate. Plan. Thrive.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="bg-white p-6 transition-all duration-300 border-l-4">

      <!-- Key Services -->
      <div class="services-section mb-5">
        <h3 class="text-gray-800 font-bold mb-3 flex items-center">
          <svg class="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          Key Services:
        </h3>
        <ul class="space-y-2 pl-7">
          <li class="flex items-start">
            <span class="bullet-indicator text-indigo-500 mr-2">●</span>
            <span class="text-gray-700">AI Readiness Assessment</span>
          </li>
          <li class="flex items-start">
            <span class="bullet-indicator text-indigo-500 mr-2">●</span>
            <span class="text-gray-700">Cybersecurity Maturity Assessment</span>
          </li>
          <li class="flex items-start">
            <span class="bullet-indicator text-indigo-500 mr-2">●</span>
            <span class="text-gray-700">ESG Roadmapping</span>
          </li>
          <li class="flex items-start">
            <span class="bullet-indicator text-indigo-500 mr-2">●</span>
            <span class="text-gray-700">Technology Investment Planning</span>
          </li>
        </ul>
      </div>

      <!-- Outcomes -->
      <div class="outcomes-section">
        <h3 class="text-gray-800 font-bold mb-3 flex items-center">
          <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Outcomes:
        </h3>
        <ul class="space-y-2 pl-7">
          <li class="flex items-start">
            <span class="bullet-indicator text-green-500 mr-2">✓</span>
            <span class="text-gray-700">Future-ready strategic plans</span>
          </li>
          <li class="flex items-start">
            <span class="bullet-indicator text-green-500 mr-2">✓</span>
            <span class="text-gray-700">Prioritized technology and risk management roadmaps</span>
          </li>
          <li class="flex items-start">
            <span class="bullet-indicator text-green-500 mr-2">✓</span>
            <span class="text-gray-700">Alignment with long-term ESG goals</span>
          </li>
        </ul>
      </div>
    </div>

  </section>
</template>


<style scoped>
.pillar-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pillar-card:hover {
  transform: translateY(2px);
}

.bullet-indicator {
  font-size: 1.2em;
  line-height: 1.2;
}
</style>