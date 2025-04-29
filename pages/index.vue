<template>
  <div>
    <div class="bg-cover w-full" style="background-image: url('/rezilens/page-banner.png')">
      <section
          class="md:mx-16 lg:mx-16 xl:mx-16 mx-6 pb-10 "
      >
        <div class="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gird-cols-1 gap-2 max-w-[1440px] mx-auto">

          <div class="block sm:hidden md:hidden lg:hidden xl:hidden">
            <div>
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
                Rezilens
              </h1>
              <div class="text-white text-3xl leading-10 mt-6">
                Empowering organizations through an integrated approach to AI, cybersecurity, ESG and change management.
              </div>
            </div>
          </div>
          <div class="hidden md:block lg:block xl:block">
            <div class="px-32 pt-28 h-[460px] overflow-hidden">
              <img
                  src="../static/rezilens/web.png"
                  alt="rezilens"
                  class="w-full scale-110"
              >
            </div>
          </div>

        </div>
      </section>
    </div>


    <section
        class="bg-white"
    >
      <div class="relative w-full max-w-[1440px] mx-auto overflow-hidden">

        <div class="py-12  ">
          <div class="  mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative">
              <!-- Carousel container -->
              <div ref="carousel" class="overflow-hidden">
                <div class="flex transition-transform duration-300 ease-in-out"
                     :style="`transform: translateX(-${currentIndex * 100}%)`">
                  <!-- Testimonial cards -->
                  <div
                      v-for="(testimonial, index) in testimonials"
                      :key="index"
                      class="w-full flex-shrink-0 px-4"
                  >
                    <div class="bg-white p-8 rounded-lg shadow-lg h-full">
                      <div class="flex items-start">
                        <svg class="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 36 36">
                          <path
                              d="M11.86 16.55a4.31 4.31 0 0 0-2.11.56a14.44 14.44 0 0 1 4.36-6a1.1 1.1 0 0 0-1.4-1.7c-4 3.25-5.78 7.75-5.78 10.54A5.08 5.08 0 0 0 10 24.58a4.4 4.4 0 0 0 1.88.44a4.24 4.24 0 1 0 0-8.47Z"/>
                          <path
                              d="M23 16.55a4.29 4.29 0 0 0-2.11.56a14.5 14.5 0 0 1 4.35-6a1.1 1.1 0 1 0-1.39-1.7c-4 3.25-5.78 7.75-5.78 10.54a5.08 5.08 0 0 0 3 4.61A4.37 4.37 0 0 0 23 25a4.24 4.24 0 1 0 0-8.47Z"/>
                        </svg>
                        <p class="ml-4 text-lg text-gray-600 italic">
                          "{{ testimonial.quote }}"
                        </p>
                      </div>
                      <div class="mt-8 flex items-center">
                        <img
                            :src="testimonial.image"
                            :alt="testimonial.author"
                            class="h-16 w-16 rounded-full object-cover"
                        >
                        <div class="ml-4">
                          <p class="text-lg font-medium text-gray-900">
                            {{ testimonial.author }}
                          </p>
                          <p class="text-base text-gray-500">
                            {{ testimonial.position }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Navigation arrows -->
              <button
                  @click="prevSlide"
                  class="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none"
              >
                <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button
                  @click="nextSlide"
                  class="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none"
              >
                <svg class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>

              <!-- Dots indicator -->
              <div class="flex justify-center mt-8 space-x-2">
                <button
                    v-for="(testimonial, index) in testimonials"
                    :key="index"
                    @click="goToSlide(index)"
                    class="h-3 w-3 rounded-full transition-colors duration-300"
                    :class="currentIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-300'"
                    aria-label="Go to slide"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!--    <section-->
    <!--        class="bg-white"-->
    <!--    >-->
    <!--      <div class="relative w-full max-w-[1440px] mx-auto overflow-hidden">-->
    <!--        <div class="absolute">-->
    <!--          <img src="../static/back-01.png" class=" w-full mb-16" alt="rezilens">-->
    <!--        </div>-->

    <!--        <div class=" ">-->
    <!--          <div-->
    <!--              class="grid grid-cols-8 gap-2 md:p-16 lg:p-16 xl:p-16 p-6 relative"-->
    <!--          >-->

    <!--            <div-->
    <!--                class="col-span-8 mt-8"-->
    <!--            >-->
    <!--              <h1-->
    <!--                  class="text-5xl text-[#211952]"-->
    <!--              >-->
    <!--                Rezilens-->
    <!--              </h1>-->
    <!--              <p class="text-justify mt-6 text-base leading-9 text-[#211952]">-->
    <!--                Rezilens is a dynamic Queensland-based cybersecurity company which provides AI-enabled web-based-->
    <!--                cybersecurity resilience assessments and technical vulnerability assessments to Australian companies and-->
    <!--                organisations. Rezilens’ success is driven by its innovative technological edge. We’re looking for a-->
    <!--                talented and experienced Sales Lead to take our operations to the next level by extending the sales-->
    <!--                opportunities for our product offerings.-->
    <!--              </p>-->
    <!--              <p class="text-justify mt-6 text-base leading-9 text-[#211952]">-->
    <!--                The Sales Lead is responsible for seeking out and forming partnerships with new partners and resellers-->
    <!--                (e.g. IT MSP’s) who can deliver Rezilens’ web-based GRC and vulnerability assessment platforms to end-->
    <!--                customers. Direct sales to end users (such as Government entities or small/medium sized enterprises) is-->
    <!--                within the scope of this job. The Sales Lead’s responsibilities also include maintaining and deepening-->
    <!--                the company’s relationship with its existing client base.-->
    <!--              </p>-->
    <!--              <p class="text-justify mt-6 text-base leading-9 text-[#211952]">-->
    <!--                In this role, you’ll need to target markets which would be the most receptive to Rezilens’ product-->
    <!--                offerings. Building a relationship with the stakeholders at end user or partner companies, you’ll be-->
    <!--                expected to form and maintain long term relationships that can lead to sales for the company.-->
    <!--              </p>-->
    <!--              <p class="text-justify mt-6 text-base leading-9 text-[#211952]">-->
    <!--                The compensation package includes a base salary and an uncapped commission structure, with an earning-->
    <!--                potential well in excess of $130,000.-->
    <!--              </p>-->
    <!--              <div>-->
    <!--                <button-->
    <!--                    class="bg-[#57CCE0] text-[#211952] text-sm py-1 px-3 mt-4 rounded-md"-->
    <!--                >-->
    <!--                  <nuxt-link to="/about-us">-->
    <!--                    Read More-->
    <!--                  </nuxt-link>-->
    <!--                </button>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->


    <div class="bg-cover w-full" style="background-image: url('/rezilens/page-banner.png')">
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
              Our Value Proposition
            </h1>
          </div>
          <!--        <div class="dir-rtl pt-4 col-span-2">-->
          <!--          <nuxt-link to="/services">-->
          <!--            <img src="../static/open.png" alt="rezilens"/>-->
          <!--          </nuxt-link>-->
          <!--        </div>-->
        </div>
        <div
            class="grid grid-cols-1 gap-2  "
        >
          <div class="md:col-span-1 lg:col-span-1 xl:col-span-1 col-span-2">

          </div>
          <div class="  pt-4 md:col-span-1 lg:col-span-1 xl:col-span-1 col-span-2">
            <div class="py-12  ">
              <div class="max-w-7xl mx-auto">
                <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div
                      v-for="(item, index) in cards"
                      :key="index"
                      class="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ item.title }}</h3>
                    <p class="text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>

    <section>
      <div class="relative w-full max-w-[1440px] mx-auto p-20">
        <div
            class="grid grid-cols-1 gap-2"
        >
          <div class=" ">
            <p class="md:text-2xl xl:text-2xl lg:text-2xl text-2xl pt-3 text-[#211952] text-center">
              See how you can overcome your cybersecurity challenges with a simple and affordable solution.
            </p>
          </div>
          <div class="text-center pt-6">
            <button class="px-6 py-3 bg-[#3e1660] text-white font-medium rounded-lg transition-colors duration-300">
              Book a Demo
            </button>
          </div>

        </div>

      </div>
    </section>

    <div class="bg-cover w-full bg-gradient-to-br from-gray-50 to-blue-50 pt-8">
      <section
          class="md:mx-16 lg:mx-16 xl:mx-16 mx-6  "
      >
        <div class="container mx-auto px-4">
          <BaseSwiper :data="certifications" :title="'Our industry certifications'" />
        </div>
      </section>
    </div>

    <div class="bg-cover w-full mt-10">
      <section
          class="md:mx-16 lg:mx-16 xl:mx-16 mx-6 pb-10 "
      >
        <div class="container mx-auto px-4">
          <BaseSwiper :data="partners" :title="'Partners'" />

        </div>
      </section>
    </div>

    <section class="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
            Impact at a Glance
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Quantifiable results from our strategic transformations
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div
              v-for="(metric, index) in impactMetrics"
              :key="index"
              class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 pb-4"
          >
            <div class="p-6 h-full flex flex-col">
              <div class="flex items-center mb-4 ">
                <h3 class="text-xl font-semibold text-[#5A1D68]">{{ metric.title }}</h3>
              </div>

              <div class="mt-auto h-24">
                <p class="text-3xl font-bold text-[#6C2275] mb-2">{{ metric.value }}</p>
                <p class="text-gray-600">{{ metric.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <button class="px-6 py-3 bg-[#3e1660] text-white font-medium rounded-lg   transition-colors duration-300">
            Request Detailed Case Study
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import 'swiper/swiper-bundle.css';
// Import Swiper
import {Swiper, SwiperSlide} from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

///SEO
useSeoMeta({
  title: 'Rezilens',
  ogTitle: 'Rezilens',
  description: '',
  ogDescription: '',
  ogImage: '',
  twitterCard: 'summary_large_image',
})

const impactMetrics = [
  {
    "title": "Technology ROI Boost",
    "value": "30–40%",
    "description": "Increase in technology ROI via smarter AI investments",
  },
  {
    "title": "Compliance Speed",
    "value": "Up to 50%",
    "description": "Faster compliance achievement",
  },
  {
    "title": "Threat Reduction",
    "value": "60–80%",
    "description": "Reduction in cybersecurity threats",
  },
  {
    "title": "ESG Performance",
    "value": "Measurable",
    "description": "ESG performance uplift in Year 1",
  },
  {
    "title": "Workforce Readiness",
    "value": "90%+",
    "description": "Employee readiness post-transformation",
  }
]

const impacts = [
  {
    title: "30–40% increase in technology ROI",
    subtitle: "via smarter AI investments"
  },
  {
    title: "Up to 50% faster compliance achievement"
  },
  {
    title: "60–80% reduction in cybersecurity threats"
  },
  {
    title: "Measurable ESG performance uplift",
    subtitle: "in Year 1"
  },
  {
    title: "90%+ employee readiness",
    subtitle: "post-transformation"
  }
];

const cards = [
  {
    title: 'Holistic, Pillar-Based Consulting',
    description: 'Four interconnected pillars—Foresight, Intelligence, Trust & Resilience, Adaptive Transformation—ensure no gap is left unaddressed.'
  },
  {
    title: 'Custom-Built Intelligence',
    description: 'Tailored AI and data solutions aligned with your unique business DNA.'
  },
  {
    title: 'Trust & Resilience at the Core',
    description: 'Security, privacy, and compliance built in from day one, aligned with ISO, NIST, GDPR and leading global standards.'
  },
  {
    title: 'ESG-Embedded Strategy',
    description: 'Measurable, sustainable practices that meet regulatory demands and stakeholder expectations.'
  },
  {
    title: 'End-to-End Execution',
    description: 'From discovery through deployment, we deliver real metrics and real impact.'
  }
];


const certifications = [
  {image: 'https://www.rezilens.com/upload/widget/61724f092d3e0.png', name: 'Exin IT service management'},
  {image: 'https://www.rezilens.com/upload/widget/61724f0ba2981.png', name: 'CISM'},
  {image: 'https://www.rezilens.com/upload/widget/61724f0c1fe28.png', name: 'CRISC'},
  {image: 'https://www.rezilens.com/upload/widget/61724f0cca4fa.png', name: 'AWS certified'},
  {image: 'https://www.rezilens.com/upload/widget/61724f0e73779.png', name: 'PMI RMP'},
  {image: 'https://www.rezilens.com/upload/widget/61724f0ee912a.png', name: 'PMP'},
  {image: 'https://www.rezilens.com/upload/widget/61724f1059704.png', name: 'ITIL 4'},
  {image: 'https://www.rezilens.com/upload/widget/61724f1085f5a.png', name: 'Cobit 5'},
  {image: 'https://www.rezilens.com/upload/widget/61724f1237f45.png', name: 'ISO 27001'},
  {image: 'https://www.rezilens.com/upload/widget/6172745a1cdf1.png', name: 'CEH'}
]
const partners = [{
  image: "https://www.rezilens.com/upload/widget/61763f2ba0837.png",
  "alt": "Cloud security alliance",
  "width": "182.5px",
  "margin": "3px"
},
  {
    image: "https://www.rezilens.com/upload/widget/61763f2ce9a5e.png",
    "alt": "bsi",
    "width": "182.5px",
    "margin": "3px"
  },
  {
    image: "https://www.rezilens.com/upload/widget/61763f2d649e3.png",
    "alt": "Australian cyber security center",
    "width": "182.5px",
    "margin": "3px"
  },
  {
    image: "https://www.rezilens.com/upload/widget/61763f2d91565.png",
    "alt": "Knowbe4",
    "width": "182.5px",
    "margin": "3px"
  },
  {
    image: "https://www.rezilens.com/upload/widget/61763f2dcbe19.png",
    "alt": "Australian signals directorate",
    "width": "182.5px",
    "margin": "3px"
  },
  {
    image: "https://www.rezilens.com/upload/widget/61763f2e75417.png",
    "alt": "ISACA",
    "width": "182.5px",
    "margin": "3px"
  },
  {
    image: "https://www.rezilens.com/upload/widget/617641f425b5e.png",
    "alt": "Joint cuber security center",
    "width": "182.5px",
    "margin": "3px"
  }
]

// const services = ([
//   {
//     title: "Cost-Efficient",
//     image: "",
//     abstract: "An affordable yet feature-rich SaaS tool that improves transparency and decreases cybersecurity costs.",
//     description: "",
//     slug: "/"
//   },
//   {
//     title: "Easy to Use",
//     image: "",
//     abstract: "Manage yours and your clients’ cybersecurity journeys with minimal technical experience required.",
//     description: "",
//     slug: "/"
//   },
//   {
//     title: "Two Birds With One Stone",
//     image: "",
//     abstract: "Identify and reduce both your technical and non-technical risks through a single pane of glass.",
//     description: "",
//     slug: "/"
//   },
// ])
// const features = ([
//   {
//     title: "SaaS Based",
//     abstract: "A cybersecurity platform designed with SaaS architecture, backed by AI and machine learning expertise."
//   },
//   {
//     title: "Affordable",
//     abstract: "More cost-effective and faster than many traditional manual processes in the cybersecurity industry."
//   },
//   {
//     title: "Intuitive",
//     abstract: "User-friendly interface requiring no technical expertise, with clear insights for senior teams."
//   },
//   {
//     title: "Bespoke",
//     abstract: "Customized remediations and improvement suggestions based on unique security posture and cyber maturity."
//   },
//   {
//     title: "Transparent",
//     abstract: "Detailed and granular visibility into client security postures through an intuitive portal."
//   },
//   {
//     title: "White Labeled",
//     abstract: "Full white-labeling options to promote the platform as your own with customized branding."
//   }
// ])

const testimonials = [
  {
    "quote": "Partnering with this cybersecurity firm has revolutionized our approach to digital safety. Their expertise and tailored solutions have kept our e-commerce platform safe and efficient, boosting customer trust.Thanks to their support, we've significantly reduced security incidents and our team feels more confident. They're more than a service provider; they're a vital part of our success.I highly recommend them for their reliable and effective cybersecurity support.",
    "author": "Abbey Dean",
    "position": "Cofounder and Director at Bliss",
    "image": "https://digrc.com/images/testimonial/abbey.jpeg"
  },
  {
    "quote": "Working with this cybersecurity firm has fundamentally changed our online security strategy. Their proactive approach and custom solutions have significantly improved the safety of our e-commerce operations, ensuring an exceptional customer experience. We've observed a substantial reduction in security risks since our partnership began. Their team isn't just a vendor but a deeply trusted extension of our organization, committed to our security needs. This firm is the ideal choice for any business seeking reliable, comprehensive cybersecurity.",
    "author": "Micheal Lennon",
    "position": "Director at Bliss Boutique",
    "image": "https://digrc.com/images/testimonial/micheal.jpeg"
  },
  {
    "quote": "DiGRC has revolutionized our penetration testing process. Its AI-driven tools ensure tests are thorough, quickly identifying vulnerabilities and significantly bolstering defenses. The platform's user-friendly interface and automated features simplify testing, enabling our team to focus on essential security tasks. Predictive analytics keep us well ahead of emerging threats. DiGRC isn't just a tool; it's essential for enhancing security in any proactive organization. Highly recommended for robust cybersecurity.",
    "author": "Fadi Ali Cheikh",
    "position": "Atlas Telecom",
    "image": "https://digrc.com/images/testimonial/atlasgroup.png"
  },
  {
    "quote": "Implementing DiGRC has significantly improved our compliance processes. The platform's tools and insights have streamlined our procedures and boosted regulatory adherence. Thanks to DiGRC, we're not just meeting compliance targets—we're exceeding them. The platform is user-friendly and powerful, enabling our team to manage compliance more effectively. I highly recommend DiGRC for any organization looking to enhance their compliance efforts. It's essential to our strategy.",
    "author": "Hamid Bafghi",
    "position": "B-Online Technology",
    "image": "https://digrc.com/images/testimonial/hamid.jpeg"
  },
  {
    "quote": "I am thoroughly pleased with our partnership with DiGRC. Their cybersecurity platform has significantly enhanced our operations, offering adaptable and forward-thinking solutions. The ongoing support and innovation from DiGRC are invaluable to us. I highly recommend their services for any organization looking for a reliable cybersecurity partner.",
    "author": "Dr. Hossein Al-Attar",
    "position": "CEO and Founder",
    "image": "https://digrc.com/images/testimonial/hossein.jpg"
  },
  {
    "quote": "The Rezilens platform will enable experts to manage organisation Cyber governance and risk management through a single pane of glass… and reduce hours of work and uncertainty in manual work.",
    "author": "Adnan Rashid",
    "position": "Senior Manager of Cyber and Strategic Risk at Deloitte Australia",
    "image": "https://www.rezilens.com/asset/theme-interior/image/testimoni-aladnan-deloitte.jpg?1745038688"
  },
  {
    "quote": "Rezilens' combination of automated GRC management and vulnerability scanning makes it truly unique in the Australian marketplace. The whole-of-organisation transparency it allows, along with its fluid task management, has made it especially helpful for our clients and partners undergoing cybersecurity audit and uplift projects. R2S has also used Rezilens' platforms internally, where the simplicity and ease-of-use on offer has catered perfectly to our evolving security requirements.",
    "author": "Dave Cohen",
    "position": "General Manager of Cyber and Technology at Risk 2 Solution Group",
    "image": "https://www.rezilens.com/asset/theme-interior/image/testimoni-dave-r2s.jpg?1745038688"
  },
  {
    "quote": "We've really enjoyed working with these guys - their responsiveness and the simplicity of their platform have led to faster turnarounds for our compliance projects and happy clients at the end of the day. The team at Rezilens have one of the best in industry DevSecOps process we have worked with. The turn around time from a feature/change request, to release being in production is within a day. Phenomenal!",
    "author": "Oliver Winsley",
    "position": "Director at Imperium Cyber Security",
    "image": "https://www.rezilens.com/asset/theme-interior/image/testimoni-oliver-imperium.jpg?1745038688"
  },
  {
    "quote": "Rezilens performed several penetration tests against our infrastructure for the websites and networked devices. The reporting was detailed and insightful, and informed IT and the executive teams on our strengths and the main vulnerabilities that required our attention. I thoroughly recommend the Rezilens team for penetration, vulnerability scanning and reporting. Rezilens were very competitive within the marketplace which made it very easy for our decision to go with them.",
    "author": "",
    "position": "IT Manager Greyhound Racing NSW",
    "image": "https://www.rezilens.com/asset/theme-interior/image/greyhound-racing.png?1745038688"
  },
  {
    "quote": "The Rezilens GRC tool is a genuine pleasure to use, with system-generated reporting that's clean and concise, so I can take it straight to my clients to present and review. All in all, it cut down the usual time it'd take me to complete compliance assessments by two thirds, and the fact it's all Australian-grown tech is the icing on the cake.",
    "author": "Mark Smits",
    "position": "Founder - MIACOR IT",
    "image": "https://www.rezilens.com/asset/theme-interior/image/testimoni-mark-smits.png?1745038688"
  },
  {
    "quote": "As an independent assessor, I found the Rezilens GRC tool to be especially handy for expediting the information gathering and evidence collection processes. Its ease of use and practical reporting has made it a go-to choice to support my projects, and any assistance required in getting the most out of the platform was only a call or email away.",
    "author": "Hamed Monfared",
    "position": "Founder CyberRely",
    "image": "https://www.rezilens.com/asset/theme-interior/image/hamed1.jpg?1745038688"
  },
  {
    "quote": "Corey and the Rezilens team helped me to understand the unique cybersecurity threats posed to me as a small business in the financial services space. The reporting was easy to understand, and perfect for forwarding onto my IT provider. A simple action plan was supplied, with critical areas being addressed and solved within weeks, which was really helpful. Would recommend them to any SMEs in the professional services space who are looking for a straightforward and cost-effective way to improve their business cybersecurity.",
    "author": "Kristina O'Sullivan",
    "position": "Director Think Financial Planning",
    "image": "https://www.rezilens.com/asset/theme-interior/image/kristina1.jpg?1745038688"
  },
  {
    "quote": "DiGRC has revolutionized our approach to governance, risk management, and compliance. Its intuitive AI-powered platform streamlines complex processes, saving us time and resources. Real-time analytics and proactive risk assessments provide invaluable insights, giving us a competitive edge. I highly recommend DiGRC to any business leader seeking efficient GRC management.",
    "author": "Dr Mansoor Malik",
    "position": "Chairman Diplomat Business club Dubai & London.",
    "image": "https://digrc.com/images/testimonial/mansoor.jpeg"
  }
]

const currentIndex = ref(0)
const carousel = ref(null)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}

// Auto-advance slides (optional)
onMounted(() => {
  setInterval(() => {
    nextSlide()
  }, 10000)
})


</script>
<style scoped>
/* Custom transition for smoother sliding */
.flex {
  transition: transform 0.5s ease-in-out;
}

/* Custom Swiper navigation buttons */
.swiper-button-prev,
.swiper-button-next {
  @apply bg-white p-2 rounded-full shadow-md w-10 h-10;
  color: #000;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  @apply text-sm;
}
</style>