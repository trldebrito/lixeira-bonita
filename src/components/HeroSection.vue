<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Imports das Imagens Desktop
import slide4 from '../assets/slide-header/4.png' 
import slide3 from '../assets/slide-header/3.png' 
import slide2 from '../assets/slide-header/2.png' 
import slide1 from '../assets/slide-header/1.png' 

// Imports das Imagens Mobile
import slideMobile4 from '../assets/slide-header-mobile/4.png' 
import slideMobile3 from '../assets/slide-header-mobile/3.png' 
import slideMobile2 from '../assets/slide-header-mobile/2.png' 
import slideMobile1 from '../assets/slide-header-mobile/1.png' 

import divSection from '../assets/section-div.png' 

// Configuração Inteligente dos Slides
const slides = [
  {
    id: 1, // Fundo escuro
    image: slide4, 
    mobileImage: slideMobile4,
    title: '<span class="text-white font-atyp-medium">Lixeiras que unem<br>design, resistência<br>e praticidade</span>',
    description: 'A solução ideal para quem quer organização, higiene e durabilidade no dia a dia.',
    descClass: 'text-gray-100 font-atyp text-[15px] md:text-base mt-4', 
    buttonText: 'Comprar Minha Lixeira',
    // Todos grudados no topo no mobile (pt-24 ou pt-28)
    contentClass: 'justify-start pt-28 md:pt-0 md:justify-center w-full md:w-1/2', 
    textAlign: 'text-left items-start'
  },
  {
    id: 2, // Hospitalar
    image: slide3, 
    mobileImage: slideMobile3,
    title: '<span class="text-black font-atyp-medium">Segurança e<br>higiene no<br>descarte de<br>resíduos<br>hospitalares</span>',
    description: 'Projetadas para ambientes de saúde, com resistência, vedação e conformidade com as exigências sanitárias.',
    descClass: 'text-gray-800 font-atyp text-[15px] md:text-base mt-4', 
    buttonText: 'Comprar Minha Lixeira',
    contentClass: 'justify-start pt-28 md:pt-0 md:justify-center w-full md:w-1/2',
    textAlign: 'text-left items-start'
  },
  {
    id: 3, // 3 Lixeiras
    image: slide2, 
    mobileImage: slideMobile2,
    title: '<span class="text-black font-atyp-medium">Coleta seletiva<br>que valoriza o<br>espaço e o meio<br>ambiente</span>',
    description: 'Estruturas duráveis e funcionais para incentivar o descarte correto e a sustentabilidade no dia a dia.',
    descClass: 'text-gray-800 font-atyp text-[15px] md:text-base mt-4', 
    buttonText: 'Comprar Minha Lixeira',
    contentClass: 'justify-start pt-28 md:pt-0 md:justify-center w-full md:w-1/2',
    textAlign: 'text-left items-start'
  },
  {
    id: 4, // Card branco
    image: slide1, 
    mobileImage: slideMobile1,
    title: '<span class="text-black font-atyp-medium">Soluções que<br>mantêm espaços<br>coletivos limpos e<br>organizados</span>',
    description: 'Ideais para áreas externas e de grande circulação, com resistência, praticidade e fácil manutenção.',
    descClass: 'text-gray-800 font-atyp text-[15px] md:text-base mt-4', 
    buttonText: 'Comprar Minha Lixeira',
    contentClass: 'justify-start pt-28 md:pt-0 md:justify-center w-full md:w-1/2',
    textAlign: 'text-left items-start'
  }
]

const currentIndex = ref(0)
let timer = null

const startTimer = () => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }, 7000)
}

const resetTimer = () => {
  clearInterval(timer)
  startTimer()
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
  resetTimer()
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
  resetTimer()
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <section class="relative h-[850px] w-full flex overflow-hidden bg-gray-100 group">
    
    <div class="absolute inset-0 z-0">
      <transition-group name="fade">
        <picture 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          v-show="currentIndex === index"
          class="absolute inset-0 w-full h-full"
        >
          <source media="(max-width: 767px)" :srcset="slide.mobileImage">
          <source media="(min-width: 768px)" :srcset="slide.image">
          <img :src="slide.image" alt="Slide" class="w-full h-full object-cover object-center">
        </picture>
      </transition-group>
    </div>

    <button 
      @click="prevSlide" 
      class="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/50 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
      aria-label="Slide anterior"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>

    <button 
      @click="nextSlide" 
      class="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/50 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
      aria-label="Próximo slide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>

    <div class="relative z-10 max-w-7xl mx-auto px-12 md:px-16 w-full h-full">
      
      <transition name="slide-fade" mode="out-in">
        <div 
          :key="currentIndex" 
          class="w-full md:w-1/2 h-full flex flex-col"
          :class="slides[currentIndex].contentClass"
        >
          
          <div class="space-y-4 md:space-y-6 flex flex-col w-full" :class="slides[currentIndex].textAlign">
            
            <h1 
              class="text-4xl md:text-6xl leading-tight tracking-wide font-light"
              v-html="slides[currentIndex].title"
            ></h1>
            
            <p :class="['text-base md:text-lg max-w-md', slides[currentIndex].descClass]">
              {{ slides[currentIndex].description }}
            </p>

            <button 
              v-if="slides[currentIndex].buttonText"
              class="group/btn bg-[#155e42] hover:bg-[#0e3a28] text-white pl-6 pr-2 py-2 rounded-full font-medium text-base transition-all shadow-lg flex items-center gap-3 w-max mt-4 md:mt-8"
            >
              {{ slides[currentIndex].buttonText }}
              <div class="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#155e42" class="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:rotate-45">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </button>

          </div>

        </div>
      </transition>

    </div>

  </section>

  <div 
    class="w-full h-24 md:h-[150px] z-20 relative -mt-2 bg-repeat-x bg-bottom"
    :style="{ 
      backgroundImage: `url(${divSection})`,
      // Importante: garante que a altura da imagem do background 
      // acompanhe exatamente a altura da div definida nas classes (h-24/h-150px)
      backgroundSize: 'auto 100%' 
    }"
    role="img"
    aria-label="Divisão decorativa de seção"
  ></div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 1.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-fade-enter-active { transition: all 0.6s ease-out; }
.slide-fade-leave-active { transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1); }
.slide-fade-enter-from { transform: translateX(20px); opacity: 0; }
.slide-fade-leave-to { transform: translateX(-20px); opacity: 0; }
</style>