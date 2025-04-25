<template>
  <section>

    <div
        class="md:px-16 lg:px-16 xl:px-16 px-6 pb-10 max-w-[1440px] mx-auto"
    >
      <div class="grid md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 gird-cols-1 gap-2">

        <div class="block sm:hidden md:hidden lg:hidden xl:hidden">
          <div>
            <img
                src="../../static/solutions.png"
                alt="rezilens"
                class="mx-auto"
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
              Veria Solutions
            </h1>
            <div class="text-white text-xl mt-10 line-clamp-6 leading-9">
              We are dedicated to helping businesses achieve their goals through our comprehensive range of innovative solutions. we offer a diverse set of tools to address your unique challenges. If you require a solution that is not listed, our team is here to listen and understand your specific needs. We will work closely with you to build and find the perfect solution that aligns with your objectives and unlocks your business's full potential in the digital world. Explore our range of solutions and let us help you navigate the ever-evolving landscape of technology and digital marketing.
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
          <div class="px-16 h-[460px] pt-10 overflow-hidden">
            <img
                src="../../static/solutions.png"
                alt="rezilens"
                class="w-full scale-110"
            >
          </div>
        </div>

      </div>
    </div>

    <div
        class="bg-white md:p-16 lg:p-16 xl:p-16 p-6"
    >
      <div class="grid grid-cols-2 gap-8 max-w-[1440px] mx-auto">
        <nuxt-link v-for="solution in solutions"
                   :to="'/solutions/'+solution.slug"
                   class="bg-cover bg-center bg-[url('../../static/services-frame.png')] rounded-xl md:col-span-1 lg:col-span-1 xl:col-span-1 col-span-2">
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center justify-center">
              <img src="../../static/solutions.png" :alt="solution.title" class="rounded-xl"/>
            </div>
            <div class="md:pr-16 lg:pr-16 xl:pr-16 pr-4 pb-6">
              <h1
                  class="text-[#211952] text-xl font-medium pt-6"
              >
                {{ solution.title }}
              </h1>
              <p
                  class="text-[#211952] text-base pt-5 line-clamp-5 md:h-36 lg:h-36 xl:h-36 h-0"
              >
                {{ solution.abstract }}
              </p>
            </div>
            <p
                class="text-[#211952] text-base mb-4 pb-0 col-span-2 p-4 line-clamp-3 md:hidden lg:hidden xl:hidden block"
            >
              {{ solution.abstract }}
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>

  </section>
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
  title: 'Rezilens - Solutions',
  ogTitle: 'Rezilens - Solutions',
  description: '',
  ogDescription: '',
  ogImage: '',
  twitterCard: 'summary_large_image',
})

