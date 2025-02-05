<script setup>
import AboutSection from '@/components/AboutSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FirstSection from '@/components/FirstSection.vue';
import PortfolioSection from '@/components/PortfolioSection.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
    <FirstSection />
    <AboutSection :partners="currentPartners" :project-done="currentProjectsDone" :happy-clients="currentHappyClients"
        :meetings="currentMeetings" />
    <PortfolioSection :initialImages="initialImages" :initialDescriptions="initialDescriptions" />
    <ContactSection />
    <Footer />
</template>



<style>
@import "../assets/main.css";
</style>