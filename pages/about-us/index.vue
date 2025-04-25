<template>
  <section>
    <div
        class="md:mx-16 lg:mx-16 xl:mx-16 mx-6 pb-10"
    >
      <div class="grid md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 gird-cols-1 gap-2 max-w-[1440px] mx-auto">

        <div class="block sm:hidden md:hidden lg:hidden xl:hidden">
          <div>
            <img
                src="../../static/main.png"
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
              ABOUT US
            </h1>
            <div class="text-white text-xl mt-10 line-clamp-4">
              {{abstract}}
            </div>

          </div>
        </div>
        <div class="hidden md:block lg:block xl:block">
          <div class="px-16 h-[460px] overflow-hidden">
            <img
                src="../../static/main.png"
                alt="rezilens"
                class="w-full scale-110"
            >
          </div>
        </div>

      </div>
    </div>


    <div
        class="bg-white"
    >
      <div class="relative w-full max-w-[1440px] mx-auto overflow-hidden">
        <img src="../../static/back-01.png" class="absolute w-full mb-16" alt="rezilens">
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
              <p class="text-justify mt-6 text-base leading-9 text-[#211952]" v-html="text">

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>

useSeoMeta({
  title: 'Rezilens - About us',
  ogTitle: 'Rezilens - About us',
  description: '',
  ogDescription: '',
  ogImage: '',
  twitterCard: 'summary_large_image',
})
const abstract = ref("Welcome to Veria Information Technology, your trusted partner in the ever-evolving world of software development.");
const text = ref('Established in 2007, we are a dynamic and forward-thinking company committed to delivering cutting-edge solutions to meet the diverse needs of our clients. With a team of experienced technical experts boasting over a decade of expertise in programming, software production, and consulting, we bring a wealth of knowledge and innovation to every project.\n' +
    'At Veria Information Technology, our mission is to go beyond just meeting our clients\' expectations; we strive to truly understand their unique requirements and deliver tailored solutions that drive their success. By leveraging our extensive industry experience and staying at the forefront of technological advancements, we harness the power of top-tier tools and resources to create efficient and effective solutions in the realm of information technology.\n' +
    'Transparency and accuracy are the cornerstones of our approach. We prioritize open communication and collaboration with our clients, ensuring that their goals and objectives remain at the forefront of our efforts. Our dedicated team is committed to providing operational suggestions and strategic guidance, empowering our clients to make informed decisions while optimizing their financial and time resources.\n' +
    'At Veria Information Technology, we are passionate about helping our clients unlock their full potential and achieve their goals. Whether it\'s developing innovative software solutions, enhancing information security, delivering online services, or providing comprehensive training, we are driven by a shared commitment to excellence. Join us on this exciting journey as we navigate the ever-changing landscape of technology and empower your business for long-term success.')
</script>