<script setup>
import logoImg from '../assets/lixeira-bonita-logo.png' 
</script>

<template>
  <nav class="bg-white py-5 px-6 shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      
      <a href="/" class="flex-shrink-0">
        <img :src="logoImg" alt="Lixeira Bonita" class="h-10 w-auto object-contain" />
      </a>

      <div class="hidden md:flex items-center space-x-8 text-[15px] font-medium text-gray-800">
        
        <div class="relative group cursor-pointer">
          <div class="flex items-center gap-1 hover:text-green-700 transition-colors">
            Produtos
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mt-0.5">
              <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>

        <a href="#" class="hover:text-green-700 transition-colors">Sobre</a>
        <a href="#" class="hover:text-green-700 transition-colors">Seja Parceiro</a>
        <a href="#" class="hover:text-green-700 transition-colors">Blog</a>
        <a href="#" class="hover:text-green-700 transition-colors">Fale conosco</a>
      </div>
      
      <button class="md:hidden text-gray-800 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

    </div>
  </nav>
</template>