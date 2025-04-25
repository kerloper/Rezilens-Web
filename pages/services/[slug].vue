<template>
  <section>
    <div
        class="md:mx-16 lg:mx-16 xl:mx-16 mx-6 pb-10" v-if="service"
    >
      <div class="grid md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 gird-cols-1 gap-2 max-w-[1440px] mx-auto">

        <div class="block sm:hidden md:hidden lg:hidden xl:hidden">
          <div>
            <img
                :src="'/images/'+service.image"
                alt="rezilens"
                class="w-full scale-110"
            >
          </div>
        </div>
        <div>
          <img
              src="../../static/code-slash.png"
              alt="rezilens"
              class="absolute md:left-auto lg:left-auto xl:left-auto left-0"
          >
          <div class="md:pt-20 lg:pt-20 xl:pt-20">
            <h1 class="text-white md:text-6xl lg:text-6xl xl:text-6xl text-4xl">
              {{ service.title }}
            </h1>
            <div class="text-white text-xl mt-10"
                 v-html=" service.abstract.replace(/\n/g, '<br>')">
            </div>
            <div>
              <nuxt-link to="/contact-us">
                <button
                    class="bg-[#57CCE0] text-[#211952] text-sm py-1 px-3 mt-6 rounded-md relative"
                >
                  Talk to us
                </button>
              </nuxt-link>
            </div>

          </div>
        </div>
        <div class="hidden md:block lg:block xl:block">
          <div class="px-16 h-[460px] overflow-hidden">
            <img
                :src="'/images/'+service.image"
                alt="rezilens"
                class="w-full scale-110"
            >
          </div>
        </div>

      </div>
    </div>

    <div
        class="bg-white" v-if="service"
    >
      <div class="relative max-w-[1440px] mx-auto">
        <div class=" ">
          <div
              class="grid grid-cols-8 gap-2 py-8 md:p-16 lg:p-16 xl:p-16 p-6 relative"
          >
            <div
                class="col-span-8"
            >
              <p class="text-justify mt-0 text-base leading-9 text-[#211952]"
                 v-html=" service.description.replace(/\n/g, '<br>')">

              </p>
            </div>

            <div
                v-for="item in service.information"
                class="md:col-span-4 lg:col-span-4 xl:col-span-4 col-span-8 mt-6"
            >
              <h3 class="text-4xl text-[#211952]">
                {{ item.title }}
              </h3>
              <div class="flex my-3 text-[#211952]" v-for="data in item.data">
                <img src="../../static/point.png" class="w-3 h-3 mt-2 mr-4" alt="#">
                <p>
                  {{ data }}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>

    <div v-if="service" class="max-w-[1440px] mx-auto">

      <div
          class="grid grid-cols-2 gap-2 "
      >
        <div class="md:mx-16 lg:mx-16 xl:mx-16 mx-6 mt-6 col-span-2">
          <h1
              class="md:text-5xl lg:text-5xl xl:text-5xl text-3xl text-white"
          >
            Other Services
          </h1>
        </div>
      </div>

      <div class="mt-8">

        <Swiper
            class="w-full h-full"
            :slidesPerView="'auto'"
            :spaceBetween="24"
            :modules="[SwiperNavigation,SwiperPagination]"
            effect="fade"
            :nested="true"
            :disabledClass="true"
            :navigation="false"
            :breakpoints="{
      '300': {
         slidesPerView: 1.2,
       },
      '768': {
         slidesPerView: 2.1,
       },
       '1280': {
          slidesPerView: 2.4,
       },
    }"
        >
          <SwiperSlide v-for="item in services.filter(item => item.slug !==service.slug)"
                       :key="item.slug"
                       class="w-screen sm:-mx-2 mt-4 pb-12 px-1 ">

            <div class="grid grid-cols-1 gap-12">
              <nuxt-link
                  :to="'/services/'+item.slug"
                  class="bg-cover bg-center bg-[url('../../static/services-light-main.png')] rounded-xl">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <img :src="'/images/' + item.image" :alt="item.title" class="md:h-72 lg:h-72 xl:h-72"/>
                  </div>
                  <div class="md:pr-16 lg:pr-16 xl:pr-16 pr-4">
                    <h1
                        class="text-[#211952] text-xl font-medium pt-14"
                    >
                      {{ item.title }}
                    </h1>
                    <div class=" md:block lg:block xl:block hidden ">
                      <p
                          class="text-[#211952] text-base pt-5 line-clamp-3  "
                      >
                        {{ item.description }}
                      </p>
                    </div>
                  </div>

                </div>
              </nuxt-link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>

  </section>
</template>
<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const route = useRoute()
import {ref, onMounted, onBeforeUnmount} from 'vue';

const isLogin = useCookie('is_login')
const user = useCookie('user')
const token = useCookie('token')


const config = useRuntimeConfig()
const {slug} = route.params

useSeoMeta({
  title: `Rezilens - ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
  ogTitle: `Rezilens - ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
  description: '',
  ogDescription: '',
  ogImage: '',
  twitterCard: 'summary_large_image',
})


