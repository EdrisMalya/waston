<template>
  <banner-component />
  <services-cards-component />
  <about-us-card-component />
  <contact-us-component />
  <services-component />
  <parallex-component />
  <customer-feedbaks />
  <subescribe-component />
</template>

<script>
import { defineComponent } from "vue";
import BannerComponent from "components/BannerComponent.vue";
import ServicesCardsComponent from "components/ServicesCardsComponent.vue";
import AboutUsCardComponent from "components/AboutUsCardComponent.vue";
import ContactUsComponent from "components/ContactUsComponent.vue";
import ServicesComponent from "components/ServicesComponent.vue";
import ParallexComponent from "components/ParallexComponent.vue";
import CustomerFeedbaks from "components/CustomerFeedbaks.vue";
import SubescribeComponent from "components/SubescribeComponent.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    SubescribeComponent,
    CustomerFeedbaks,
    ParallexComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutUsCardComponent,
    ServicesCardsComponent,
    BannerComponent,
  },
});
</script>