let loading = ref(true)
const solutions = ref([
  {
    title: "Affiliate",
    image: "",
    abstract: "Affiliate marketing is an effective advertising model that allows companies to compensate third-party publishers, known as affiliates, for driving traffic or generating leads to their products and services.",
    slug: "affiliate",
    description: "This mutually beneficial arrangement incentivizes affiliates to promote the company through various channels, such as videos, email newsletters, blog posts, or articles. Affiliates provide unique referral links, which track customer activities and allow the company to attribute conversions accurately. In this way, affiliate marketing enables businesses to expand their reach and tap into new audiences by leveraging the promotional efforts of their affiliate partners. Whether it's through pay-per-click (PPC) or revenue sharing models, affiliate marketing offers a flexible and performance-based approach to advertising, where affiliates are rewarded for their efforts in driving valuable actions for the company.\n" +
        "At Veria InfoTech we specialize in affiliate marketing solutions that help businesses maximize their online presence and revenue. Our dedicated team has developed an advanced affiliate marketing system that generates discount codes for customers and seamlessly integrates with your existing systems. With our system, you can effortlessly allocate a percentage of the revenue to both the customer and the affiliate partner, ensuring a fair and transparent process. Moreover, our expertise extends to covering various affiliate types, allowing you to explore different promotional avenues and reach a wider audience. We understand the importance of integrating with popular platforms like WordPress or customized systems preferred by our clients. By collaborating with our team, you can harness the power of affiliate marketing to drive conversions, expand your brand's visibility, and achieve your business goals. Trust us to deliver a comprehensive affiliate marketing solution tailored to your specific needs and provide ongoing support to maximize your success.",
    information:[
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
    title: "E-Commerce",
    image: "",
    abstract: "E-Commerce, short for electronic commerce, is the process of conducting business activities, including buying and selling goods, services, and events, over the internet.",
    slug: "e-commerce",
    description: "It has revolutionized the way businesses operate, providing a platform for companies to reach a global customer base and facilitate transactions online. eCommerce encompasses various types of transactions, such as business-to-consumer (B2C), business-to-business (B2B), and consumer-to-consumer (C2C). It involves the use of online shop platforms and applications that enable businesses to showcase their products or services, accept payments securely, and manage inventory and shipping. These platforms typically provide features like product catalogs, shopping carts, and secure payment gateways to ensure a smooth and secure online shopping experience. With eCommerce, businesses can expand their reach, operate 24/7, and offer personalized experiences to customers through features like personalized recommendations and targeted marketing. The continuous advancements in technology and the growing popularity of mobile devices have further fueled the growth of eCommerce, making it an essential part of modern business operations.\n" +
        "At Rezilens, we are proud to offer a wide range of cutting-edge eCommerce solutions tailored to businesses of all sizes. Whether you're a small startup or a large enterprise, we understand the importance of meeting you where you are on your commerce journey and providing continuous support to help you achieve your goals. Our expertise lies in providing exceptional online shop platforms and robust applications that empower you to effortlessly sell or book goods, services, and events. What sets us apart is our commitment to creating unique websites, applications, or SaaS products that are specifically designed to align with your brand goals, incorporating the latest trends and solutions in retail and eCommerce. Our team of skilled professionals combines technical prowess with a deep understanding of the industry, ensuring that we deliver solutions that are not only visually captivating but also equipped with the functionality needed to thrive in the competitive eCommerce landscape. Partner with Rezilens today and experience the power of our tailored eCommerce solutions that will elevate your brand, drive conversions, and keep you ahead of the curve.",
    information: [
      {
        "title": "Features",
        "data": [
          "Global Reach",
          "24/7 Availability",
          "Lower Overhead Costs",
          "Scalability and Expanded Customer Base",
          "Streamlined Inventory Management",
          "Seamless and secure Payment Options",
          "Customer Reviews and Ratings",
          "Order Tracking and Shipment Updates",
          "Cross-Selling and Upselling",
          "Robust analytics and reporting",
          "Social media integration",
          "Customer loyalty programs"
        ]
      }
    ]

  },
  {
    title: "E-Learning",
    image: "",
    abstract: "E-learning, also known as electronic learning, is a modern educational approach that utilizes digital technologies to deliver educational content and facilitate learning experiences.",
    slug: "e-learning",
    description: "It leverages the power of the internet, computers, and mobile devices to provide flexible and accessible learning opportunities to individuals of all ages and backgrounds. E-learning encompasses a wide range of formats, including online courses, virtual classrooms, interactive modules, and multimedia presentations. It enables learners to access educational materials anytime and anywhere, allowing for self-paced learning and personalized instruction. With e-learning, educational institutions and organizations can overcome geographical barriers, reach a larger audience, and provide engaging and interactive learning experiences. It often includes features such as multimedia elements, interactive quizzes, discussion boards, and progress tracking tools to enhance learner engagement and knowledge retention. E-learning has become increasingly popular due to its convenience, cost-effectiveness, and ability to adapt to different learning styles and preferences.\n" +
        "At Veria InfoTech, our team is dedicated to providing exceptional e-learning solutions that empower learners and drive educational success. With a deep understanding of the e-learning landscape, we are committed to delivering innovative and engaging learning experiences. Our team of skilled professionals combines expertise in instructional design, multimedia development, and learning technologies to create customized e-learning solutions tailored to your specific needs. We work closely with educational institutions and organizations to design and develop interactive online courses, virtual classrooms, and multimedia learning materials. Our solutions are designed to captivate learners, promote knowledge retention, and foster collaboration and interaction. With a focus on user experience and pedagogical effectiveness, we ensure that our e-learning solutions are intuitive, engaging, and aligned with the latest educational standards. Partner with our team of experts to unlock the full potential of e-learning and provide impactful educational experiences to your learners.",
    information:[
      {
        "title": "Features",
        "data": [
          "Personalized instruction",
          "Interactive multimedia",
          "Collaborative learning",
          "Enhanced outcomes",
          "Learning Management System (LMS)",
          "Mobile-Friendly Design",
          "Tracking and Reporting",
          "Scalable Infrastructure",
          "Multilingual Support",
          "Security and Data Privacy",
          "Cost-Effectiveness",
          "Certification and Accreditation",
          "Support and Community",
          "On-Demand Learning",
          "Customizable Learning Paths",
          "Global Reach"
        ]
      }
    ]

  },
  {
    title: "Loyalty Club",
    image: "",
    abstract: "Loyalty clubs play a crucial role in nurturing strong connections with your customers.",
    slug: "loyalty-club",
    description: "Building a loyal customer base not only fosters repeat business but also reduces the cost of acquiring new users from scratch by a remarkable 20%. Our focus is to go beyond mere product or service presentation and sales, and instead, we strive to motivate your customers to choose you time and again.\n" +
        "To achieve this, our loyalty club software places a strong emphasis on customer behavior analysis. We delve into crucial factors such as the frequency of customer visits, time intervals between visits, purchase amounts, duration of the last purchase, customer preferences, habits, and more. By gaining deep insights into these metrics, we can make informed decisions to encourage customers to make additional purchases or provide referrals. Furthermore, we believe in continually adapting and modifying the business model based on the unique interests, needs, and habits of each customer.\n" +
        "Even if some of your customers have temporarily shifted their loyalty to other brands, our retail loyalty programs can help you win them back. By offering personalized incentives, rewards, and exclusive benefits, we create a compelling reason for customers to re-engage with your brand. Our goal is to foster long-term relationships and turn customers into loyal fans who consistently choose your business over others.\n" +
        "Partner with Rezilens to unlock the power of loyalty and witness the positive impact it can have on your bottom line. Our loyalty solutions are designed to keep your customers engaged, satisfied, and coming back for more, ultimately driving growth and success for your business.",
    information:[
      {
        "title": "Features",
        "data": [
          "Reward Points",
          "Exclusive Discounts and Offers",
          "VIP Treatment",
          "Tiered Membership Levels",
          "Personalized Rewards",
          "Points Multipliers",
          "Referral Programs",
          "Enhanced Convenience",
          "Special Events and Experiences",
          "Personalized Communication",
          "Gamification Elements",
          "Partner Benefits",
          "Points Expiration Protection",
          "Data Insights and Personalization"
        ]
      }
    ]

  },
  {
    title: "Messenger App",
    image: "",
    abstract: "Messenger apps have revolutionized the way we communicate in the digital age.",
    slug: "messenger-app",
    description: "These versatile applications provide a convenient and instant means of connecting with others, whether it's friends, family, or colleagues. With a messenger app, you can send text messages, make voice and video calls, and share various forms of digital content seamlessly. These apps offer real-time communication, allowing you to engage in conversations effortlessly, regardless of geographical distance. Messenger apps have become an essential part of everyday life, providing a platform for efficient and effective communication, fostering stronger connections, and facilitating collaboration in both personal and professional settings.\n" +
        "At our company, we take pride in offering an exceptional messenger app that not only meets your communication needs but also provides advanced features and technical capabilities. Our app is built with a focus on security, ensuring that your messages and calls are protected with end-to-end encryption, keeping your conversations private and secure. With our messenger app, you can enjoy high-quality voice and video calls, enabling crystal-clear communication with your contacts. We also offer a seamless file-sharing feature, allowing you to exchange documents, photos, and videos with ease. Additionally, our app supports group chats, making it convenient to connect and collaborate with multiple individuals simultaneously. With a user-friendly interface and customizable options, our messenger app provides a personalized and enjoyable messaging experience. Stay connected, collaborate effortlessly, and experience the power of our advanced messenger app for all your communication needs.\n",
    information: [
      {
        "title": "Features",
        "data": [
          "Instant Messaging",
          "Multimedia Support",
          "Group Chat",
          "Voice and Video Calls",
          "Encryption and Privacy",
          "Notifications",
          "Contact Management",
          "Personalization and Customization",
          "Privacy and Security",
          "User-Friendly Interface",
          "Cross-Platform Compatibility"
        ]
      }
    ]

  },
  {
    title: "Location Based",
    image: "",
    abstract: "Location-based platforms have revolutionized the way businesses interact with their customers by leveraging real-time geolocation data.",
    slug: "location-based",
    description: "These platforms utilize advanced technology to provide customized services and relevant information based on a user's specific location. Location-based solutions are now integral across various industries, including logistics and transportation, retail, travel and leisure, automotive, security, and the development of smart cities. By harnessing the power of location data, businesses can enhance their operations, optimize resource allocation, and offer personalized experiences that cater to the specific needs and preferences of their customers.\n" +
        "At our company, we specialize in creating dynamic and innovative location-based platforms that can propel your business forward. With our expertise in location-based services (LBS), we offer a comprehensive range of solutions tailored to meet your specific requirements. Our team of experienced professionals excels in developing cutting-edge applications that leverage real-time geolocation data to provide seamless navigation, personalized marketing campaigns, asset tracking, and more. We have a proven track record of implementing indoor and outdoor tracking systems, utilizing wireless networks, cellular-based positioning, and GPS technologies. Whether you need a low-cost location-aware app or a large-scale enterprise system, we have the knowledge and skills to deliver exceptional results. Partner with us, and we will guide you through every stage of the product development lifecycle, ensuring your location-based platform is a success. Experience the transformative power of location-based technology with our innovative solutions.",
    information: [
      {
        "title": "Features",
        "data": [
          "Geolocation Services",
          "GPS Integration",
          "Mapping and Navigation",
          "Geofencing",
          "Proximity Detection",
          "Real-time Location Tracking",
          "Reverse Geocoding",
          "Based on Google Maps/OpenStreetMaps",
          "Increased Customer Engagement"
        ]
      }
    ]

  },
])
</script>
