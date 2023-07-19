<template>
    <section>
        <h3>Conheça todas as nossas facilidades</h3>
        <div class="benefitsBox">
            <div class="benefitsCards">
                <img src="../assets/Desktop/Icones/x-diamond.png" alt="PIX">
                <div class="textBenefitCard">
                    <h4>PAGUE PELO PIX</h4>
                    <p>Ganhe 5% OFF em pagamentos via PIX</p>
                </div>
            </div>
            <div class="benefitsCards">
                <img src="../assets/Desktop/Icones/arrow-repeat.png" alt="Trocas">
                <div class="textBenefitCard">
                    <h4>TROCA GRÁTIS</h4>
                    <p>Fique livre para trocar em até 30 dias</p>
                </div>
            </div>
            <div class="benefitsCards">
                <img src="../assets/Desktop/Icones/flower.png" alt="Flor">
                <div class="textBenefitCard">
                    <h4>SUSTENTABILIDADE</h4>
                    <p>Moda responsável, que respeita o meio ambiente</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    section{
        @apply bg-black text-white p-8 flex flex-col items-center gap-8 justify-center lg:py-10 mt-6
    }

    h3{
        @apply text-2xl font-medium text-center
    }

    .benefitsBox{
        @apply grid grid-cols-1 gap-8 lg:grid-cols-3
    }

    .benefitsCards{
        @apply flex items-center gap-4 w-80 h-20
    }

    img{
        @apply w-14 h-14 md:w-[72px] md:h-[72px]
    }

    .textBenefitCard{
        @apply flex flex-col gap-4 w-40
    }

    h4{
        @apply text-lime-300 font-bold
    }

    p{
        @apply text-xs 
    }
</style>