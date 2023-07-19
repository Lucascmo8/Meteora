<template>
  <nav class="menuDesktop">
        <a href="/">Home</a>
        <a href="/">Nossas lojas</a>
        <a href="/">Novidades</a>
        <a href="/">Promoções</a>
    </nav>
</template>

<style scoped>
    
    .menuDesktop{
        @apply hidden md:grid grid-cols-4 justify-start w-[430px] bg-transparent;
    }

    .menuDesktop *{
        @apply transition-all ease-in-out
    }

    a{
        @apply border-t border-gray-400 text-sm lg:text-base p-2 md:border-none md:p-0 shrink-0 hover:text-lime-300 hover:font-medium justify-self-center;
    }

</style>