<script setup>
// Substitua pelos seus imports reais
import mapaLixeiras from '../assets/mapa-lixeiras.png' 
import logoIcone from '../assets/logo-mapa.png' 
import logoSustentabilidade from '../assets/Logo-sustentabilidade.png' 
import floresta from '../assets/floresta.jpeg' 
</script>

<template>
  <section class="relative w-full bg-[#E9EEF2]">
    
    <div class="relative w-full pt-16 md:pt-24 pb-48 md:pb-56 overflow-hidden">
      
      <img 
        :src="floresta" 
        alt="Fundo Floresta" 
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div class="absolute inset-0 bg-black/20 z-0"></div>

      <div class="relative z-10 max-w-[1000px] mx-auto px-4 md:px-8">
        
        <div 
          class="border border-white/20 rounded-[40px] p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-14 shadow-2xl"
          style="background-color: rgba(5, 40, 20, 0.45); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);"
        >
          
          <div class="w-full md:w-auto flex justify-center shrink-0">
            <img 
              :src="logoSustentabilidade" 
              alt="Sustentabilidade Faça Sua Parte" 
              class="w-56 md:w-[260px] object-contain drop-shadow-md" 
            />
          </div>

          <div class="w-full md:flex-1 text-white text-base md:text-[17px] font-atyp leading-relaxed">
            O manejo correto do lixo é um gesto simples que gera um impacto enorme no meio ambiente. 
            Quando o descarte é feito com higiene, organização e responsabilidade, reduzimos a 
            contaminação do solo e da água, evitamos a proliferação de pragas. Cuidar do lixo é cuidar da 
            saúde, da qualidade de vida e do futuro de todos.
          </div>

        </div>
      </div>
    </div>

    <div class="relative z-20 max-w-[1000px] mx-auto px-4 md:px-8 -mt-28 md:-mt-36 pb-20">
      <div class="bg-white rounded-[40px] shadow-xl w-full relative p-8 md:p-16">
        
        <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
          <img v-if="logoIcone" :src="logoIcone" alt="Icone" class="w-50 h-50 object-contain" />
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-10 h-10">
             <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
             <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16 mt-6 md:mt-2">
          
          <div class="w-full md:w-1/2 flex justify-center">
              <img :src="mapaLixeiras" alt="Mapa do Brasil Lixeira Bonita" class="w-full max-w-[400px] object-contain" />
          </div>

          <div class="w-full md:w-1/2 text-left space-y-6">
            
            <h2 class="text-3xl md:text-4xl font-atyp-medium text-black leading-[1.1] tracking-tight">
                LIXEIRA BONITA <br> PERTO DE VOCÊ
            </h2>
            
            <p class="text-base text-gray-500 font-atyp leading-relaxed max-w-[320px]">
                Nós temos pontos de revenda perto de você.
                Entre em contato e descubra um vendedor pertinho de você.
            </p>

            <button class="group bg-[#155e42] hover:bg-[#0e3a28] text-white pl-6 pr-2 py-2 rounded-full text-base font-atyp transition-all shadow-md flex items-center gap-4 w-fit mt-4">
                Falar Com Revendedor 
                <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#155e42" class="w-4 h-4 transition-transform duration-300 group-hover:rotate-45">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </button>

          </div>

        </div>
      </div>
    </div>

  </section>
</template>