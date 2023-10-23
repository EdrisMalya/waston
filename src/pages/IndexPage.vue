<template>
  <banner-component />
  <services-cards-component />
  <about-us-card-component />
  <contact-us-component />
  <services-component />
  <parallex-component />
  <div class="p-32"></div>
</template>

<script>
import { defineComponent } from "vue";
import BannerComponent from "components/BannerComponent.vue";
import ServicesCardsComponent from "components/ServicesCardsComponent.vue";
import AboutUsCardComponent from "components/AboutUsCardComponent.vue";
import ContactUsComponent from "components/ContactUsComponent.vue";
import ServicesComponent from "components/ServicesComponent.vue";
import ParallexComponent from "components/ParallexComponent.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    ParallexComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutUsCardComponent,
    ServicesCardsComponent,
    BannerComponent,
  },
});
</script>
