<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Imports das Imagens
import slide4 from '../assets/slide-header/4.png' 
import slide3 from '../assets/slide-header/3.jpeg' 
import slide2 from '../assets/slide-header/2.jpeg' 
import slide1 from '../assets/slide-header/1.jpeg' 
import divSection from '../assets/section-div.png' 

// Array completo com os 4 slides configurados
const slides = [
  {
    id: 1,
    image: slide4, // Lixeira unitária residencial
    title: '<span class="text-white">Lixeiras que unem <br>design, </span><span class="font-serif italic text-white">resistência</span><span class="text-white"> e <br></span><span class="font-serif italic text-white">praticidade</span>',
    description: 'A solução ideal para quem quer organização, higiene e durabilidade no dia a dia.',
    descClass: 'text-gray-100', 
    buttonText: 'Comprar Minha Lixeira' 
  },
  {
    id: 2,
    image: slide3, // Lixeira hospitalar
    title: '<span class="text-black">Segurança e higiene <br>no </span><span class="font-serif italic text-[#155e42]">descarte de <br>resíduos hospitalares</span>',
    description: 'Projetadas para ambientes de saúde, com resistência, vedação e conformidade com as exigências sanitárias.',
    descClass: 'text-black font-medium', 
    buttonText: null 
  },
  {
    id: 3,
    image: slide2, // Lixeiras de coleta seletiva
    title: '<span class="font-serif italic text-white">Coleta seletiva que <br>valoriza o espaço e <br></span><span class="font-serif italic text-[#20b586]">o meio ambiente</span>',
    description: 'Estruturas duráveis e funcionais para incentivar o descarte correto e a sustentabilidade no dia a dia.',
    descClass: 'text-gray-100', 
    buttonText: null 
  },
  {
    id: 4,
    image: slide1, // Lixeira para grandes espaços (nova imagem)
    // Injetamos um span com um ícone SVG de seta antes do texto
    title: '<span class="block mb-4"><svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7.5H38M38 7.5L32 1.5M38 7.5L32 13.5" stroke="black" stroke-width="1.5"/></svg></span><span class="text-black font-normal">Soluções que <br>mantêm espaços <br></span><span class="font-serif italic text-black">coletivos limpos e <br>organizados</span>',
    description: 'Ideais para áreas externas e de grande circulação, com resistência, praticidade e fácil manutenção.',
    descClass: 'text-black font-medium', // Texto escuro para contrastar no fundo claro
    buttonText: null // Sem botão
  }
]

const currentIndex = ref(0)
let timer = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

onMounted(() => {
  timer = setInterval(nextSlide, 7000) 
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <section class="relative h-[650px] flex items-center overflow-hidden bg-gray-100">
    
    <div class="absolute inset-0 z-0">
      <transition-group name="fade">
        <img 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          v-show="currentIndex === index"
          :src="slide.image" 
          class="absolute inset-0 w-full h-full object-cover object-center"
        >
      </transition-group>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 w-full h-full items-center">
      
      <transition name="slide-fade" mode="out-in">
        <div :key="currentIndex" class="space-y-6 pl-0 md:pl-4">
          
          <h1 
            class="text-5xl md:text-6xl leading-tight tracking-wide font-light"
            v-html="slides[currentIndex].title"
          ></h1>
          
          <p :class="['text-lg max-w-md', slides[currentIndex].descClass]">
            {{ slides[currentIndex].description }}
          </p>

          <button 
            v-if="slides[currentIndex].buttonText"
            class="group bg-[#155e42] hover:bg-[#0e3a28] text-white pl-6 pr-2 py-2 rounded-full font-medium text-base transition-all shadow-lg flex items-center gap-3 w-max mt-8"
          >
            {{ slides[currentIndex].buttonText }}
            <div class="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="3" 
                stroke="#155e42" 
                class="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </button>

        </div>
      </transition>

      <div></div>
    </div>

  </section>

  <img :src="divSection" alt="Divisão" class="w-full object-cover object-center" />
</template>

<style scoped>
/* Transição da Imagem de Fundo (Fade) */
.fade-enter-active, .fade-leave-active { transition: opacity 1.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Transição do Texto (Slide + Fade) */
.slide-fade-enter-active { transition: all 0.6s ease-out; }
.slide-fade-leave-active { transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1); }
.slide-fade-enter-from { transform: translateX(20px); opacity: 0; }
.slide-fade-leave-to { transform: translateX(-20px); opacity: 0; }
</style>