<script setup>
import { ref } from 'vue'

import partnerImg from '../assets/patner-page.jpg' 

// Estado do formulário atualizado com os novos campos da imagem
const form = ref({
  nome: '',
  email: '',
  telefone: '',
  celular: '',
  estado: '',
  cidade: '',
  comoConheceu: 'Facebook',
  mensagem: ''
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
            <span class="font-serif font-atyp-medium italic text-[#155e42]">Lixeira</span> <br>
            <span class="font-serif font-atyp-medium italic text-[#155e42]">Bonita?</span>
          </h2>
          
          <p class="text-lg text-gray-800 font-atyp leading-relaxed text-justify max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
        </div>

        <div class="bg-white rounded-[30px] p-8 md:p-10 shadow-sm w-full max-w-xl ml-auto">
            <form class="space-y-5" @submit.prevent>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    <div>
                        <label class="block font-atyp-medium text-[#555555] text-[13px] uppercase mb-1.5 tracking-wide">Seu Nome</label>
                        <input 
                          type="text" 
                          v-model="form.nome"
                          class="w-full bg-white border border-gray-300 rounded-[4px] px-4 py-2.5 text-gray-700 outline-none focus:border-[#155e42] focus:ring-1 focus:ring-[#155e42] transition"
                        >
                    </div>

                    <div>
                        <label class="block font-atyp-medium text-[#555555] text-[13px] uppercase mb-1.5 tracking-wide">E-mail</label>
                        <input 
                          type="email" 
                          v-model="form.email"
                          class="w-full bg-white border border-gray-300 rounded-[4px] px-4 py-2.5 text-gray-700 outline-none focus:border-[#155e42] focus:ring-1 focus:ring-[#155e42] transition"
                        >
                    </div>

                    <div>
                        <label class="block font-atyp-medium text-[#555555] text-[13px] uppercase mb-1.5 tracking-wide">Telefone</label>
                        <input 
                          type="tel" 
                          v-model="form.telefone"
                          class="w-full bg-white border border-gray-300 rounded-[4px] px-4 py-2.5 text-gray-700 outline-none focus:border-[#155e42] focus:ring-1 focus:ring-[#155e42] transition"
                        >
                    </div>

                    <div>
                        <label class="block font-atyp-medium text-[#555555] text-[13px] uppercase mb-1.5 tracking-wide">Celular</label>
                        <input 
                          type="tel" 
                          v-model="form.celular"
                          class="w-full bg-white border border-gray-300 rounded-[4px] px-4 py-2.5 text-gray-700 outline-none focus:border-[#155e42] focus:ring-1 focus:ring-[#155e42] transition"
                        >
                    </div>

                    <div>
                        <label class="block font-atyp-medium text-[#555555] text-[13px] uppercase mb-1.5 tracking-wide">Estado</label>
                        <select 
                          v-model="form.estado"
                          class="w-full bg-white border border-gray-300 rounded-[4px] px-4 py-2.5 text-gray-700 outline-none focus:border-[#155e42] focus:ring-1 focus:ring-[#155e42] transition cursor-pointer"
                        >
                            <option value="">Selecione...</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="PR">Paraná</option>
                            </select>
                    </div>

                    <div>
                        <label class="block font-atyp-medium text-[#555555] text-[13px] uppercase mb-1.5 tracking-wide">Cidade</label>
                        <select 
                          v-model="form.cidade"
                          class="w-full bg-white border border-gray-300 rounded-[4px] px-4 py-2.5 text-gray-700 outline-none focus:border-[#155e42] focus:ring-1 focus:ring-[#155e42] transition cursor-pointer"
                        >
                            <option value="">Selecione...</option>
                            </select>
                    </div>

                </div>

                <div>
                    <label class="block font-atyp-medium text-[#555555] text-[13px] uppercase mb-1.5 tracking-wide">Como você conheceu a nossa empresa</label>
                    <select 
                      v-model="form.comoConheceu"
                      class="w-full bg-white border border-gray-300 rounded-[4px] px-4 py-2.5 text-gray-700 outline-none focus:border-[#155e42] focus:ring-1 focus:ring-[#155e42] transition cursor-pointer"
                    >
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Google">Google / Pesquisa</option>
                        <option value="Indicacao">Indicação</option>
                    </select>
                </div>

                <div>
                    <label class="block font-atyp-medium text-[#555555] text-[13px] uppercase mb-1.5 tracking-wide">Pergunte ao vendedor (Opcional)</label>
                    <textarea 
                      v-model="form.mensagem"
                      rows="3" 
                      class="w-full bg-white border border-gray-300 rounded-[4px] px-4 py-2.5 text-gray-700 outline-none focus:border-[#155e42] focus:ring-1 focus:ring-[#155e42] transition resize-none"
                    ></textarea>
                </div>

                <div class="pt-4">
                    <button type="submit" class="bg-[#155e42] hover:bg-[#0e3a28] text-white font-atyp-medium py-3 px-10 rounded-full uppercase tracking-wider transition shadow-md w-full md:w-auto">
                        CADASTRAR
                    </button>
                </div>

            </form>
        </div>

      </div>

    </div>
  </div>
</template>