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

const allProducts = [
  { 
    id: 1, 
    name: 'MP 70L', 
    folder: 'mp70l',
    capacidade: '70 Litros',
    dimensoes: '0,55 x 0,71 x 0,30',
    peso: '5 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 2, 
    name: 'MP 70L Tampa Aberta', 
    folder: 'mp70l-tampa-aberta',
    capacidade: '70 Litros',
    dimensoes: '0,55 x 0,71 x 0,30',
    peso: '5 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 3, 
    name: 'MPS 40L Tampa Aberta', 
    folder: 'mps40l-tampa-aberta',
    capacidade: '40 Litros',
    dimensoes: '0,39 x 0,67 x 0,29',
    peso: '5 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 4, 
    name: 'MPS 40L', 
    folder: 'mps40l',
    capacidade: '40 Litros',
    dimensoes: '0,39 x 0,67 x 0,29',
    peso: '5 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 5, 
    name: 'MP 90L Tampa Alta', 
    folder: 'mp90l-tampa-alta',
    capacidade: '90 Litros',
    dimensoes: '0,55 x 0,71 x 0,30',
    peso: '5 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 6, 
    name: 'MP 90L Tampa Baixa', 
    folder: 'mp90l-tampa-baixa',
    capacidade: '90 Litros',
    dimensoes: '0,55 x 0,71 x 0,30',
    peso: '5 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 7, 
    name: 'MP 90L Infectante', 
    folder: 'mp90l-infectante',
    capacidade: '90 Litros',
    dimensoes: '0,55 x 0,71 x 0,30',
    peso: '5 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 8, 
    name: 'MPH 90L', 
    folder: 'mph90l',
    capacidade: '90 Litros',
    dimensoes: '0,60 x 0,46 x 0,50',
    peso: '10 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 9, 
    name: 'MP 130L', 
    folder: 'mp130l',
    capacidade: '130 Litros',
    dimensoes: '0,60 x 0,88 x 0,50',
    peso: '10 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 10, 
    name: 'MP 170L', 
    folder: 'mp170l',
    capacidade: '170 Litros',
    dimensoes: '0,80 x 0,71 x 0,50',
    peso: '10 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 11, 
    name: 'MP 350L', 
    folder: 'mp350l',
    capacidade: '350 Litros',
    dimensoes: '0,96 x 0,94 x 0,66',
    peso: '12 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 12, 
    name: 'MP 600', 
    folder: 'mp600',
    capacidade: '600 Litros',
    dimensoes: '1,05 x 1,05 x 0,71',
    peso: '20 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 13, 
    name: 'MP 1100L', 
    folder: 'mp1100l',
    capacidade: '1100 Litros',
    dimensoes: '1,45 x 1,37 x 1,10',
    peso: '40 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 14, 
    name: 'MP 1500', 
    folder: 'mp1500',
    capacidade: '1500 Litros',
    dimensoes: '1,84 x 1,37 x 0,98',
    peso: '44 kg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  { 
    id: 15, 
    name: 'MPS 2 (Seletiva 2un 70L)', 
    folder: 'seletiva-2un-70l',
    capacidade: '70 Litros cada',
    dimensoes: '0,55 x 0,71 x 0,30 (cada)',
    peso: '20 kg',
    images: ['1.jpg', '2.jpg', '3.jpg']
  },
  { 
    id: 16, 
    name: 'MPS 3 (Lixeira Seletiva com 3)', 
    folder: 'seletiva-3un-70l',
    capacidade: '70 Litros cada',
    dimensoes: '0,55 x 0,71 x 0,30 (cada)',
    peso: '25 kg',
    images: ['1.jpg', '2.jpg', '3.jpg']
  }
]

const product = computed(() => {
  return allProducts.find(p => p.id === Number(productId)) || allProducts[0]
})

const mainImageIndex = ref(0)

const getImageUrl = (imageName) => {
  return new URL(`../assets/lixeiras/${product.value.folder}/${imageName}`, import.meta.url).href
}

const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

// Adicione estas refs ao seu <script setup>
const isZoomed = ref(false)
const zoomPosition = ref({ x: 0, y: 0 })

const handleMouseMove = (e) => {
  const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
  // Calcula a posição do mouse em porcentagem dentro da div
  const x = ((e.pageX - left) / width) * 100
  const y = ((e.pageY - top) / height) * 100
  zoomPosition.value = { x, y }
}
</script>


<template>
  <div class="bg-[#F0F2F5] min-h-screen pb-20 font-sans pt-12">
    <div class="max-w-[1100px] mx-auto px-6">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div>
          <div 
  class="aspect-square bg-white border border-gray-300 mb-6 relative flex items-center justify-center overflow-hidden cursor-zoom-in"
  @mouseenter="isZoomed = true"
  @mouseleave="isZoomed = false"
  @mousemove="handleMouseMove"
>
  <img 
    :src="getImageUrl(product.images[mainImageIndex])" 
    :alt="product.name"
    class="w-full h-full object-contain p-6 transition-transform duration-200 ease-out"
    :style="{
      transform: isZoomed ? 'scale(2.5)' : 'scale(1)',
      transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
    }"
  />
  
  <div v-if="!isZoomed" class="absolute bottom-4 right-4 bg-black/10 p-2 rounded-full pointer-events-none">
    <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
    </svg>
  </div>
</div>

          <div class="grid grid-cols-3 gap-4 mb-10">
            <div 
              v-for="(img, index) in product.images" 
              :key="index" 
              @click="mainImageIndex = index"
              :class="['aspect-square bg-white border relative cursor-pointer transition p-2', 
                       mainImageIndex === index ? 'border-[#1d824c] border-2 shadow-sm' : 'border-gray-300 hover:border-black']"
            >
              <img :src="getImageUrl(img)" class="w-full h-full object-contain" />
            </div>
          </div>

          <div class="space-y-4">
            <h1 class="text-4xl font-bold text-black uppercase tracking-tight">
              {{ product.name }}
            </h1>

            <div class="space-y-2 text-black text-lg">
              <p><span class="font-bold">Modelo:</span> {{ product.name }}</p>
              <p><span class="font-bold">Capacidade de Litros:</span> {{ product.capacidade }}</p>
              <p><span class="font-bold">Dimensão (L x A x P):</span> {{ product.dimensoes }}</p>
              <p><span class="font-bold">Peso:</span> {{ product.peso }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-[40px] p-8 md:p-10 shadow-sm sticky top-24">
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
                        <select 
                          v-model="form.estado" 
                          class="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#155e42] transition cursor-pointer"
                        >
                            <option value="" disabled selected>UF</option>
                            <option v-for="uf in estados" :key="uf" :value="uf">
                              {{ uf }}
                            </option>
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

                <button type="submit" class="w-full bg-[#155e42] hover:bg-[#0e3a28] text-white font-atyp-medium py-4 rounded-full uppercase tracking-widest transition-all transform hover:scale-[1.02] shadow-lg">
                    CADASTRAR AGORA
                </button>
            </form>
        </div>

      </div>
    </div>
  </div>
</template>