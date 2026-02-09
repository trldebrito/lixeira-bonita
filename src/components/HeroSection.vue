<script setup>
import headerLixeiraImg from '../assets/header-lixeira.png' 
import divSection from '../assets/section-div.png' 
</script>

<template>
  <section class="relative h-[650px] flex items-center overflow-hidden">
    
    <div class="absolute inset-0 z-0">
      <img 
        :src="headerLixeiraImg" 
        alt="Lixeira Bonita no Jardim" 
        class="w-full h-full object-cover object-center"
      >
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 w-full h-full items-center">
      
      <div class="text-white space-y-8 pl-0 md:pl-4">
        
        <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-yellow-500 flex items-center justify-center rounded-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-black/80">
                    <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" />
                </svg>
            </div>
            <div class="w-12 h-12 bg-green-600 flex items-center justify-center rounded-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="text-white">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C8.58 20.5 12.06 20.26 15.65 17.63C19.5 14.81 20.65 10.37 20.17 8.03C19.66 5.64 17 8 17 8ZM13 16C13 16 14.5 13 18 11C18 11 15.5 12.5 14 14C14 14 13.5 15 13 16Z" />
                </svg>
            </div>
            <div class="w-12 h-12 flex items-center justify-center rounded-sm">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="text-white">
                     <path d="M12 2C7.03 2 3 6.03 3 11C3 16.55 7.66 22 7.66 22S13.46 17.47 16.13 15.11C18.23 13.25 21 11.2 21 7.5C21 4.46 18.54 2 15.5 2C14.15 2 12.93 2.5 12 3.32C11.07 2.5 9.85 2 8.5 2H12Z" />
                </svg>
            </div>
        </div>

        <h1 class="text-5xl md:text-6xl leading-tight font-light tracking-wide">
          Lixeiras que unem <br>
          <span class="font-serif italic font-normal">design</span>, 
          <span class="font-normal">resistência</span> <br>
          e 
          <span class="font-serif italic font-normal">praticidade</span>
        </h1>
        
        <p class="text-lg text-gray-100 max-w-md font-light">
          A solução ideal para quem quer organização, higiene e durabilidade no dia a dia.
        </p>

        <button class="group bg-[#155e42] hover:bg-[#0e3a28] text-white pl-8 pr-2 py-2 rounded-full font-medium text-lg transition-all shadow-lg flex items-center gap-4 mt-8">
          Compre Minha Lixeira 
          <div class="w-7 h-7 bg-white rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#1d824c" class="w-3.5 h-3.5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
               </svg>
            </div>
        </button>
      </div>

      <div></div>

    </div>

  </section>
  <img :src="divSection" alt="Divisão" class="w-full h-full object-cover object-center" />
</template>