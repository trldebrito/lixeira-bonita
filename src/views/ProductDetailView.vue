<script setup>
import { ref } from 'vue'

// Se tiver as fotos reais, importe aqui.
// import imgMp70 from '../assets/lixeira-mp70.png'

const mainImage = ref(0) // Índice da foto selecionada

// Dados do produto (Hardcoded conforme a imagem)
const product = {
  name: 'Lixeira MP 70',
  material: 'Fibra de vidro.',
  prazo: '15 dias úteis.',
  peso: '2,5kg',
  medidas: '27 X 59 X 28',
  images: [
    '', // Placeholder 1
    '', // Placeholder 2
    ''  // Placeholder 3
  ]
}
</script>

<template>
  <div class="bg-[#F0F2F5] min-h-screen pb-20 font-sans pt-12">
    <div class="max-w-[1100px] mx-auto px-6">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div>
          
          <div class="aspect-square bg-white border border-gray-400 mb-6 relative flex items-center justify-center">
             <svg class="absolute inset-0 w-full h-full text-gray-400" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" stroke-width="0.5" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" stroke-width="0.5" />
            </svg>
            </div>

          <div class="grid grid-cols-3 gap-4 mb-10">
            <div v-for="i in 3" :key="i" class="aspect-square bg-white border border-gray-400 relative cursor-pointer hover:border-black transition">
                 <svg class="absolute inset-0 w-full h-full text-gray-400" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" stroke-width="0.5" />
                    <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" stroke-width="0.5" />
                </svg>
            </div>
          </div>

          <h1 class="text-4xl font-bold text-black mb-6 tracking-tight">
            {{ product.name }}
          </h1>

          <div class="space-y-1 text-black text-lg">
            <p><span class="font-medium">Material:</span> {{ product.material }}</p>
            <p><span class="font-medium">Prazo de produção:</span> {{ product.prazo }}</p>
            <p><span class="font-medium">Peso:</span> {{ product.peso }}</p>
            <p><span class="font-medium">Medidas:</span> {{ product.medidas }}</p>
          </div>

        </div>

        <div class="bg-white rounded-[40px] p-8 md:p-10 shadow-sm sticky top-24">
            <form class="space-y-5">
                
                <div>
                    <label class="block font-bold text-black mb-2 pl-1 text-[15px]">Nome</label>
                    <input 
                      type="text" 
                      placeholder="João Batista..." 
                      class="w-full bg-[#D1D5DB] rounded-full px-6 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-green-500 transition placeholder-gray-500/70"
                    >
                </div>

                <div>
                    <label class="block font-bold text-black mb-2 pl-1 text-[15px]">Telefone</label>
                    <div class="flex gap-3">
                        <div class="w-24 bg-[#D1D5DB] rounded-full flex items-center justify-between px-4 py-3 text-gray-700 font-medium cursor-pointer relative group">
                            +55 <span class="text-xs">▼</span>
                        </div>
                        <input 
                          type="tel" 
                          placeholder="(00) 00000-0000" 
                          class="w-full bg-[#D1D5DB] rounded-full px-6 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-green-500 transition placeholder-gray-500/70"
                        >
                    </div>
                </div>

                <div>
                    <label class="block font-bold text-black mb-2 pl-1 text-[15px]">Email</label>
                    <input 
                      type="email" 
                      placeholder="Coloque seu melhor email..." 
                      class="w-full bg-[#D1D5DB] rounded-full px-6 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-green-500 transition placeholder-gray-500/70"
                    >
                </div>

                <div>
                    <label class="block font-bold text-black mb-2 pl-1 text-[15px]">Cidade:</label>
                    <input 
                      type="text" 
                      placeholder="Coloque seu melhor email..." 
                      class="w-full bg-[#D1D5DB] rounded-full px-6 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-green-500 transition placeholder-gray-500/70"
                    >
                </div>

                <div class="pt-6">
                    <button class="bg-[#22c55e] hover:bg-[#15803d] text-white font-bold py-3 px-8 rounded-full uppercase text-sm tracking-wide transition shadow-md w-auto">
                        COMPRAR AGORA
                    </button>
                </div>

            </form>
        </div>

      </div>
    </div>
  </div>
</template>