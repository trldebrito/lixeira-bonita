<script setup>
import guaranteImg from '../assets/selo-garantia.png' 
</script>

<template>
  <section class="py-20 md:py-32 bg-[#E9EEF2] flex items-center justify-center">
    
    <div class="max-w-[1200px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-20">
      
      <div class="w-full md:w-5/12 flex justify-center md:justify-end shrink-0">
        <img 
          :src="guaranteImg" 
          alt="Selo 10 Anos de Garantia" 
          class="w-72 md:w-full max-w-[450px] object-contain drop-shadow-2xl" 
        />
      </div>

      <div class="w-full md:w-7/12 text-left flex flex-col justify-center">
        
        <h2 class="text-4xl md:text-[54px] font-bold text-black leading-[1.15] tracking-tight uppercase mb-8">
          VOCÊ TERÁ <span class="text-[#3ca85c]">10 ANOS</span> <br> 
          DE GARANTIA.
        </h2>

        <div class="space-y-6 text-black text-base md:text-[18px] font-normal leading-relaxed max-w-[650px]">
          <p>
            Na Lixeira Bonita, acreditamos tanto na qualidade e durabilidade dos nossos produtos que oferecemos 10 anos de garantia na fibra e na dobradiça
          </p>
          <p>
            Confiamos no que fazemos e queremos que você também tenha essa confiança ao escolher nossas lixeiras. Com nossa garantia, você pode ter certeza de que está investindo em uma solução, prática e feita com carinho.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>