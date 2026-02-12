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
  <section class="font-sans w-full">
    
    <div class="bg-[#F0F2F5] pt-24 pb-20 px-6 text-center">
      <div class="max-w-5xl mx-auto flex flex-col items-center">
        
        <div class="flex gap-8 mb-30 items-center justify-center">
          <img :src="divImg" class="w-full h-full object-contain" alt="Divisão" />
        </div>

        <h2 class="text-5xl md:text-7xl font-bold text-black uppercase leading-none tracking-tight">
          SEJA UMA REVENDA <br>
          LIXEIRA BONITA
        </h2>
      </div>
    </div>

    <div class="relative w-full bg-[#0e3a28] py-0">
      
      <div class="max-w-[1200px] mx-auto">
        
        <div class="grid grid-cols-1 md:grid-cols-3 w-full pb-32">
          
          <div class="relative h-[650px]">
            <img :src="imgCenario1" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/60"></div>
            
            <div class="absolute inset-0 px-10 md:px-14 pt-40 flex flex-col justify-start items-start text-white z-10">
              <div class="w-12 h-12 mb-6 flex items-center justify-start">
                 <img :src="imgCenario6" class="w-full h-full object-contain" alt="Ícone Qualidade" />
              </div>
              <h3 class="text-4xl font-bold uppercase mb-8 leading-[1.1] tracking-tight">QUALIDADE E <br> DURABILIDADE</h3>
              <p class="text-xl font-light leading-relaxed text-gray-100">
                Lixeiras fabricadas desde 2004 estão em pleno funcionamento e podem ser reparadas em sua pintura interna, cordões e dobradiças.
              </p>
            </div>
          </div>

          <div class="relative h-[650px] border-l border-r border-white/20 md:border-y-0">
            <img :src="imgCenario2" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/60"></div>
            
            <div class="absolute inset-0 px-10 md:px-14 pt-40 flex flex-col justify-start items-start text-white z-10">
              <div class="w-12 h-12 mb-6 flex items-center justify-start">
                 <img :src="imgCenario5" class="w-full h-full object-contain" alt="Ícone Revenda" />
              </div>
              <h3 class="text-4xl font-bold uppercase mb-8 leading-[1.1] tracking-tight">REVENDAS</h3>
              <p class="text-xl font-light leading-relaxed text-gray-100">
                Nossos produtos possuem ótimo valor para revenda, não é perecível e asseguramos aos nossos revendedores produtos com garantia em sua loja.
              </p>
            </div>
          </div>

          <div class="relative h-[650px]">
            <img :src="imgCenario3" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/60"></div>
            
            <div class="absolute inset-0 px-10 md:px-14 pt-40 flex flex-col justify-start items-start text-white z-10">
              <div class="w-12 h-12 mb-6 flex items-center justify-start">
                 <img :src="imgCenario4" class="w-full h-full object-contain" alt="Ícone Satisfação" />
              </div>
              <h3 class="text-4xl font-bold uppercase mb-8 leading-[1.1] tracking-tight">SATISFAÇÃO DE <br> NOSSOS CLIENTES</h3>
              <p class="text-xl font-light leading-relaxed text-gray-100">
                Fácil de higienizar. É um objeto ornamental quando mantida limpa. Pode ser limpa até com solventes.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
         <RouterLink to="/seja-parceiro" class="bg-[#22c55e] hover:bg-[#15803d] text-white pl-8 pr-2 py-2 rounded-full font-bold text-xs tracking-widest transition shadow-xl flex items-center gap-4 uppercase">
            QUERO SER UMA REVENDA
            <div class="w-9 h-9 bg-white rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#22c55e" class="w-4 h-4">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
               </svg>
            </div>
         </RouterLink>
      </div>

    </div>
    
  </section>
</template>