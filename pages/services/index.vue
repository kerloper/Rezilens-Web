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
                Services
              </h1>
              <div class="text-white text-3xl leading-10 mt-6">
                Our services are organized into four strategic pillars, each representing a core competency that drives
                resilient, responsible growth.
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>

    <div class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div class="max-w-7xl mx-auto">

        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Four Pillars</h2>
        </div>

        <!-- Pillars Grid -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          <!-- Pillar 1 -->
          <nuxt-link to="/services/strategic">
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Strategic Foresight</h3>
              <p class="text-indigo-600 font-medium mb-4">Anticipate. Plan. Thrive.</p>

              <div class="mb-4">
                <h4 class="font-semibold text-gray-800 mb-2">Key Services:</h4>
                <ul class="space-y-1 pl-5 list-disc text-gray-600">
                  <li>AI Readiness Assessment</li>
                  <li>Cybersecurity Maturity Assessment</li>
                  <li>ESG Roadmapping</li>
                  <li>Technology Investment Planning</li>
                </ul>
              </div>

            </div>
          </nuxt-link>
          <!-- Pillar 2 -->

          <nuxt-link to="/services/intelligent">
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Intelligent Solutions (AI & Data)</h3>
              <p class="text-blue-600 font-medium mb-4">From Insight to Innovation</p>

              <div class="mb-4">
                <h4 class="font-semibold text-gray-800 mb-2">Key Services:</h4>
                <ul class="space-y-1 pl-5 list-disc text-gray-600">
                  <li>AI Use Case Discovery</li>
                  <li>Custom AI Development</li>
                  <li>AI System Integration</li>
                  <li>Data Strategy & Optimization</li>
                </ul>
              </div>
            </div>
          </nuxt-link>

          <!-- Pillar 3 -->
          <nuxt-link to="/services/cybersecurity">
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Trust & Resilience (Cybersecurity & Risk)</h3>
              <p class="text-green-600 font-medium mb-4">Secure. Compliant. Trusted.</p>

              <div class="mb-4">
                <h4 class="font-semibold text-gray-800 mb-2">Key Services:</h4>
                <ul class="space-y-1 pl-5 list-disc text-gray-600">
                  <li>Cybersecurity Implementation</li>
                  <li>Privacy Program Development</li>
                  <li>ESG Metrics & Reporting</li>
                  <li>Regulatory Compliance Support</li>
                </ul>
              </div>

            </div>
          </nuxt-link>

          <!-- Pillar 4 -->
          <nuxt-link to="/services/esg">
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Adaptive Transformation (Change Management & ESG)</h3>
            <p class="text-purple-600 font-medium mb-4">Empowering People and Systems</p>

            <div class="mb-4">
              <h4 class="font-semibold text-gray-800 mb-2">Key Services:</h4>
              <ul class="space-y-1 pl-5 list-disc text-gray-600">
                <li>Change Readiness Assessment</li>
                <li>Cultural Transformation Planning</li>
                <li>Skills Gap Analysis</li>
                <li>Transformation Metrics & Reporting</li>
              </ul>
            </div>
          </div>
          </nuxt-link>

        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>

</style>