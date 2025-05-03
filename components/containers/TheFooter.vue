<template>

<!--  <div class="bg-cover w-full" style="background-image: url('/rezilens/page-banner.png')">-->
<!--    <section>-->

<!--      <div-->
<!--          class="max-w-7xl text-white pt-6 mx-auto px-4 sm:px-6 lg:px-8 md:pr-12 lg:pr-12 xl:pr-12"-->
<!--      >-->
<!--        <div class="grid grid-cols-6">-->
<!--          <div class="md:col-span-3 lg:col-span-3 xl:col-span-3 col-span-6">-->
<!--            <div>-->
<!--              <img src="../../static/rezilens/white-logo-zero.png" alt="rezilens" class="h-20"/>-->
<!--            </div>-->
<!--            <div class="my-3">-->
<!--              <div class="text-sm">-->
<!--                <strong>Address:-->
<!--                </strong>113, SOL Bay, Business Bay, Dubai, UAE-->
<!--                PO Box: 25313-->
<!--                <br/>-->
<!--                <strong>Mobile:</strong> +971 4348 3599-->
<!--                <br/>-->
<!--                <strong>Email:</strong> accounts@rezilens.com-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div-->
<!--              class="md:col-span-2 lg:col-span-2 xl:col-span-2 col-span-6 pl-10 pt-4 md:pt-0 lg:pt-0 xl:pt-0 md:pl-0 lg:pl-0 xl:pl-0">-->
<!--            <div class="grid  grid-cols-2">-->
<!--              <nuxt-link v-for="item in menuItems" :to="item.target" class="pb-5">-->
<!--                {{ item.title }}-->
<!--              </nuxt-link>-->
<!--              <div class="md:hidden lg:hidden xl:hidden">-->
<!--                <a href="https://www.instagram.com/rezilens_info_tech" target="_blank">-->
<!--                  <img src="../../static/insta.png" alt="rezilens">-->
<!--                </a>-->
<!--              </div>-->
<!--              <div class="md:hidden lg:hidden xl:hidden">-->
<!--                <a href="https://www.linkedin.com/company/rezilensinfotech" target="_blank">-->
<!--                  <img src="../../static/link.png" alt="rezilens">-->
<!--                </a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="col-span-1 flex-col dir-rtl md:block lg:block xl:block hidden">-->
<!--            <div class="pb-10">-->
<!--              <a href="https://www.instagram.com/rezilens_info_tech" target="_blank">-->
<!--                <img src="../../static/insta.png" alt="rezilens">-->
<!--              </a>-->
<!--            </div>-->
<!--            <div>-->
<!--              <a href="https://www.linkedin.com/company/rezilensinfotech" target="_blank">-->
<!--                <img src="../../static/link.png" alt="rezilens">-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->
<!--        <div class="text-center pb-2 text-base">-->
<!--          Copyright © 2025. All Rights Reserved for Rezilens-->
<!--        </div>-->

<!--      </div>-->
<!--    </section>-->
<!--  </div>-->



  <footer class="  text-gray-100 pt-16 pb-8" style="background-image: url('/rezilens/page-banner.png')">
    <div class="container mx-auto px-6 lg:px-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- About Column -->
        <div class="col-span-1 md:col-span-2">
          <img src="../../static/rezilens/white-logo-zero.png" alt="rezilens" class="h-20"/>
          <p class="mb-4 text-gray-300">
            We help organizations thrive amid rapid technological, regulatory, and societal change through integrated advisory services.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition">
              <Icon name="fa:linkedin-square" size="1.5em" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition">
              <Icon name="fa:twitter-square" size="1.5em" />
            </a>
          </div>
        </div>

        <!-- Services Column -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-white">Services</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-300 hover:text-white transition">Strategic Foresight</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition">AI & Data Solutions</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition">Cybersecurity Resilience</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition">Change Management</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white transition">ESG Integration</a></li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-white">Contact</h3>
          <address class="not-italic text-gray-50 space-y-2">
            <p class="text-gray-50">113, SOL Bay, Business Bay, Dubai, UAE</p>
            <p class="text-gray-50">PO Box: 25313</p>
            <p class="text-gray-50">Email: <a href="mailto:accounts@rezilens.com" class="hover:text-white transition">accounts@rezilens.com</a></p>
            <p class="text-gray-50">Phone: <a href="tel:+97143483599" class="hover:text-white transition">+971 4348 3599</a></p>
          </address>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-gray-400 text-sm">
             Copyright © 2021 - {{ new Date().getFullYear() }}. All Rights Reserved for Rezilens
          </p>
        </div>
        <div class="flex space-x-6">
          <a href="#" class="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>

</template>

<script setup>

import {menuItems} from "~/constants/config";
</script>