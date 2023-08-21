<template>
  <section>
    <h3>Conheça todas as nossas facilidades</h3>
    <div class="benefitsBox">
      <div class="benefitsCards">
        <img src="/assets/Icones/x-diamond.png" alt="PIX" />
        <div class="textBenefitCard">
          <h4>PAGUE PELO PIX</h4>
          <p>Ganhe 5% OFF em pagamentos via PIX</p>
        </div>
      </div>
      <div class="benefitsCards">
        <img src="/assets/Icones/arrow-repeat.png" alt="Trocas" />
        <div class="textBenefitCard">
          <h4>TROCA GRÁTIS</h4>
          <p>Fique livre para trocar em até 30 dias</p>
        </div>
      </div>
      <div class="benefitsCards">
        <img src="/assets/Icones/flower.png" alt="Flor" />
        <div class="textBenefitCard">
          <h4>SUSTENTABILIDADE</h4>
          <p>Moda responsável, que respeita o meio ambiente</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  section {
    @apply mt-6 p-8 lg:py-10 flex flex-col justify-center items-center gap-8 bg-black text-white; 
  }

  h3 {
    @apply text-2xl font-medium text-center;
  }

  .benefitsBox {
    @apply grid grid-cols-1 lg:grid-cols-3 gap-8;
  }

  .benefitsCards {
    @apply h-20 w-80 flex items-center gap-4;
  }

  img {
    @apply h-14 w-14 md:h-[72px] md:w-[72px];
  }

  .textBenefitCard {
    @apply w-40 flex flex-col gap-4;
  }

  h4 {
    @apply font-bold text-lime-300;
  }

  p {
    @apply text-xs;
  }
</style>
