<script setup>
import guaranteImg from '../assets/selo-garantia.png' 
</script>

<template>
  <section class="py-20 bg-gray-100">
    <div class="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
      <div class="relative h-64 flex-shrink-0">
        <div class="absolute inset-0 rounded-full opacity-20 animate-pulse"></div>
        <img :src="guaranteImg" alt="Selo de Garantia" class="w-full h-full object-cover object-center" />
      </div>

      <div class="text-left">
        <h2 class="text-6xl md:text-4xl font-semibold text-black tracking-tight uppercase font-serotiva">
          Você terá <span class="text-green-600">10 anos</span> <br> de garantia.
        </h2>

        <p class="text-gray-600 mb-4">
            Na Ali Variedades, acreditamos tanto na qualidade e durabilidade dos nossos produtos que oferecemos 10 anos de garantia.
        </p>
        <p class="text-gray-600">
            Confiamos no que fazemos e queremos que você também tenha essa confiança ao escolher nossas lixeiras.
        </p>
      </div>
    </div>
  </section>
</template>