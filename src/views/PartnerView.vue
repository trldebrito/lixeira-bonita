<script setup>
import { ref } from 'vue'

import partnerImg from '../assets/patner-page.jpg' 

// Estado do formulário (opcional, apenas para estrutura)
const form = ref({
  nome: '',
  ddd: '',
  telefone: '',
  email: '',
  cidade: ''
})
</script>

<template>
  <div class="bg-[#F0F2F5] min-h-screen pb-20 font-sans pt-10">
    <div class="max-w-[1200px] mx-auto px-6">
      
      <div class="mb-12">
        <h1 class="text-4xl md:text-6xl font-atyp-medium text-black uppercase leading-tight tracking-tight max-w-4xl">
          Seja um revendedor da Lixeira Bonita
        </h1>
      </div>

      <div class="w-full h-[300px] md:h-[400px] bg-white rounded-[30px] overflow-hidden mb-16 shadow-sm border border-gray-200">
        <div class="w-full h-full flex items-center justify-center bg-gray-300">
          <img :src="partnerImg" alt="Seja um revendedor da Lixeira Bonita" class="w-full h-full object-cover object-center" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div class="space-y-6">
          <h2 class="text-4xl font-atyp-medium text-black leading-tight">
            Quem pode ser <br>
            parceiro 
            <span class="font-serif font-atyp-medium italic text-[#22c55e]">Lixeira</span> <br>
            <span class="font-serif font-atyp-medium italic text-[#22c55e]">Bonita?</span>
          </h2>
          
          <p class="text-lg text-gray-800 font-atyp leading-relaxed text-justify max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
        </div>

        <div class="bg-white rounded-[30px] p-8 md:p-10 shadow-sm w-full max-w-lg ml-auto">
            <form class="space-y-5">
                
                <div>
                    <label class="block font-atyp text-black mb-2 pl-2">Nome</label>
                    <input 
                      type="text" 
                      placeholder="João Silva..." 
                      class="w-full bg-gray-200 rounded-full px-6 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-green-500 transition placeholder-gray-400"
                    >
                </div>

                <div>
                    <label class="block font-atyp text-black mb-2 pl-2">Telefone</label>
                    <div class="flex gap-3">
                        <div class="w-20 bg-gray-200 rounded-full flex items-center justify-center px-2 py-3 text-gray-700 font-bold">
                            +55
                        </div>
                        <input 
                          type="tel" 
                          placeholder="(00) 00000-0000" 
                          class="w-full bg-gray-200 rounded-full px-6 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-green-500 transition placeholder-gray-400"
                        >
                    </div>
                </div>

                <div>
                    <label class="block font-atyp text-black mb-2 pl-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="Coloque seu melhor email..." 
                      class="w-full bg-gray-200 rounded-full px-6 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-green-500 transition placeholder-gray-400"
                    >
                </div>

                <div>
                    <label class="block font-atyp text-black mb-2 pl-2">Cidade:</label>
                    <input 
                      type="text" 
                      placeholder="Coloque sua cidade..." 
                      class="w-full bg-gray-200 rounded-full px-6 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-green-500 transition placeholder-gray-400"
                    >
                </div>

                <div class="pt-4">
                    <button class="bg-[#22c55e] hover:bg-[#15803d] text-white font-atyp-medium py-3 px-10 rounded-full uppercase tracking-wider transition shadow-md w-full md:w-auto">
                        CADASTRAR
                    </button>
                </div>

            </form>
        </div>

      </div>

    </div>
  </div>
</template>