const services = ref([
  {
    title: "Software Development",
    image: "services-software-development.png",
    abstract: "We specialize in software development, offering comprehensive solutions that encompass both web and app development.",
    description:  "Our expertise extends to creating robust and scalable software applications that cater to your unique needs. With our web application development services, we provide you and your customers with a zero-install, centralized, safe, and scalable experience. Our team of skilled web developers works diligently to deliver exceptional web applications that ensure a seamless and enjoyable online experience for your users.\n" +

        "In addition, we have a proven track record in mobile app development, spanning over a decade. Our reliable services and focus on excellent user experience have earned us the trust of our clients. Whether you're targeting the vast user base of Android or the privacy and security benefits of iOS, our team of skilled app developers and business specialists is ready to bring your app idea to life.\n" +

        "For Android app development, we harness the power of the world's most popular operating system to expand your client base by millions. From ideation to delivery, we ensure a seamless experience, customizing your Android app to meet your specific requirements.\n" +

        "When it comes to iOS application development, we prioritize privacy, security, and scalability. Our cutting-edge iOS app development services empower you to grow stronger in the competitive market, reaching a discerning audience of Apple users.\n" +

        "At Veria InfoTech, we combine our expertise in web development and app development to provide you with comprehensive software development solutions. Our team is dedicated to delivering high-quality, customized software applications that drive your business forward. Get in touch with us today to discuss your software development needs and embark on a journey of digital transformation.",
    slug: "software-development",
    "information": [
      {
        "title": "Technical Features",
        "data": [
          "Agile Development Methodologies",
          "Robust Version Control Systems",
          "Integrated Development Environments (IDEs)",
          "Continuous Integration and Deployment (CI/CD) Pipelines",
          "Automated Testing Frameworks",
          "Scalable and Secure Backend Architectures",
          "DevOps and Cloud Infrastructure Management",
          "Containerization and Orchestration Technologies",
          "Cross-Platform Development Frameworks",
          "API and Microservices Architecture"
        ]
      },
      {
        "title": "Highlights",
        "data": [
          "Rapid Time-to-Market",
          "Collaborative Project Management Tools",
          "Scalable and Flexible Software Solutions",
          "Customization and Personalization Options",
          "Seamless Integration with Third-Party Systems",
          "High-Quality User Experience (UX) Design",
          "Proven Track Record and Customer Success Stories",
          "Cost-Effective Development Solutions",
          "Dedicated Support and Maintenance Services",
          "Innovation and Future-Proofing Capabilities"
        ]
      }
    ]
  },
  {
    title: "Live Steaming",
    image: "services-live-streaming.png",
    abstract: "Live streaming is a cutting-edge technology that enables real-time transmission of videos over the Internet.",
    description: "With live streaming, viewers can engage with content as it unfolds, creating an interactive and immersive experience. Whether it's a live event, webinar, product launch, or educational session, live streaming allows you to connect with your audience in the moment, regardless of their geographical location. The process involves retrieving the media file from a remote location and transmitting it continuously over the internet, ensuring seamless playback and uninterrupted viewing pleasure. Veria InfoTech is at the forefront of live streaming technology, offering secure, performant, and reliable Live Streaming and Video on Demand (VOD) services. With our private PaaS platform, we bring your content to life, enabling you to deliver captivating livestream experiences that leave a lasting impact on your audience.\n" +
        "At Veria InfoTech, our exceptional team of professionals is dedicated to delivering secure, high-performance, and reliable live streaming and Video on Demand (VOD) services. With years of industry experience, we handle everything from technical setup to seamless delivery, ensuring your livestream events are executed flawlessly. Our private PaaS platform guarantees optimal security and performance, allowing you to focus on creating engaging content and connecting with your audience. Trust our team's expertise and commitment to excellence to deliver superior live streaming services tailored to your unique requirements. Partner with Veria InfoTech and experience the difference we can make in bringing your livestreaming vision to life.",
    slug: "live-streaming",
    information: [
      {
        title: "Features",
        data: [
          "Real-time audience connection.",
          "Interactive viewer engagement.",
          "High-quality immersive experience.",
          "Global reach and accessibility.",
          "Customizable branding options.",
          "Robust content security.",
          "Actionable analytics insights.",
          "Seamless social integration."
        ]
      }
    ]
  },
  {
    title: "Video Marketing",
    image: "services-video-marketing.png",
    abstract: "Video marketing is an innovative and forward-facing approach that harnesses the power of captivating videos to promote businesses, brands, and services.",
    description: "It serves as a dynamic and engaging intermediary tool between a brand and its audience, allowing for effective communication and connection. By leveraging the visual medium, video marketing creates powerful narratives that leave a lasting impression on viewers. If a picture is worth a thousand words, then a video is worth so much more. In fact, research suggests that every minute of an attractive video is equivalent to a staggering 1.8 million words. This highlights the immense potential of videos to convey complex messages, evoke emotions, and engage viewers in ways that traditional text-based content simply cannot match. Video marketing is a game-changer in today's digital landscape, offering businesses a unique opportunity to stand out, captivate their target audience, and drive meaningful results.\n" +
        "At Veria Infotech, our talented team of experts is passionate about delivering exceptional results for our clients. With years of industry experience and a deep understanding of the ever-evolving digital landscape, we have the expertise to take your business to new heights. From video production and content creation to SEO and marketing strategy, our diverse skill set allows us to provide comprehensive solutions tailored to your unique needs. We understand the importance of optimizing your online presence for search engines, and we leverage video marketing as an SEO goldmine. Trust our team to enhance your website's visibility, drive traffic, and convert leads into loyal customers. Partner with us and unlock the true potential of your business in the digital realm.",
    slug: "video-marketing",
    "information": [
      {
        "title": "Features",
        "data": [
          "Engaging and captivating video content",
          "Storytelling techniques",
          "High-quality production and visuals",
          "Strong brand messaging and identity",
          "Call-to-action elements",
          "Video testimonials and customer success stories"
        ]
      }
    ]
  },
  {
    title: "SEO",
    image: "services-seo.png",
    abstract: "SEO, short for Search Engine Optimization, is the practice of optimizing your website to increase the quantity and quality of traffic it receives from organic search engine results.",
    description: "By implementing effective SEO strategies, you can improve your online visibility and rankings, putting you ahead of your competitors. When your website ranks higher in search engine results, you have a greater chance of attracting potential customers, leading to increased conversions and overall business growth. SEO involves various techniques such as keyword research, on-page optimization, and link building to ensure your website is easily discoverable by search engines. By investing in SEO, you can drive targeted traffic to your website, improve your online presence, and establish a strong digital foundation for your business.\n" +
        "Boost your online presence and elevate your business to new heights with our cutting-edge SEO management team. Equipped with world-class technology and unrivaled strategies, we are committed to optimizing your website for maximum visibility and attracting targeted organic traffic. Our meticulous approach encompasses both short- and long-term business objectives, ensuring sustainable growth for your brand. With a finger on the pulse of current trends and a deep understanding of the competitive landscape, we tailor our SEO solutions to suit your unique needs. Experience the power of effective search engine optimization and watch your business soar to the top of the rankings. Trust our experts to drive results and unlock the true potential of your online ventures.",
    slug: "seo",
    information: [
      {
        "title": "Features",
        "data": [
          "On-page optimization",
          "Keyword research and targeting",
          "Link building strategies",
          "Local SEO optimization",
          "Technical SEO audits",
          "Content creation and optimization",
          "Mobile optimization",
          "SEO analytics and reporting"
        ]
      }
    ]
  },
  {
    title: "Web Design",
    image: "services-web-design.png",
    abstract: "In today's digital era, having a professional online presence is key to establishing a meaningful connection with your target audience.",
    description: "Your website serves as an online business card, providing visitors with their first impression of your brand. It acts as a virtual storefront, introducing your products, services, and values to potential customers. A well-designed website not only showcases your offerings but also instills trust and credibility. It allows visitors to navigate your online space seamlessly and find the information they need effortlessly. By investing in web design, you create a platform that not only represents your brand but also fosters a positive user experience. Your website becomes a powerful tool to engage with your target audience, build trust, and leave a lasting impression. It serves as a gateway for visitors to explore your business further, making web design an essential aspect of your online presence.\n" +
        "At Veria Infotech, our team of skilled web designers and developers specializes in creating interactive designs tailored to the unique needs of businesses and customers. We understand the importance of a website that effectively promotes your business. With custom site design, we create unique websites that are designed according to your specific needs, goals, and optimized for your target audience's expectations. Our team is committed to delivering exceptional results and providing an amazing user experience. Trust us to craft a visually stunning and user-friendly website that sets you apart from the competition and helps you achieve your business objectives.",
    slug: "web-design",
    "user": [
      {
        "title": "Web Design",
        "data": [
          "Responsive Design",
          "Visual Appeal",
          "User-Friendly Navigation",
          "Consistent Branding",
          "Clear Call-to-Action",
          "Fast Loading Speed",
          "Search Engine Optimization (SEO)",
          "Scalability and Flexibility",
          "Accessibility",
          "Cutting-edge technology"
        ]
      },
      {
        "title": "UI/UX Design",
        "data": [
          "User Research",
          "User-Centric Approach",
          "Information Architecture",
          "Wireframing and Prototyping",
          "Visual Hierarchy",
          "Consistency and Familiarity",
          "Feedback and Interaction Design",
          "Usability Testing",
          "Mobile-Friendly Design"
        ]
      }
    ]
  },
])

const service = ref(null);

function getService(slug) {
  services.value.forEach((value) => {
    if (value.slug === slug)
      service.value = value;
  })
}


onMounted(() => {
  getService(slug);
})

</script>

<style scoped>
</style>