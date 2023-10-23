<template>
  <div class="mt-32">
    <h2 class="text-center text-xl text-blue-400">
      {{ db.services.sm_title }}
    </h2>
    <h2 class="text-6xl max-w-2xl text-center mx-auto mt-6 font-semibold">
      {{ db.services.lg_title }}
    </h2>
    <div class="p-8 grid grid-cols-4 gap-8 mt-5">
      <div class="relative" v-for="srv in db.services.list" :key="srv.image">
        <q-img :src="srv.image" />
        <div class="w-[93%] p-5 absolute -bottom-24 bg-white shadow">
          <div class="relative">
            <button class="p-3 bg-blue-400 text-white absolute right-0 -top-10">
              <q-icon name="chevron_right" size="sm" />
            </button>
            <p class="text-blue font-semibold text-lg">We offer</p>
            <p class="text-2xl font-bold">{{ srv.title }}</p>
            <p>
              {{ srv.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "assets/db";

export default {
  setup() {
    return {
      db,
    };
  },
};
</script>
