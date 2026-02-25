<script setup>
  import contactImg from '../assets/fale-conosco.png' 
</script>

<template>
  <div class="bg-[#F0F2F5] min-h-screen pb-20 font-sans pt-12">
    <div class="max-w-[1200px] mx-auto px-6">
      
      <h1 class="text-5xl md:text-7xl font-bold text-black uppercase mb-16 tracking-tight">
        FALE CONOSCO
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        <div class="flex flex-col gap-6">
            
            <div class="bg-white rounded-[30px] p-8 md:p-10 shadow-sm border border-gray-200">
                <div class="mb-4">
                    <div class="w-10 h-10 bg-[#0e3a28] rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                    </div>
                </div>
                <h3 class="font-bold text-black uppercase mb-1">TELEFONE/WHATSAPP</h3>
                <p class="font-bold text-lg text-black">+55 (69) 9999-9999</p>
            </div>

            <div class="bg-white rounded-[30px] p-8 md:p-10 shadow-sm border border-gray-200">
                <div class="mb-4">
                     <div class="w-10 h-10 bg-[#0e3a28] rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                    </div>
                </div>
                <h3 class="font-bold text-black uppercase mb-1">E-MAIL</h3>
                <p class="font-bold text-lg text-black">faleconosco@motopam.com.br</p>
            </div>

            <div class="bg-white rounded-[30px] p-8 md:p-10 shadow-sm border border-gray-200">
                <div class="mb-4">
                     <div class="w-10 h-10 bg-[#0e3a28] rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                    </div>
                </div>
                <h3 class="font-bold text-black uppercase mb-1">LOCALIZAÇÃO</h3>
                <p class="font-bold text-sm md:text-base text-black uppercase leading-tight">
                    RUA JÚLIO, ROD. MAXIMILIANO GAIDZINSKI, 747<br>
                    - MINA BRASIL, CRICIÚMA - SC, 88801-304
                </p>
            </div>

        </div>

        <div class="relative w-full h-full min-h-[400px] bg-gray-300 rounded-[30px] overflow-hidden">
            <img :src="contactImg" alt="Fale conosco" class="absolute inset-0 w-full h-full object-cover object-center" />
        </div>

      </div>

    </div>
  </div>
</template>