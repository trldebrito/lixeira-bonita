<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router' // Importante
</script>

<template>
  <div class="font-sans text-gray-800">
    <AppNavbar />
    
    <RouterView />
    
    <AppFooter />
  </div>
</template>