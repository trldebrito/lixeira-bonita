<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Suas importações de imagens
import lixeira1 from '../assets/lixeira-favorite/1.png'
import lixeira2 from '../assets/lixeira-favorite/2.png'
import lixeira3 from '../assets/lixeira-favorite/3.png'
import lixeira4 from '../assets/lixeira-favorite/4.png'
import lixeira5 from '../assets/lixeira-favorite/5.png'
import lixeira6 from '../assets/lixeira-favorite/6.png'

import lixeiraMpce from '../assets/lixeira-mpce.png'
import lixeiraMp70 from '../assets/lixeira-mp70.png'
import lixeiraMps70 from '../assets/lixeira-mps70.png'

const products = [
  { name: 'Lixeira MP 150L', img: lixeira3 },
  { name: 'Lixeira MPS 40L', img: lixeira6 },
  { name: 'Lixeira MP 350L', img: lixeira4 },
  { name: 'Lixeira MPS 90L', img: lixeira1 },
  { name: 'Lixeira MP 1500L', img: lixeira5 },
  { name: 'Lixeira Seletiva', img: lixeira2 },
]

// Lógica do Carrossel
const currentIndex = ref(0)
const itemsPerPage = ref(3) // Começa assumindo Desktop (3 itens)

// Computa qual é o último índice possível para não rolar para um espaço vazio
const maxIndex = computed(() => products.length - itemsPerPage.value)

// Atualiza a quantidade de itens visíveis baseado no tamanho da tela
const updateItemsPerPage = () => {
  if (window.innerWidth < 768) {
    itemsPerPage.value = 1 // Mobile: 1 item
  } else {
    itemsPerPage.value = 3 // Desktop: 3 itens
  }
  
  // Se redimensionar a tela e o index estiver num vazio, volta pro máximo permitido
  if (currentIndex.value > maxIndex.value) {
    currentIndex.value = maxIndex.value
  }
}

// Funções de Navegação
const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++
  } else {
    currentIndex.value = 0 // Volta para o começo (loop)
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = maxIndex.value // Vai para o final (loop)
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
}

// Lifecycle Hooks para monitorar o redimensionamento da tela (Responsividade)
onMounted(() => {
  updateItemsPerPage() // Checa no primeiro carregamento
  window.addEventListener('resize', updateItemsPerPage)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerPage)
})
</script>

<template>
  <section class="py-16 bg-[#F0F2F5]"> 
      
    <div class="max-w-[1400px] mx-auto relative px-4 md:px-12 mb-12">
      <h2 class="text-center text-6xl md:text-7xl font-semibold text-black tracking-tight uppercase font-serotiva">
        Favoritas
      </h2>
    </div>

    <div class="w-full bg-[#F0F2F5] relative">
      <div class="max-w-[1400px] mx-auto relative px-0 md:px-12"> <button 
          @click="prevSlide"
          class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black text-white rounded-full items-center justify-center hover:bg-gray-800 transition shadow-lg"
          aria-label="Produto Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button 
          @click="nextSlide"
          class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black text-white rounded-full items-center justify-center hover:bg-gray-800 transition shadow-lg"
          aria-label="Próximo Produto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div class="overflow-hidden w-full px-4 md:px-0">
          
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }"
          >
            
            <div 
              v-for="(product, index) in products" 
              :key="index" 
              class="w-full md:w-1/3 flex-shrink-0 py-8 md:py-12 px-4 md:px-6 flex flex-col items-center text-center group relative"
            >
              
              <h3 class="text-2xl font-bold text-black mb-8">
                {{ product.name }}
              </h3>

              <div class="h-64 w-full flex items-center justify-center mb-8">
                <img 
                  :src="product.img" 
                  :alt="product.name" 
                  class="max-h-full max-w-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <RouterLink to="/produto/mp70" class="group/btn bg-[#155e42] hover:bg-[#0e3a28] text-white pl-8 pr-2 py-2 rounded-full font-medium text-lg transition-all shadow-lg flex items-center gap-4 mt-auto">
                Comprar
                <div class="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="3" 
                      stroke="#1d824c" 
                      class="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:rotate-45"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
              </RouterLink>

            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="max-w-[1400px] mx-auto px-4 md:px-12">
      <div class="flex justify-center items-center gap-2 mt-6">
        <button
          v-for="(_, index) in (maxIndex + 1)"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'h-2.5 rounded-full transition-all duration-300 cursor-pointer',
            currentIndex === index ? 'w-8 bg-[#155e42]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
          ]"
          :aria-label="`Ir para o slide ${index + 1}`"
        ></button>
      </div>
    </div>

  </section>
</template>