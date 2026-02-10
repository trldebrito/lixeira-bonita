<script setup>
// Simulando uma lista de produtos. 
// No futuro, isso pode vir de uma API ou arquivo de dados.
const products = [
  { id: 1, name: 'Lixeira MPCE' },
  { id: 2, name: 'Lixeira MP 70' },
  { id: 3, name: 'Lixeira MPS 70' },
  { id: 4, name: 'Lixeira MP 150' },
  { id: 5, name: 'Lixeira Basculante' },
  { id: 6, name: 'Lixeira Seletiva' },
  { id: 7, name: 'Lixeira Container' },
  { id: 8, name: 'Lixeira Papeleira' },
  { id: 9, name: 'Lixeira Externa' },
]
</script>

<template>
  <div class="bg-[#F0F2F5] min-h-screen pb-20 font-sans pt-12">
    <div class="max-w-[1200px] mx-auto px-6">
      
      <h1 class="text-4xl md:text-6xl font-bold text-black uppercase mb-16 tracking-tight">
        LIXEIRAS PARA FAMÍLIAS
      </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
        
        <RouterLink 
          v-for="product in products" 
          :key="product.id"
          :to="`/produto/${product.id}`" 
          class="group block"
        >
          <div class="aspect-square bg-white border border-gray-400 mb-6 relative flex items-center justify-center transition-all duration-300 group-hover:border-black group-hover:shadow-md">
             <svg class="absolute inset-0 w-full h-full text-gray-400" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" stroke-width="0.5" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" stroke-width="0.5" />
            </svg>
            
            </div>

          <h3 class="text-xl font-bold text-black text-center group-hover:text-[#1d824c] transition-colors">
            {{ product.name }}
          </h3>
        </RouterLink>

      </div>

    </div>
  </div>
</template>