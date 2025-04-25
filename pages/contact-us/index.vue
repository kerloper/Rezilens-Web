<template>
  <section>
    <div
        class="bg-white"
    >
      <div class="relative w-full h-[75vh]">
        <div class=" ">
          <div
              class="grid grid-cols-8 gap-2 md:px-16 lg:px-16 xl:px-16 p-6 relative"
          >
            <div
                class="col-span-8"
            >
              <div class="grid grid-cols-6 pb-36">
                <div class="col-span-6">
                  <h3
                      class="text-2xl text-[#211952]"
                  >
                    Contact Info
                  </h3>
                  <div>
                    <p class="py-3 border-gray-400 border-b-2">
                      <strong>Email:</strong> info@rezilensinfotech.com
                    </p>
                    <div class="grid grid-cols-6 gap-4">
                      <div class="grid md:col-span-3 lg:col-span-3 xl:col-span-2 col-span-6 my-2 bg-white rounded-xl transform transition-all duration-300 shadow-lg hover:shadow-2xl">
                        <!-- Image -->
                        <div class="grid grid-cols-5">
                          <div
                              class="col-span-2 relative"
                          >
                            <div
                                class="w-32 h-32 absolute top-0 justify-start align-top"
                            >
                              <img
                                  class="absolute top-0 rounded-tl-xl rounded-br-xl"
                                  src="../../static/flags/uae.jpg"
                                  alt=""
                              >
                            </div>
                          </div>
                          <div
                              class="col-span-3"
                          >
                            <div class="p-2">
                              <!-- Heading -->
                              <h2 class="font-bold text-lg mb-2 ">
                                UAE Department
                              </h2>
                              <!-- Description -->
                              <p class="text-sm text-gray-600">
                                Office No.5, King Khalifa Sultan, Jaber Al Mutaiwee, Oud Metha, Bur Dubai, Dubai, UAE
                              </p>
                            </div>
                            <!-- CTA -->
                            <div class="m-2">
                              +971 56 7272672
                            </div>
                          </div>
                        </div>

                      </div>
                      <div class="grid md:col-span-3 lg:col-span-3 xl:col-span-2 col-span-6 my-2 bg-white rounded-xl transform transition-all duration-300 shadow-lg hover:shadow-2xl">
                        <!-- Image -->
                        <div class="grid grid-cols-5">
                          <div
                              class="col-span-2 relative"
                          >
                            <div
                                class="w-32 h-32 absolute top-0 justify-start align-top"
                            >
                              <img
                                  class="absolute top-0 rounded-tl-xl rounded-br-xl"
                                  src="../../static/flags/chine.jpg"
                                  alt=""
                              >
                            </div>
                          </div>
                          <div
                              class="col-span-3"
                          >
                            <div class="p-2">
                              <!-- Heading -->
                              <h2 class="font-bold text-lg mb-2 ">
                                Chine Department
                              </h2>
                              <!-- Description -->
                              <p class="text-sm text-gray-600">
                                18th Fl, SCO Trade Center, Changjiang Road No.3, SCODA, Qingdao, Shandong Province, P.R.C
                              </p>
                            </div>
                            <!-- CTA -->
                            <div class="m-2">
                              +86 132 5684 0902
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>


                  </div>
                </div>
              </div>











            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>

useSeoMeta({
  title: 'Rezilens - Contact Us',
  ogTitle: 'Rezilens - Contact Us',
  description: '',
  ogDescription: '',
  ogImage: '',
  twitterCard: 'summary_large_image',
})
const text = ref('Welcome to Veria Information Technology, your trusted partner in the ever-evolving world of software development. Established in 2015, we are a dynamic and forward-thinking company committed to delivering cutting-edge solutions to meet the diverse needs of our clients. With a team of experienced technical experts boasting over a decade of expertise in programming, software production, and consulting, we bring a wealth of knowledge and innovation to every project.\n' +
    'At Veria Information Technology, our mission is to go beyond just meeting our clients\' expectations; we strive to truly understand their unique requirements and deliver tailored solutions that drive their success. By leveraging our extensive industry experience and staying at the forefront of technological advancements, we harness the power of top-tier tools and resources to create efficient and effective solutions in the realm of information technology.\n' +
    'Transparency and accuracy are the cornerstones of our approach. We prioritize open communication and collaboration with our clients, ensuring that their goals and objectives remain at the forefront of our efforts. Our dedicated team is committed to providing operational suggestions and strategic guidance, empowering our clients to make informed decisions while optimizing their financial and time resources.\n' +
    'At Veria Information Technology, we are passionate about helping our clients unlock their full potential and achieve their goals. Whether it\'s developing innovative software solutions, enhancing information security, delivering online services, or providing comprehensive training, we are driven by a shared commitment to excellence. Join us on this exciting journey as we navigate the ever-changing landscape of technology and empower your business for long-term success.')
</script>