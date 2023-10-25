<template>
  <div class="mt-32 max-w-[80%] mx-auto">
    <div class="grid grid-cols-2 gap-32">
      <div>
        <p class="text-xl text-gray-500">Welcome to Watson Group</p>
        <p class="text-5xl font-bold mt-5">{{ db.get_to_know.title }}</p>
        <p class="text-xl text-gray-700 mt-5">
          {{ db.get_to_know.description }}
        </p>
        <q-btn
          label="About us"
          class="mt-12"
          size="lg"
          color="primary"
          to="/about-us"
          outline
        />
      </div>
      <div>
        <div class="mt-16 relative">
          <div
            class="p-5 border-2 border-orange-500 rounded-3xl border-black h-[35vh] ml-12"
          />
          <div
            class="absolute top-5 w-[95%] overflow-hidden rounded-3xl shadow-xl"
          >
            <q-img src="/image-home-1.jpg" class="w-full" />
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
