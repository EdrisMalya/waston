<template>
  <div
    class="h-[100vh] bg-[rgba(0,0,0,.4)] absolute top-0 w-full flex items-center justify-center"
    style="z-index: 700"
  >
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      class="max-w-4xl text-white text-center drop-shadow-xl mt-24"
    >
      <h3 class="text-7xl">{{ db.home.landing_title }}</h3>

      <p class="text-lg mt-5">
        {{ db.home.landing_paragraph }}
      </p>
      <router-link to="/about-us">
        <button
          class="text-2xl shadow-white border rounded-full py-4 px-12 my-8 font-bold hover:bg-white hover:text-black transition duration-150 hover:shadow-xl shadow-lg"
        >
          Learn More
        </button>
      </router-link>
    </div>
  </div>
  <q-img style="height: 100vh" :src="db.home.banner_image" class="z-10" />
  <q-img
    data-aos="fade-up"
    data-aos-duration="2000"
    src="/airplne.png"
    class="-mt-[100px]"
    style="width: 100%; z-index: 999"
  />
</template>
<script>
import { defineComponent } from "vue";
import { db } from "assets/db";

export default defineComponent({
  name: "BannerComponent",
  setup() {
    return {
      db,
    };
  },
});
</script>
