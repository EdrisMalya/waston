<template>
  <q-drawer
    v-model="drawer"
    :width="300"
    :breakpoint="700"
    elevated
    class="bg-black text-white right-0 text-center p-3"
  >
    <div class="p-5">
      <q-img :src="db.logo" class="w-[200px]" />
    </div>
    <div class="mt-3">
      <router-link v-for="link in db.links" :key="link.link" :to="link.link">
        <div
          class="flex items-center text-lg space-x-2 my-1 px-5 py-2 rounded-lg cursor-pointer hover:bg-gray-600"
          :class="$route.path === link.link && ' bg-white text-black'"
        >
          <q-icon name="chevron_right" size="sm" />
          <p>{{ link.label }}</p>
        </div>
      </router-link>
    </div>
  </q-drawer>
  <div class="text-white">
    <q-btn
      flat
      icon="menu"
      class="visible lg:!hidden"
      round
      @click="handelDrawer"
    />
    <div class="flex items-center space-x-8 hidden lg:!flex">
      <router-link :to="link.link" :key="link.link" v-for="link in db.links">
        <p
          class="text-lg"
          :class="$route.path === link.link && 'border-b-[4px]'"
        >
          {{ link.label }}
        </p>
      </router-link>
      <button
        v-ripple
        class="bg-blue-500 shadow-blue-500 shadow py-5 px-8 rounded-full"
      >
        Call +1 23211 2123123
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { db } from "assets/db";

export default defineComponent({
  name: "LinksComponent",
  setup() {
    return {
      db,
    };
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    handelDrawer() {
      this.drawer = !this.drawer;
    },
  },
});
</script>
