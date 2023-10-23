<template>
  <div
    class="h-[120vh] bg-[#F7F6F0]"
    style="background-image: url('src/assets/bg2.png')"
  >
    <div class="pt-32">
      <p class="text-center text-xl text-blue-500 font-bold">
        CUSTOMERS FEEDBACK
      </p>
      <h2 class="max-w-2xl mx-auto text-6xl text-center mt-6 font-bold">
        What they’re talking about our flight services
      </h2>
      <div class="max-w-5xl mt-24 mx-auto">
        <div class="grid grid-cols-2 gap-24">
          <div
            class="p-12 bg-white border-l-[4px] border-blue-500 relative shadow-xl"
          >
            <div class="flex items-center">
              <div
                class="w-[150px] h-[150px] absolute border rounded-full -ml-24 overflow-hidden shadow-xl"
                style="z-index: 999"
              >
                <q-img src="~assets/user.jpeg" class="w-full" />
              </div>
              <p class="text-xl text-gray-400 pl-24">
                "The attention to detail and level of service provided by
                WatsonBroker exceeded my expectations. Their meticulous aircraft
                inspections and top-notch repair services gave me confidence in
                my investment. I highly recommend WatsonBroker to anyone in need
                of reliable aviation solutions." - Sarah L., Delighted Client
              </p>
            </div>
            <div class="flex items-center justify-between">
              <div
                class="w-[70px] h-[70px] border bg-orange-500 rounded-full -ml-8 mt-5 text-white flex items-center justify-center"
              >
                <q-icon name="format_quote" size="xl" />
              </div>
              <div class="pt-5">
                <q-rating
                  v-model="model1"
                  max="5"
                  disable
                  size="2em"
                  icon="star_border"
                  icon-selected="star"
                  icon-half="star_half"
                />
              </div>
              <div class="pt-5 text-center">
                <p class="font-bold text-xl">Ahmad Edris</p>
                <p class="text-lg">Customer</p>
              </div>
            </div>
          </div>
          <div
            class="p-12 bg-white border-l-[4px] border-blue-500 relative shadow-xl"
          >
            <div class="flex items-center">
              <div
                class="w-[150px] h-[150px] absolute border rounded-full -ml-24 overflow-hidden shadow-xl"
                style="z-index: 999"
              >
                <q-img src="~assets/user.jpeg" class="w-full" />
              </div>
              <p class="text-xl text-gray-400 pl-24">
                "Working with WatsonBroker was an absolute pleasure. Their
                expertise in the aviation industry was evident from the start.
                They guided me through the entire process of acquiring my dream
                aircraft with professionalism and transparency. I couldn't be
                happier with the result!" - John T., Satisfied Customer
              </p>
            </div>
            <div class="flex items-center justify-between">
              <div
                class="w-[70px] h-[70px] border bg-orange-500 rounded-full -ml-8 mt-5 text-white flex items-center justify-center"
              >
                <q-icon name="format_quote" size="xl" />
              </div>
              <div class="pt-5">
                <q-rating
                  v-model="model1"
                  max="5"
                  disable
                  size="2em"
                  icon="star_border"
                  icon-selected="star"
                  icon-half="star_half"
                />
              </div>
              <div class="pt-5 text-center">
                <p class="font-bold text-xl">Ahmad Edris</p>
                <p class="text-lg">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model1: 5,
    };
  },
};
</script>
