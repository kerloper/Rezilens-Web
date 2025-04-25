<template>
  <div>
    <section
        class="md:mx-16 lg:mx-16 xl:mx-16 mx-6 pb-10 "
    >
      <div class="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gird-cols-1 gap-2 max-w-[1440px] mx-auto">

        <div class="block sm:hidden md:hidden lg:hidden xl:hidden">
          <div>
            <img
                src="../static/rezilens/banner-1.png"
                alt="rezilens"
                class="w-full scale-110"
            >
          </div>
        </div>
        <div>
          <img
              src="../static/code-slash.png"
              alt="rezilens"
              class="absolute md:left-auto lg:left-auto xl:left-auto left-0"
          >
          <div class="md:pt-20 lg:pt-20 xl:pt-20">
            <h1 class="text-white md:text-5xl lg:text-5xl xl:text-5xl text-4xl font-medium" style="line-height:150%">
              Rezilens Affordable Penetration Testing
            </h1>
            <div class="text-white text-xl text-justify mt-10">
              Fully Project-Managed Penetration Tests & Accompanying Reporting
            </div>
          </div>
        </div>
        <div class="hidden md:block lg:block xl:block">
          <div class="px-32 h-[460px] overflow-hidden">
            <img
                src="../static/rezilens/logo-square.png"
                alt="rezilens"
                class="w-full scale-110"
            >
          </div>
        </div>

      </div>
    </section>

    <section
        class="bg-white"
    >
      <div class="relative w-full max-w-[1440px] mx-auto overflow-hidden">
        <div class="absolute">
          <img src="../static/back-01.png" class=" w-full mb-16" alt="rezilens">
        </div>
        <div class=" ">
          <div
              class="grid grid-cols-8 gap-2 md:p-16 lg:p-16 xl:p-16 p-6 relative"
          >
          
            <div
                class="col-span-8 mt-8"
            >
              <h1
                  class="text-5xl text-[#211952]"
              >
                Rezilens
              </h1>
              <p class="text-justify mt-6 text-base leading-9 text-[#211952]">
                Rezilens is a dynamic Queensland-based cybersecurity company which provides AI-enabled web-based
                cybersecurity resilience assessments and technical vulnerability assessments to Australian companies and
                organisations. Rezilens’ success is driven by its innovative technological edge. We’re looking for a
                talented and experienced Sales Lead to take our operations to the next level by extending the sales
                opportunities for our product offerings.
              </p>
              <p class="text-justify mt-6 text-base leading-9 text-[#211952]">
                The Sales Lead is responsible for seeking out and forming partnerships with new partners and resellers
                (e.g. IT MSP’s) who can deliver Rezilens’ web-based GRC and vulnerability assessment platforms to end
                customers. Direct sales to end users (such as Government entities or small/medium sized enterprises) is
                within the scope of this job. The Sales Lead’s responsibilities also include maintaining and deepening
                the company’s relationship with its existing client base.
              </p>
              <p class="text-justify mt-6 text-base leading-9 text-[#211952]">
                In this role, you’ll need to target markets which would be the most receptive to Rezilens’ product
                offerings. Building a relationship with the stakeholders at end user or partner companies, you’ll be
                expected to form and maintain long term relationships that can lead to sales for the company.
              </p>
              <p class="text-justify mt-6 text-base leading-9 text-[#211952]">
                The compensation package includes a base salary and an uncapped commission structure, with an earning
                potential well in excess of $130,000.
              </p>
              <div>
                <button
                    class="bg-[#57CCE0] text-[#211952] text-sm py-1 px-3 mt-4 rounded-md"
                >
                  <nuxt-link to="/about-us">
                    Read More
                  </nuxt-link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
        class="pd:mx-16 pg:mx-16 xl:px-16 px-6 pb-10 max-w-[1440px] mx-auto"
    >
      <div
          class="grid grid-cols-6 gap-2"
      >
        <div class="col-span-4">
          <h1
              class="md:text-5xl xl:text-5xl lg:text-5xl text-3xl text-white pt-3"
          >
            Why Choose Us
          </h1>
        </div>
