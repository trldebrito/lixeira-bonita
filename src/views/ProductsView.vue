<script setup>
import WhatsAppButton from '../components/WhatsAppButton.vue';

// Simulando uma lista de produtos. 
// No futuro, isso pode vir de uma API ou arquivo de dados.
const products = [
  { id: 1, name: 'mp70l', image: '1.jpg', title: 'MP 70L' }, // Ajuste o nome do arquivo conforme sua pasta
  { id: 2, name: 'mp70l-tampa-aberta', image: '1.jpg', title: 'MP 70L - Tampa Aberta'},
  { id: 3, name: 'mps40l', image: '1.jpg', title: 'MPS 40L'},
  { id: 4, name: 'mps40l-tampa-aberta', image: '1.jpg', title: 'MPS 40L - Tampa Aberta'},
  { id: 5, name: 'mph90l', image: '1.jpg', title: 'MPH 90L'},
  { id: 6, name: 'mps90l-infectante', image: '1.jpg', title: 'MPS 90L - Infectante'},
  { id: 7, name: 'mps90l-tampa-baixa', image: '1.jpg', title: 'MPS 90L - Tampa Baixa'},
  { id: 8, name: 'mps90l', image: '1.jpg', title: 'MPS 90L'},
  { id: 9, name: 'mp130l', image: '1.jpg', title: 'MP 130L'},
  { id: 10, name: 'mp170l', image: '1.jpg', title: 'MP 170L'},
  { id: 11, name: 'mp350l', image: '1.jpg', title: 'MP 350L'},
  { id: 12, name: 'mp600l', image: '1.jpg', title: 'MP 600L'},
  { id: 13, name: 'mp1100l', image: '1.jpg', title: 'MP 1100L'},
  { id: 14, name: 'mp1500l', image: '1.jpg', title: 'MP 1500L'},
  { id: 15, name: 'seletiva-2un-70l', image: '1.jpg', title: 'Seletiva 2Un 70L'},
  { id: 16, name: 'seletiva-3un-70l', image: '1.jpg', title: 'Seletiva 3Un 70L'},
  // ... continue para os demais
]

const getImageUrl = (product) => {
  return new URL(`../assets/lixeiras/${product.name}/${product.image}`, import.meta.url).href
}
</script>

<template>
  <div class="bg-[#F0F2F5] min-h-screen pb-20 font-sans pt-12">
    <div class="max-w-[1200px] mx-auto px-6">
      
      <h1 class="text-4xl md:text-6xl font-atyp-medium text-black uppercase mb-16 tracking-tight">
        LIXEIRAS PARA FAMÍLIAS
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
        
        <RouterLink 
          v-for="product in products" 
          :key="product.id"
          :to="`/produto/${product.id}`" 
          class="group block"
        >
          <div class="aspect-square bg-white border border-gray-300 mb-6 relative flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#1d824c] group-hover:shadow-xl">
             
             <img 
               :src="getImageUrl(product)" 
               :alt="product.name"
               class="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
             />
            
          </div>

          <h3 class="text-xl font-atyp-medium text-black text-center group-hover:text-[#1d824c] transition-colors uppercase tracking-wide">
            {{ product.title }}
          </h3>

          <div class="mt-2 flex justify-center">
            <span class="font-atyp text-sm font-semibold text-[#1d824c] opacity-0 group-hover:opacity-100 transition-opacity">
              VER DETALHES →
            </span>
          </div>
        </RouterLink>

      </div>
    </div>
  </div>

  <WhatsAppButton />
</template>