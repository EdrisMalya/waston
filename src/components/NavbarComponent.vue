<template>
  <div class="bg-[rgba(0,0,0,.4)] fixed w-full top-0" style="z-index: 999">
    <div class="flex items-center justify-between py-5 md:px-24 px-6">
      <div class="flex items-center">
        <q-img class="w-[150px] md:w-[140px]" :src="db.logo" />
        <p class="text-white text-xl">Aircraft Sales and Repair</p>
      </div>
      <links-component />
    </div>
  </div>
</template>
<script>
import LinksComponent from "components/LinksComponent.vue";
import { db } from "assets/db";
export default {
  components: { LinksComponent },
  setup() {
    return {
      db,
    };
  },
};
</script>
