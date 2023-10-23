<template>
  <q-layout>
    <navbar-component />
    <router-view />
  </q-layout>
</template>
<script>
import NavbarComponent from "components/NavbarComponent.vue";
export default {
  components: { NavbarComponent },
};
</script>
