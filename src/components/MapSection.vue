<script setup>
// Substitua pelos seus imports reais
import mapaLixeiras from '../assets/mapa-lixeiras.png' 
import logoIcone from '../assets/logo-mapa.png' // Ícone quadrado verde escuro
</script>

<template>
  <section class="py-20 bg-[#E9EEF2] flex justify-center">
    
    <div class="bg-white rounded-[40px] shadow-sm max-w-6xl w-full relative p-8 md:p-16 mt-10">
      
      <div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0e3a28] w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ">
        <img v-if="logoIcone" :src="logoIcone" alt="Icone" />
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-10 h-10">
           <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
           <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      <div class="flex flex-col md:flex-row items-center gap-12 mt-6">
        
        <div class="w-full md:w-1/2 flex justify-center">
            <img :src="mapaLixeiras" alt="Mapa do Brasil Lixeira Bonita" class="w-full max-w-sm object-contain" />
        </div>

        <div class="w-full md:w-1/2 text-left space-y-6">
          
          <h2 class="text-3xl md:text-4xl font-bold text-black uppercase leading-tight tracking-tight">
              Lixeira Bonita <br> Perto de Você
          </h2>
          
          <p class="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
              Nós temos pontos de revenda perto de você.
              Entre em contato e descubra um vendedor pertinho de você.
          </p>

          <button class="bg-gradient-to-r from-[#1d6f42] to-[#268e54] text-white pl-6 pr-1 py-1.5 rounded-full text-xs font-bold transition hover:shadow-lg flex items-center gap-3 w-fit">
              Falar Com Revendedor 
              <div class="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#1d6f42]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
              </div>
          </button>

        </div>

      </div>
    </div>
  </section>
</template>