<!--        <div class="dir-rtl pt-4 col-span-2">-->
<!--          <nuxt-link to="/services">-->
<!--            <img src="../static/open.png" alt="rezilens"/>-->
<!--          </nuxt-link>-->
<!--        </div>-->
      </div>
      <div
          class="grid grid-cols-2 gap-2 py-5"
      >
        <div class="md:col-span-1 lg:col-span-1 xl:col-span-1 col-span-2">
          <img src="../static/rezilens/logo-square.png" alt="rezilens"/>
        </div>
        <div class="md:pl-10 lg:pl-10 xl:pl-10  pt-4 md:col-span-1 lg:col-span-1 xl:col-span-1 col-span-2">
          <nuxt-link class="cursor-pointer" v-for="service in services" :to="service.slug">
            <div class="mb-4">
              <div class="flex">
                <div class="w-8 pt-1">
                  <img src="../static/point.png" alt="rezilens"/>
                </div>
                <div class="w-full text-xl text-white">
                  {{ service.title }}
                </div>
              </div>
              <div class="text-gray-300 my-2 leading-7">
                {{service.abstract}}
              </div>
            </div>

          </nuxt-link>
        </div>
        <div
            class="col-span-2 text-justify text-white pt-4 text-xl"
        >
          At Rezilens, we empower organizations to build resilience with confidence. Our platform is designed to
          streamline cybersecurity management, combining affordability, ease of use, and comprehensive risk coverage —
          all from a single, intuitive dashboard.
        </div>
      </div>

    </section>

    <section
        class=" bg-[#ECFCFF]"
    >

      <div class="relative w-full max-w-[1440px] mx-auto md:p-16 lg:p-16 xl:p-16 p-6">
        <div
            class="grid grid-cols-6 gap-2"
        >
          <div class="col-span-4">
            <h1
                class="md:text-5xl xl:text-5xl lg:text-5xl text-3xl pt-3 text-[#211952]"
            >
              Main Features
            </h1>
          </div>
<!--          <div class="dir-rtl pt-4 col-span-2"> -->
<!--            <nuxt-link to="/solutions">-->
<!--              <img src="../static/open-blue.png" alt="rezilens"/>-->
<!--            </nuxt-link>-->
<!--          </div>-->
        </div>
        <div
            class="grid grid-cols-3 gap-2 py-6"
        >
          <div class="md:hidden lg:hidden xl:hidden col-span-2">
            <img src="../static/solutions.png" alt="rezilens"/>
          </div>
          <div
              class="md:pr-24 lg:pr-24 xl:pr-24 md:pt-16 lg:pt-16 xl:pt-16  pt-0 md:col-span-1 lg:col-span-1 xl:col-span-1 col-span-3">
            <nuxt-link class="flex mb-4 cursor-pointer" v-for="feature in features" to="/">
              <div class="w-16 pt-1">
                <img src="../static/point-sky.png" alt="rezilens"/>
              </div>
              <div class="w-96 text-xl text-[#211952]">
                {{ feature.title }}
              </div>
              <div class="w-full dir-rtl">
