<template>
  <nav class="menuDesktop">
    <a href="/">Home</a>
    <a href="/">Nossas lojas</a>
    <a href="/">Novidades</a>
    <a href="/">Promoções</a>
  </nav>
</template>

<style scoped>
  .menuDesktop {
    @apply w-[430px] hidden md:grid grid-cols-4 justify-start bg-transparent;
  }

  .menuDesktop * {
    @apply transition-all ease-in-out;
  }

  a {
    @apply p-2 md:p-0 border-t md:border-none justify-self-center shrink-0 text-sm lg:text-base border-gray-400 transition-all hover:text-lime-300 hover:font-medium;
  }
</style>