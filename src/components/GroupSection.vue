<script setup>
// Importando os logos conforme sua solicitação
import imgGroup1 from '../assets/grupo-1.png' // Motopam
import imgGroup2 from '../assets/grupo-2.png' // Selecta Design
import imgGroup3 from '../assets/grupo-3.png' // Motopratico
import imgGroup4 from '../assets/lixeira-bonita-logo.png' // Lixeira Bonita
</script>

<template>
  <section class="bg-[#F0F2F5] py-20 px-6 font-sans border-t border-gray-200">
    <div class="max-w-6xl mx-auto">
      
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-atyp-medium text-black uppercase tracking-wide mb-4">
          GRUPO MOTOPAM
        </h2>
        <div class="w-16 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
      </div>

      <div class="flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-8">
        
        <div class="w-40 md:w-48 h-20 flex items-center justify-center">
            <img :src="imgGroup1" alt="Motopam" class="max-w-full max-h-full object-contain" />
        </div>

        <div class="w-40 md:w-48 h-20 flex items-center justify-center">
            <img :src="imgGroup2" alt="Selecta Design" class="max-w-full max-h-full object-contain" />
        </div>

        <div class="w-40 md:w-48 h-20 flex items-center justify-center">
            <img :src="imgGroup3" alt="Motopratico" class="max-w-full max-h-full object-contain" />
        </div>

        <div class="w-40 md:w-48 h-20 flex items-center justify-center">
            <img :src="imgGroup4" alt="Lixeira Bonita" class="max-w-full max-h-full object-contain" />
        </div>

      </div>

    </div>
  </section>
</template>