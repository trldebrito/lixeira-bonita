<script setup>
import companyImg from '../assets/sobre/sobre.png'
import sobre1 from '../assets/sobre/01.png'
import sobre2 from '../assets/sobre/02.png'
import sobre3 from '../assets/sobre/03.png'
import bandeira from '../assets/sobre/bandeira.svg'
import coracao from '../assets/sobre/coracao.svg'
</script>

<template>
  <div class="bg-[#F0F2F5] min-h-screen pb-24 font-sans pt-12 md:pt-20">
    <div class="max-w-[1000px] mx-auto px-6 md:px-8">
      
      <h1 class="text-[40px] md:text-[56px] font-atyp-medium text-black uppercase mb-8 md:mb-10 tracking-tight leading-none">
        SOBRE NÓS
      </h1>

      <div class="w-full h-[250px] md:h-[420px] mb-8 md:mb-10 shadow-sm rounded-[32px] overflow-hidden">
        <img 
          :src="companyImg" 
          alt="Fachada da Motopam" 
          class="w-full h-full object-cover object-center" 
        />
      </div>

      <p class="text-[18px] md:text-[22px] text-black font-atyp leading-snug md:leading-relaxed mb-12 md:mb-16">
        Somos uma equipe que busca soluções práticas e duradouras relacionadas as necessidades humanas, a saúde, a educação qualidade, e principalmente melhoria de vida de nossos clientes e equipe.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
        <div class="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-sm">
          <img :src="sobre1" alt="Trabalhador 1" class="w-full h-full object-cover" />
        </div>
        <div class="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-sm">
          <img :src="sobre2" alt="Trabalhador 2" class="w-full h-full object-cover" />
        </div>
        <div class="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-sm">
          <img :src="sobre3" alt="Trabalhador 3" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="mb-16 md:mb-24">
        <h2 class="text-[28px] md:text-[32px] font-atyp-medium mb-6 text-black tracking-tight">
          Nossa história
        </h2>
        <div class="text-[#333333] leading-[1.8] font-atyp text-[15px] md:text-[16px] text-justify md:text-left">
          <p>
            Em meados do ano 2000, Anderson Gasperi, nascido em estado do Paraná, formado em geografia, atuava como torneiro mecânico, projetista e com anos de experiência no ramo de fabricação em fiberglass, tinha um desejo de inovar em seu trabalho, Anderson, que sempre teve sua preocupação voltada a sustentabilidade, certo dia ao sair de sua residência com sua família deparou-se com cachorros mexendo, e esparramando lixos de todas as espécies sólidos e molhados, além de deixar o ambiente desagradável, ainda podia gerar doenças com insetos, pensou que haveria de ter uma solução! Anderson resolveu colocar em prática seu projeto. Iniciou a idealização criando protótipos, e analisando o comportamento e interesses de seus clientes, melhorando a cada dia. Vários desafios foram enfrentados, várias crises econômicas, mas a LixeiraBonita nasceu, hoje possui quase 20 modelos diferentes, que vão de 40 litros a 1.500 litros, atendendo a residências e empresas, e o principal, dando oportunidade a todos os nossos clientes a contribuir com a sustentabilidade de nosso País.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        <div class="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col">
          <div class="mb-6">
            <img :src="bandeira" alt="Ícone Missão" class="w-10 h-10 md:w-12 md:h-12 object-contain" />
          </div>
          <h3 class="text-[22px] font-atyp-medium mb-4 uppercase text-black tracking-wide">
            MISSÃO
          </h3>
          <p class="text-[15px] text-[#888888] font-atyp leading-relaxed">
            Disponibilizar soluções em fibra de vidro e metais, que ofereça proteção, saúde e o desenvolvimento sustentável, por meio do estímulo comportamental na reeducação no descarte dos resíduos gerados, contribuindo com a melhoria de nosso meio ambiente.
          </p>
        </div>

        <div class="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col">
          <div class="mb-6">
            <img :src="coracao" alt="Ícone Visão" class="w-10 h-10 md:w-12 md:h-12 object-contain" />
          </div>
          <h3 class="text-[22px] font-atyp-medium mb-4 uppercase text-black tracking-wide">
            VISÃO
          </h3>
          <p class="text-[15px] text-[#888888] font-atyp leading-relaxed">
            Nosso objetivo é ser uma empresa de referência em responsabilidade socioambiental, gestão e resultados, dedicada ao desenvolvimento de produtos inovadores, preocupada com o bem-estar das pessoas e a sustentabilidade ambiental.
          </p>
        </div>

      </div>

    </div>
  </div>
</template>