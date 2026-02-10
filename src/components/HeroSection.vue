<script setup>
import headerLixeiraImg from '../assets/header-lixeira.png' 
import divSection from '../assets/section-div.png' 
</script>

<template>
  <section class="relative h-[650px] flex items-center overflow-hidden">
    
    <div class="absolute inset-0 z-0">
      <img 
        :src="headerLixeiraImg" 
        alt="Lixeira Bonita no Jardim" 
        class="w-full h-full object-cover object-center"
      >
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 w-full h-full items-center">
      
      <div class="text-white space-y-8 pl-0 md:pl-4">
        <h1 class="text-5xl md:text-6xl leading-tight font-light tracking-wide">
          Lixeiras que unem <br>design, 
          
          <span class="font-serif italic font-normal">resistência</span> <br>
          
          e 
          
          <span class="font-serif italic font-normal">praticidade</span>
        </h1>
        
        <p class="text-lg text-gray-100 max-w-md font-light">
          A solução ideal para quem quer organização, higiene e durabilidade no dia a dia.
        </p>

        <button class="group bg-[#155e42] hover:bg-[#0e3a28] text-white pl-8 pr-2 py-2 rounded-full font-medium text-lg transition-all shadow-lg flex items-center gap-4 mt-8">
          Comprar Minha Lixeira 
          <div class="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="3" 
                stroke="#1d824c" 
                class="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
        </button>
      </div>

      <div></div>

    </div>

  </section>

  <img :src="divSection" alt="Divisão" class="w-full object-cover object-center" />
</template>