<!--                <img src="../static/arrow-sky.png" alt="rezilens"/>-->
              </div>
            </nuxt-link>
          </div>
          <div class="md:block lg:block xl:block hidden col-span-2 text-[#211952] pt-[62px] leading-8 text-xl">
            Our cybersecurity platform offers an advanced, affordable, and intuitive solution powered by AI and machine learning. Tailored to meet the evolving security needs of businesses, it ensures simplicity with no technical expertise required. The platform provides bespoke remediations and actionable insights based on each organization’s unique security posture. With a focus on transparency, it delivers an intuitive portal for real-time tracking of cyber maturity, empowering managers and executives with detailed insights. Fully white-labeled, it can be seamlessly integrated into your offerings, enabling you to deliver a personalized cybersecurity service to your clients.
          </div>

        </div>

      </div>
    </section>

    <section
        class="md:px-16 lg:px-16 xl:px-16 px-6 mt-6 md:pb-0 lg:pb-0 xl:pb-0 pb-6 max-w-[1440px] mx-auto"
    >
      <div
          class="grid grid-cols-11 gap-2 "
      >
        <div class="md:col-span-5 lg:col-span-5 xl:col-span-5 col-span-11 ">
          <img src="../static/lump.png" alt="rezilens"/>
        </div>
        <div class="md:col-span-6 lg:col-span-6 xl:col-span-6 col-span-11 md:pt-12 lg:pt-12 xl:pt-12 pt-0">
          <div class="md:pt-16 xl:pt-16 lg:pt-16 pt-0">
            <h1 class="text-white md:text-3xl font-medium leading-10 lg:text-3xl xl:text-3xl text-3xl">
              Do You Have An Awesome Project In Your Mind?
            </h1>
            <div
                class="text-white md:text-xl xl:text-xl lg:text-xl text-base text-justify md:mt-10 xl:mt-10 lg:mt-10 md:mb-0 xl:mb-0 lg:mb-0 mt-5 ">
              Just let us know ... we will make it for you !
            </div>
            <div>
              <nuxt-link to="/contact-us">
                <button
                    class="bg-[#57CCE0] text-[#211952] text-sm py-1 px-3 mt-10 rounded-md"
                >
                  Get in touch
                </button>
              </nuxt-link>
            </div>

          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {fetcher, responder, uri} from "~/utils";
import BaseErrorComponent from "~/components/error/BaseErrorComponent.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import ComponentBoxProduct1 from "~/components/box/ComponentBoxProduct1.vue";
import ComponentBoxBlog1 from "~/components/box/ComponentBoxBlog1.vue";
import ComponentBoxBlog2 from "~/components/box/ComponentBoxBlog2.vue";
import ComponentBoxBlog3 from "~/components/box/ComponentBoxBlog3.vue"; // Import Swiper styles
// Create a ref for the Swiper instance

///SEO
useSeoMeta({
  title: 'Rezilens',
  ogTitle: 'Rezilens',
  description: '',
  ogDescription: '',
  ogImage: '',
  twitterCard: 'summary_large_image',
})


const services = ref([
  {
    title: "Cost-Efficient",
    image: "",
    abstract: "An affordable yet feature-rich SaaS tool that improves transparency and decreases cybersecurity costs.",
    description: "",
    slug: "/"
  },
  {
    title: "Easy to Use",
    image: "",
    abstract: "Manage yours and your clients’ cybersecurity journeys with minimal technical experience required.",
    description: "",
    slug: "/"
  },
  {
    title: "Two Birds With One Stone",
    image: "",
    abstract: "Identify and reduce both your technical and non-technical risks through a single pane of glass.",
    description: "",
    slug: "/"
  },
])
const features = ref([ 
  {
    title: "SaaS Based",
    abstract: "A cybersecurity platform designed with SaaS architecture, backed by AI and machine learning expertise."
  },
  {
    title: "Affordable",
    abstract: "More cost-effective and faster than many traditional manual processes in the cybersecurity industry."
  },
  {
    title: "Intuitive",
    abstract: "User-friendly interface requiring no technical expertise, with clear insights for senior teams."
  },
  {
    title: "Bespoke",
    abstract: "Customized remediations and improvement suggestions based on unique security posture and cyber maturity."
  },
  {
    title: "Transparent",
    abstract: "Detailed and granular visibility into client security postures through an intuitive portal."
  },
  {
    title: "White Labeled",
    abstract: "Full white-labeling options to promote the platform as your own with customized branding."
  }
])


</script>
