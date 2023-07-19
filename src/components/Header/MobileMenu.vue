<template>
    <nav class="menuMobile">
        <button @click="$emit('closeMenu')"><i class="uil uil-multiply"></i></button>
        <a href="/" class="firstLink">Home</a>
        <a href="/">Nossas lojas</a>
        <a href="/">Novidades</a>
        <a href="/">Promoções</a>
    </nav>
</template>

<style scoped>
    .menuMobile{
        @apply absolute right-0 top-0 w-36 flex flex-col z-50 bg-gray-700 pt-3 pb-2 px-4 md:hidden;
    }

    .menuMobile > button{
        @apply self-end text-lime-300 text-xl w-5 h-5 z-50 md:hidden; 
    }

    a{
        @apply border-t border-gray-400 p-2 md:border-none md:p-0;
    }

    a:focus,a:hover{
        @apply text-lime-300 font-medium md:text-inherit md:font-normal;
    }

    .firstLink{
        @apply border-none
    }
</style>