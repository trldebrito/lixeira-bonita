<script setup>
import { ref } from 'vue'
import logoImg from '../assets/lixeira-bonita-logo.png' 

const isMobileOpen = ref(false)
</script>

<template>
  <nav class="bg-white py-6 px-8 shadow-sm sticky top-0 z-50 font-sans">
    
    <div class="max-w-[1400px] mx-auto flex justify-between items-center">
      
      <a href="/" class="flex-shrink-0 z-50 hover:opacity-80 transition-opacity">
        <img :src="logoImg" alt="Lixeira Bonita" class="h-12 w-auto object-contain" />
      </a>

      <div class="hidden md:flex items-center space-x-14 text-lg font-medium text-gray-700">
        
        <div class="relative group h-full flex items-center cursor-pointer py-2">
          <RouterLink to="/produtos" class="flex items-center gap-2 hover:text-[#114232] transition-colors focus:outline-none">
            Produtos
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mt-0.5 group-hover:rotate-180 transition-transform duration-200">
              <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </RouterLink>

          <div class="absolute top-full left-0 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
            <div class="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
              <a href="#" class="block px-6 py-3 hover:bg-gray-50 hover:text-[#114232] text-base">Lixeiras para Familias</a>
              <a href="#" class="block px-6 py-3 hover:bg-gray-50 hover:text-[#114232] text-base">Lixeiras para empresas e condomínios</a>
              <a href="#" class="block px-6 py-3 hover:bg-gray-50 hover:text-[#114232] text-base">Lixeiras para setores públicos</a>
            </div>
          </div>
        </div>

        <RouterLink to="/sobre" class="hover:text-[#114232] transition-colors">Sobre</RouterLink>
        <RouterLink to="/seja-parceiro" class="hover:text-[#114232] transition-colors">Seja Parceiro</RouterLink>
        <RouterLink to="/fale-conosco" class="hover:text-[#114232] transition-colors">Fale conosco</RouterLink>
      </div>
      
      <button @click="isMobileOpen = !isMobileOpen" class="md:hidden text-gray-800 focus:outline-none z-50 p-2">
        <svg v-if="!isMobileOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div v-if="isMobileOpen" class="fixed inset-0 top-[88px] bg-white z-40 flex flex-col items-center pt-10 space-y-8 md:hidden overflow-y-auto">
        <a href="#" class="text-xl font-medium text-gray-800">Produtos</a>
        <a href="#" class="text-xl font-medium text-gray-800">Sobre</a>
        <a href="#" class="text-xl font-medium text-gray-800">Seja Parceiro</a>
        <a href="#" class="text-xl font-medium text-gray-800">Fale conosco</a>
      </div>

    </div>
  </nav>
</template>