<script setup>
import AboutSection from "@/components/AboutSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FirstSection from "@/components/FirstSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, ref } from "vue";
import store from "@/store";

const isFooterVisible = ref(true);

const closeFooter = () => {
  console.log("arec");
  isFooterVisible.value = false;
};


</script>

<template>
  <p>{{ message }}</p>
  <FirstSection />
  <AboutSection
    :partners="currentPartners"
    :project-done="currentProjectsDone"
    :happy-clients="currentHappyClients"
    :meetings="currentMeetings"
  />
  <PortfolioSection
    :initialImages="initialImages"
    :initialDescriptions="initialDescriptions"
  />
  <ContactSection />
  <Footer
    v-if="isFooterVisible"
    @close-footer="closeFooter"
    @esiminch="
      () => {
        console.log(12);
      }
    "
  />
</template>

<style>
@import "../assets/main.css";
</style>
