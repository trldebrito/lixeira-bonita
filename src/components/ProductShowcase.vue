<script setup>

import lixeiraMpce from '../assets/lixeira-mpce.png'
import lixeiraMp70 from '../assets/lixeira-mp70.png'
import lixeiraMps70 from '../assets/lixeira-mps70.png'

const products = [
  { 
    name: 'Lixeira MPCE', 
    img: lixeiraMpce
  },
  { 
    name: 'Lixeira | MP 70', 
    img: lixeiraMp70
  },
  { 
    name: 'Lixeira MPS 70',  
    img: lixeiraMps70
  },
]
</script>

<template>
  <section class="py-16 bg-[#F0F2F5]"> <div class="max-w-[1400px] mx-auto relative px-4 md:px-12">
      
      <h2 class="text-center text-5xl font-bold text-black mb-12 tracking-tight uppercase font-sans">
        Favoritas
      </h2>

      <button class="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black text-white rounded-full items-center justify-center hover:bg-gray-800 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button class="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black text-white rounded-full items-center justify-center hover:bg-gray-800 transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div class="border-y border-black grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black bg-[#F0F2F5]">
        
        <div v-for="(product, index) in products" :key="index" class="py-12 px-6 flex flex-col items-center text-center group">
          
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

          <button class="bg-[#1d824c] hover:bg-[#155e38] text-white pl-6 pr-1 py-1.5 rounded-full text-xs font-bold tracking-widest transition flex items-center gap-3 uppercase">
            Comprar
            <div class="w-7 h-7 bg-white rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#1d824c" class="w-3.5 h-3.5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
               </svg>
            </div>
          </button>

        </div>

      </div>

      <div class="flex justify-center items-center gap-2 mt-10">
        <span class="w-2 h-2 bg-black rounded-full cursor-pointer"></span>
        <span class="w-2 h-2 bg-gray-400 rounded-full hover:bg-black transition cursor-pointer"></span>
        <span class="w-2 h-2 bg-gray-400 rounded-full hover:bg-black transition cursor-pointer"></span>
        <span class="w-2 h-2 bg-gray-400 rounded-full hover:bg-black transition cursor-pointer"></span>
      </div>

    </div>
  </section>
</template>