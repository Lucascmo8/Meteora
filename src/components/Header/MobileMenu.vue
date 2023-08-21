<template>
  <nav class="menuMobile">
    <button @click="$emit('closeMenu')">
      <i class="uil uil-multiply"></i>
    </button>
    <a href="/" class="firstLink">Home</a>
    <a href="/">Nossas lojas</a>
    <a href="/">Novidades</a>
    <a href="/">Promoções</a>
  </nav>
</template>

<style scoped>
  .menuMobile {
    @apply w-36 pt-3 pb-2 px-4 absolute md:hidden flex flex-col top-0 right-0 z-50 bg-gray-700;
  }

  .menuMobile > button {
    @apply h-5 w-5 self-end z-50 md:hidden text-xl text-lime-300;
  }

  a {
    @apply p-2 md:p-0 border-t md:border-none border-gray-400 ;
  }

  a:focus,
  a:hover {
    @apply font-medium md:font-normal md:text-inherit text-lime-300;
  }

  .firstLink {
    @apply border-none;
  }
</style>
