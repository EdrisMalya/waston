<template>
  <div
    class="h-[100vh] bg-[rgba(0,0,0,.4)] absolute top-0 w-full flex items-center justify-center"
    style="z-index: 700"
  >
    <q-intersection transition="scale" transition-duration="2000">
      <div class="max-w-4xl text-white text-center drop-shadow-xl mt-24">
        <h3 class="text-7xl">{{ db.home.landing_title }}</h3>
        <q-intersection transition="jump-up" transition-duration="1500">
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
        </q-intersection>
      </div>
    </q-intersection>
  </div>
  <q-img style="height: 100vh" :src="db.home.banner_image" class="z-10" />
  <q-intersection transition="jump-dow" transition-duration="2000">
    <q-img
      src="~assets/airplne.png"
      class="-mt-[150px]"
      style="width: 100%; z-index: 999"
    />
  </q-intersection>
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
