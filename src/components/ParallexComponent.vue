<template>
  <div class="q-pa-md mt-[200px]">
    <q-parallax :height="200" :speed="0.5" class="rounded-xl">
      <template v-slot:media>
        <img :src="db.parallex.image" />
      </template>
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-4 gap-24 text-white">
          <div
            class="text-center"
            v-for="customer in db.parallex.items"
            :key="customer.name"
          >
            <q-icon :name="customer.icon" size="xl" />
            <p class="text-xl">{{ customer.name }}</p>
            <p class="text-3xl">{{ customer.number }}</p>
          </div>
        </div>
      </div>
    </q-parallax>
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
