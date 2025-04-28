<template>

  <div class="bg-cover w-full" style="background-image: url('/rezilens/page-banner.png')">
    <section>

      <div
          class="border-t-2 border-[#F5F5F5] md:px-16 lg:px-16 xl:px-16 px-6 text-white pt-6 max-w-[1440px] mx-auto"
      >

        <div>
          <img src="../../static/rezilens/Logo-Main.png" alt="rezilens" class="h-20"/>
        </div>

        <div class="grid grid-cols-6">

          <div class="md:col-span-3 lg:col-span-3 xl:col-span-3 col-span-6">
            <div class="  pl-2 my-3">
              <div class="text-sm">
                <strong>Address:
                </strong>Meydan Free Zone, Meydan Hotel, M Floor, No.1109
                <br/>
                <strong>Mobile:</strong> +971 4348 3599
                <br/>
                <strong>Email:</strong> accounts@rezilens.com

              </div>
            </div>
          </div>

          <div
              class="md:col-span-2 lg:col-span-2 xl:col-span-2 col-span-6 pl-10 pt-4 md:pt-0 lg:pt-0 xl:pt-0 md:pl-0 lg:pl-0 xl:pl-0">
            <div class="grid  grid-cols-2">
              <nuxt-link v-for="item in menuItems" :to="item.target" class="pb-5">
                {{ item.title }}
              </nuxt-link>
              <div class="md:hidden lg:hidden xl:hidden">
                <a href="https://www.instagram.com/rezilens_info_tech" target="_blank">
                  <img src="../../static/insta.png" alt="rezilens">
                </a>
              </div>
              <div class="md:hidden lg:hidden xl:hidden">
                <a href="https://www.linkedin.com/company/rezilensinfotech" target="_blank">
                  <img src="../../static/link.png" alt="rezilens">
                </a>
              </div>
            </div>
          </div>

          <div class="col-span-1 flex-col dir-rtl md:block lg:block xl:block hidden">
            <div class="pb-10">
              <a href="https://www.instagram.com/rezilens_info_tech" target="_blank">
                <img src="../../static/insta.png" alt="rezilens">
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/rezilensinfotech" target="_blank">
                <img src="../../static/link.png" alt="rezilens">
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  </div>
</template>

<script setup>

const menuItems = ref([
  {
    title: "Home",
    target: "/",
  },
  {
    title: "Services",
    target: "/services",
  },
  {
    title: "Solutions",
    target: "/solutions",
  },
  {
    title: "Blog",
    target: "/blog",
  },
  {
    title: "About Us",
    target: "/about-us",
  },
  {
    title: "Contact Us",
    target: "/contact-us",
  },
])
</script>