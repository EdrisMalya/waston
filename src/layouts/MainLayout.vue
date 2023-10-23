<template>
  <q-layout>
    <navbar-component />
    <router-view />
    <footer-component />
  </q-layout>
</template>
<script>
import NavbarComponent from "components/NavbarComponent.vue";
import FooterComponent from "components/FooterComponent.vue";
export default {
  components: { FooterComponent, NavbarComponent },
};
</script>
