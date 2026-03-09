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
      
      <div class="mb-10">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-atyp-medium text-black uppercase leading-[1.1] tracking-tight max-w-3xl">
          Seja um revendedor da <span class="text-[#155e42]">Lixeira Bonita</span>
        </h1>
      </div>

      <div class="w-full h-[300px] md:h-[450px] bg-white rounded-[30px] overflow-hidden mb-16 shadow-md border border-gray-100">
          <img :src="partnerImg" alt="Seja um revendedor" class="w-full h-full object-cover" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div class="lg:col-span-7 space-y-10">
          <div class="space-y-6">
            <h2 class="text-4xl font-atyp-medium text-black leading-tight">
              Quem pode ser <br>
              parceiro 
              <span class="font-serif italic text-[#155e42]">Lixeira Bonita?</span>
            </h2>
            
            <p class="text-lg text-gray-700 font-atyp leading-relaxed font-atyp">
              A Lixeira Bonita busca parceiros que desejam agregar ao seu portfólio produtos resistentes, duráveis e com excelente aceitação no mercado. Nossas lixeiras em fibra de vidro atendem residências, empresas, condomínios e espaços públicos.
            </p>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div v-for="item in [
              { text: 'Lojas de Construção', icon: '🏠' },
              { text: 'Mobiliário Urbano', icon: '🌳' },
              { text: 'Condomínios', icon: '🏢' },
              { text: 'Construtoras', icon: '🏗️' },
              { text: 'Arquitetos', icon: '📐' },
              { text: 'Comerciais', icon: '💼' }
            ]" 
            :key="item.text"
            class="bg-white p-5 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-center hover:border-[#155e42] hover:shadow-md transition-all">
              <div class="text-3xl mb-2">{{ item.icon }}</div>
              <p class="font-atyp-medium text-gray-800 text-[11px] md:text-xs uppercase tracking-wider">
                {{ item.text }}
              </p>
            </div>
          </div>

          <p class="text-lg text-gray-700 font-atyp leading-relaxed border-l-4 border-[#155e42] pl-6 py-2 italic">
            Se você trabalha com infraestrutura, organização de ambientes ou produtos para áreas externas, a Lixeira Bonita é a parceira ideal.
          </p>
        </div>

        <div class="lg:col-span-5 bg-white rounded-[30px] p-8 md:p-10 shadow-xl border border-gray-50 sticky top-10">
            <h3 class="text-xl font-bold text-black mb-6 uppercase tracking-tight">Fale com um consultor</h3>
            
            <form class="space-y-5" @submit.prevent="handleSubmit">
                <div class="space-y-4">
                    <div>
                        <label class="block font-atyp-medium text-[#555555] text-[12px] uppercase mb-1 tracking-wide">Nome Completo</label>
                        <input type="text" v-model="form.nome" class="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 focus:border-[#155e42] focus:bg-white transition outline-none">
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block font-atyp-medium text-[#555555] text-[12px] uppercase mb-1">E-mail</label>
                            <input type="email" v-model="form.email" class="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 focus:border-[#155e42] outline-none">
                        </div>
                        <div>
                            <label class="block font-atyp-medium text-[#555555] text-[12px] uppercase mb-1">Telefone/WhatsApp</label>
                            <input type="tel" v-model="form.telefone" class="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 focus:border-[#155e42] outline-none">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block font-atyp-medium text-[#555555] text-[12px] uppercase mb-1">Estado</label>
                            <select v-model="form.estado" class="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 outline-none">
                                <option value="">UF</option>
                                <option value="SP">SP</option>
                                <option value="RJ">RJ</option>
                            </select>
                        </div>
                        <div>
                            <label class="block font-atyp-medium text-[#555555] text-[12px] uppercase mb-1">Cidade</label>
                            <input type="text" v-model="form.cidade" class="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 outline-none">
                        </div>
                    </div>

                    <div>
                        <label class="block font-atyp-medium text-[#555555] text-[12px] uppercase mb-1">Como nos conheceu?</label>
                        <select v-model="form.comoConheceu" class="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 outline-none">
                            <option value="Google">Google</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Facebook">Facebook</option>
                        </select>
                    </div>

                    <div>
                        <label class="block font-atyp-medium text-[#555555] text-[12px] uppercase mb-1">Mensagem (Opcional)</label>
                        <textarea v-model="form.mensagem" rows="2" class="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 outline-none resize-none"></textarea>
                    </div>
                </div>

                <button type="submit" class="w-full bg-[#155e42] hover:bg-[#0e3a28] text-white font-bold py-4 rounded-full uppercase tracking-widest transition-all transform hover:scale-[1.02] shadow-lg">
                    CADASTRAR AGORA
                </button>
            </form>
        </div>

      </div>
    </div>
  </div>
</template>