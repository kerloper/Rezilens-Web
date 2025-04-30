<template>

  <div class="bg-cover w-full" style="background-image: url('/rezilens/page-banner.png')">
    <section>

      <div
          class="md:px-16 lg:px-16 xl:px-16 px-6 text-white pt-6 max-w-[1440px] mx-auto"
      >



        <div class="grid grid-cols-6">
          <div class="md:col-span-3 lg:col-span-3 xl:col-span-3 col-span-6">
            <div>
              <img src="../../static/rezilens/white-logo-zero.png" alt="rezilens" class="h-20"/>
            </div>
            <div class="    my-3">
              <div class="text-sm">
                <strong>Address:
                </strong>113, SOL Bay, Business Bay, Dubai, UAE
                PO Box: 25313
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
        <div class="text-center pb-2 text-base">
          Copyright © 2025. All Rights Reserved for Rezilens
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
const menuItems = ref( [
      {
        "title": "About Us",
        "target": "/",
        "subitems": [
          {
            "title": "Firm story & mission",
            "target": "/"
          },
          {
            "title": "Leadership team bios",
            "target": "/"
          },
          {
            "title": "Core values & differentiators",
            "target": "/"
          }
        ]
      },
      {
        "title": "Services",
        "target": "/",
        "subitems": [
          {
            "title": "Strategic Foresight",
            "target": "/"
          },
          {
            "title": "Intelligent Solutions (AI & Data)",
            "target": "/"
          },
          {
            "title": "Trust & Resilience (Cybersecurity & Risk)",
            "target": "/"
          },
          {
            "title": "Adaptive Transformation (Change Management & ESG)",
            "target": "/"
          }
        ]
      },
      {
        "title": "Industries",
        "target": "/"
      },
      {
        "title": "Resources",
        "target": "/",
        "subitems": [
          {
            "title": "Blog posts",
            "target": "/"
          },
          {
            "title": "Reports",
            "target": "/"
          },
          {
            "title": "News & Events",
            "target": "/"
          }
        ]
      },
      {
        "title": "Careers",
        "target": "/"
      },
      {
        "title": "Contact",
        "description": "Inquiry forms, office locations & direct-reach information.",
        "target": "/"
      }
    ]
)
</script>