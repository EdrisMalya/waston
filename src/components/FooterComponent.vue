<template>
  <div class="p-24 bg-blue-500">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-5 gap-16">
        <div class="col-span-2">
          <q-img class="w-[150px] md:w-[200px] lg:w-[300px]" :src="db.logo" />
          <p class="text-white text-xl">
            "Discover excellence in aviation with WatsonBroker. From aircraft
            sales and inspections to custom interiors and financing solutions,
            we're your trusted partner in the skies.
          </p>
        </div>
        <div>
          <p class="text-2xl text-white">Explore</p>
          <ul class="mt-5">
            <li
              class="text-white text-lg"
              v-for="link in db.links"
              :key="link.link"
            >
              {{ link.label }}
            </li>
          </ul>
        </div>
        <div>
          <p class="text-2xl text-white">Links</p>
          <ul class="mt-5">
            <li
              class="text-white text-lg"
              v-for="link in db.links"
              :key="link.link"
            >
              {{ link.label }}
            </li>
          </ul>
        </div>
        <div class="text-white">
          <p class="text-2xl text-white">Contacts</p>
          <div class="mt-5">
            <p class="text">
              <q-icon name="phone" />
              <span class="ml-1">{{ db.contact }}</span>
            </p>
            <p>
              <q-icon name="email" />
              <span class="ml-1">{{ db.email }}</span>
            </p>
            <p>
              <q-icon name="location_on" />
              <span class="ml-1">{{ db.address }}</span>
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
