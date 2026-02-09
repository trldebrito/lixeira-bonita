<script setup>
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProductShowcase from './components/ProductShowcase.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import MapSection from './components/MapSection.vue'
import GuaranteeSection from './components/GuaranteeSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="font-sans text-gray-800">
    <AppNavbar />
    <HeroSection />
    <ProductShowcase />
    <BenefitsSection />
    <MapSection />
    <GuaranteeSection />
    <AppFooter />
  </div>
</template>