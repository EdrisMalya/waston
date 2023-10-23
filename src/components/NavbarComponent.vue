<template>
  <div class="bg-[rgba(0,0,0,.3)] fixed w-full" style="z-index: 999">
    <div class="flex items-center justify-between py-5 md:px-24 px-6">
      <div>
        <q-img class="w-[150px] md:w-[200px] lg:w-[300px]" :src="db.logo" />
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
