<template>
  <q-card class="-mt-12 shadow-lg p-8 rounded-3xl max-w-[80%] mx-auto">
    <q-card-section class="grid grid-cols-3 gap-12">
      <div class="text-center" v-for="srv in db.service_cards" :key="srv.icon">
        <q-icon :name="srv.icon" size="4.4rem" color="primary" />
        <p class="text-xl mt-5">{{ srv.title }}</p>
        <p class="mt-4 text-gray-500 font-semibold">
          {{ srv.description }}
        </p>
      </div>
    </q-card-section>
  </q-card>
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
