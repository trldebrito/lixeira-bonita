<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

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

const route = useRoute()
const productId = route.params.id

// Dados centralizados (Simulando seu banco de dados)
const allProducts = [
  { 
    id: 1, 
    name: 'mp70l', 
    material: 'Fibra de vidro de alta resistência.', 
    prazo: '10 dias úteis.', 
    peso: '3,0kg', 
    medidas: '30 X 60 X 30',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 2, 
    name: 'mp70l-tampa-aberta', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 3, 
    name: 'mps40l', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 4, 
    name: 'mps40l-tampa-aberta', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 5, 
    name: 'mph90l', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 6, 
    name: 'mps90l-infectante', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 7, 
    name: 'mps90l-tampa-baixa', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 8, 
    name: 'mps90l', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 9, 
    name: 'mp130l', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 10, 
    name: 'mp170l', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 11, 
    name: 'mp350l', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 12, 
    name: 'mp600l', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 13, 
    name: 'mp1100l', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 14, 
    name: 'mp1500l', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 15, 
    name: 'seletiva-2un-70l', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg']
  },
  { 
    id: 16, 
    name: 'seletiva-3un-70l', 
    material: 'Fibra de vidro.', 
    prazo: '15 dias úteis.', 
    peso: '2,5kg', 
    medidas: '27 X 59 X 28',
    images: ['1.jpg', '2.jpg', '3.jpg']
  },
  // Adicione os outros IDs aqui conforme sua lista anterior
]

const product = computed(() => {
  return allProducts.find(p => p.id === Number(productId)) || allProducts[0]
})

const mainImageIndex = ref(0)

const getImageUrl = (imageName) => {
  return new URL(`../assets/lixeiras/${product.value.name}/${imageName}`, import.meta.url).href
}
</script>

<template>
  <div class="bg-[#F0F2F5] min-h-screen pb-20 font-sans pt-12">
    <div class="max-w-[1100px] mx-auto px-6">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div>
          <div class="aspect-square bg-white border border-gray-300 mb-6 relative flex items-center justify-center overflow-hidden">
             <img 
               :src="getImageUrl(product.images[mainImageIndex])" 
               :alt="product.name"
               class="w-full h-full object-contain p-6"
             />
          </div>

          <div class="grid grid-cols-3 gap-4 mb-10">
            <div 
              v-for="(img, index) in product.images" 
              :key="index" 
              @click="mainImageIndex = index"
              :class="['aspect-square bg-white border relative cursor-pointer transition p-2', 
                       mainImageIndex === index ? 'border-[#1d824c] border-2' : 'border-gray-300 hover:border-black']"
            >
              <img :src="getImageUrl(img)" class="w-full h-full object-contain" />
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