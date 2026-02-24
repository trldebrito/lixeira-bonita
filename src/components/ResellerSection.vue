<script setup>
import imgCenario1 from '../assets/revenda-1.png'
import imgCenario2 from '../assets/revenda-2.png'
import imgCenario3 from '../assets/revenda-3.png'
import imgCenario4 from '../assets/revenda-4.png' 
import imgCenario5 from '../assets/revenda-5.png' 
import imgCenario6 from '../assets/revenda-6.png' 
import divImg from '../assets/divMd.png' 
</script>

<template>
  <section class="font-sans w-full bg-[#134e35]">

    <div class="bg-[#F0F2F5] px-6 text-center">
      <div class="max-w-5xl mx-auto flex flex-col items-center">
        <div class="flex gap-8 mb-30 h-10 items-center justify-center">
          <img :src="divImg" class="w-full h-full object-contain" alt="Divisão" />
        </div>
      </div>
    </div>
    
    <div class="pt-20 pb-16 px-6 text-center">
      <div class="max-w-4xl mx-auto flex flex-col items-center">
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-medium text-white uppercase leading-tight tracking-tight">
          SEJA UMA REVENDA <br>
          LIXEIRA BONITA
        </h2>
      </div>
    </div>

    <div class="relative w-full pb-24 px-6">
      
      <div class="max-w-[1200px] mx-auto">
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          
          <div class="relative h-[480px] rounded-[30px] overflow-hidden shadow-xl group">
            <img :src="imgCenario1" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-black/60"></div>
            
            <div class="absolute inset-0 p-8 md:p-10 flex flex-col justify-start items-start text-white z-10">
              <div class="w-10 h-10 mb-6 flex items-center justify-start">
                 <img :src="imgCenario6" class="w-full h-full object-contain" alt="Ícone Qualidade" />
              </div>
              <h3 class="text-xl md:text-2xl font-medium uppercase mb-4 leading-snug tracking-wide">QUALIDADE E <br> DURABILIDADE</h3>
              <p class="text-[15px] font-light leading-relaxed text-gray-200">
                Lixeiras fabricadas desde 2004 estão em pleno funcionamento e podem ser reparadas em sua pintura interna, cordões e dobradiças, além de serem polidas, sem custo algum ao proprietário que agendar e a conduzir até nossa fábrica. (Vide regulamento)
              </p>
            </div>
          </div>

          <div class="relative h-[480px] rounded-[30px] overflow-hidden shadow-xl group">
            <img :src="imgCenario2" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-black/60"></div>
            
            <div class="absolute inset-0 p-8 md:p-10 flex flex-col justify-start items-start text-white z-10">
              <div class="w-10 h-10 mb-6 flex items-center justify-start">
                 <img :src="imgCenario5" class="w-full h-full object-contain" alt="Ícone Revenda" />
              </div>
              <h3 class="text-xl md:text-2xl font-medium uppercase mb-4 leading-snug tracking-wide">REVENDAS</h3>
              <p class="text-[15px] font-light leading-relaxed text-gray-200">
                Nossos produtos possuem ótimo valor para revenda, não é perecível e asseguramos aos nossos revendedores produtos com garantia em sua loja.
              </p>
            </div>
          </div>

          <div class="relative h-[480px] rounded-[30px] overflow-hidden shadow-xl group">
            <img :src="imgCenario3" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-black/60"></div>
            
            <div class="absolute inset-0 p-8 md:p-10 flex flex-col justify-start items-start text-white z-10">
              <div class="w-10 h-10 mb-6 flex items-center justify-start">
                 <img :src="imgCenario4" class="w-full h-full object-contain" alt="Ícone Satisfação" />
              </div>
              <h3 class="text-xl md:text-2xl font-medium uppercase mb-4 leading-snug tracking-wide">SATISFAÇÃO DE <br> NOSSOS CLIENTES</h3>
              <p class="text-[15px] font-light leading-relaxed text-gray-200">
                Fácil de higienizar. É um objeto ornamental quando mantida limpa. Pode ser limpa até com solventes.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div class="flex justify-center mt-12 relative z-30">
         <RouterLink to="/seja-parceiro" class="group bg-[#3ba859] hover:bg-[#2e8b49] text-white pl-6 pr-2 py-2 rounded-full font-medium text-sm md:text-base tracking-wide transition-all shadow-xl flex items-center gap-4 uppercase">
            QUERO SER UMA REVENDA
            <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#3ba859" class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
               </svg>
            </div>
         </RouterLink>
      </div>

    </div>
    
  </section>
</template>