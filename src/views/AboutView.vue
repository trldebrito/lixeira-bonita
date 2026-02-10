<template>
  <div class="bg-[#F0F2F5] min-h-screen pb-20 font-sans pt-10">
    <div class="max-w-[1200px] mx-auto px-6">
      
      <h1 class="text-5xl font-bold text-black uppercase mb-12 tracking-tight font-serotiva">
        SOBRE NÓS
      </h1>

      <div class="w-full h-[400px] bg-white rounded-[30px] flex items-center justify-center mb-12 shadow-sm border border-gray-200">
        <span class="text-gray-400">Foto mulher da empresa</span>
      </div>

      <p class="text-lg text-black font-medium leading-relaxed max-w-4xl mb-16">
        Somos uma equipe que busca soluções práticas e duradouras relacionadas as necessidades humanas, a saúde, a educação qualidade, e principalmente melhoria de vida de nossos clientes e equipe.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div v-for="i in 3" :key="i" class="aspect-square bg-white border border-gray-300 flex items-center justify-center relative">
            <span class="text-gray-400 text-xs">Foto/Vídeo</span>
            <div class="absolute inset-0 border border-gray-300">
                 <svg class="absolute inset-0 w-full h-full text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" stroke-width="0.5" />
                    <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" stroke-width="0.5" />
                </svg>
            </div>
        </div>
      </div>

      <div class="mb-20">
        <h2 class="text-3xl font-medium mb-6 text-black">Nossa história</h2>
        <div class="space-y-6 text-gray-800 leading-relaxed font-light text-[15px] text-justify md:text-left">
          <p>
            Em meados do ano 2000, Anderson Gasperi, nascido em estado do Paraná, formado em geografia, atuava como torneiro mecânico, projetista e com anos de experiência no ramo de fabricação em fiberglass, tinha um desejo de inovar em seu trabalho, Anderson, que sempre teve sua preocupação voltada a sustentabilidade, certo dia ao sair de sua residência com sua família deparou-se com cachorros mexendo, e esparramando lixos de todas as espécies sólidos e molhados, além de deixar o ambiente desagradável, ainda podia gerar doenças com insetos, pensou que haveria de ter uma solução! Anderson resolveu colocar em prática seu projeto. Iniciou a idealização criando protótipos, e analisando o comportamento e interesses de seus clientes, melhorando a cada dia. Vários desafios foram enfrentados, várias crises econômicas, mas a LixeiraBonita nasceu, hoje possui quase 20 modelos diferentes, que vão de 40 litros a 1.500 litros, atendendo a residências e empresas, e o principal, dando oportunidade a todos os nossos clientes a contribuir com a sustentabilidade de nosso País.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-[30px] p-10 shadow-sm h-full">
            <div class="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-10 h-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 uppercase text-black">MISSÃO</h3>
            <p class="text-sm text-gray-500 font-light leading-relaxed">
                Disponibilizar soluções em fibra de vidro e metais, que ofereça proteção, saúde e o desenvolvimento sustentável, por meio do estímulo comportamental na reeducação no descarte dos resíduos gerados, contribuindo com a melhoria de nosso meio ambiente.
            </p>
        </div>
        <div class="bg-white rounded-[30px] p-10 shadow-sm h-full">
            <div class="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-10 h-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>
            <h3 class="text-xl font-bold mb-4 uppercase text-black">VISÃO</h3>
            <p class="text-sm text-gray-500 font-light leading-relaxed">
                Nosso objetivo é ser uma empresa de referência em responsabilidade socioambiental, gestão e resultados, dedicada ao desenvolvimento de produtos inovadores, preocupada com o bem-estar das pessoas e a sustentabilidade ambiental.
            </p>
        </div>
      </div>

    </div>
  </div>
</template>