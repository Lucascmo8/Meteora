<template>
    <header>
        <div id="navegationBox">
            <img src="../../public/logo.png" alt="Logo da Meteora">
            <button @click="toogleMenu" v-show="!showMenu" id="btnMenuMobile"><i class="uil uil-bars"></i></button>
            <nav v-show="showMenu" class="menuMobile">
                <button @click="toogleMenu"><i class="uil uil-multiply"></i></button>
                <a href="/" class="firstLink">Home</a>
                <a href="/">Nossas lojas</a>
                <a href="/">Novidades</a>
                <a href="/">Promoções</a>
            </nav>
            <nav class="menuDesktop">
                <a href="/">Home</a>
                <a href="/">Nossas lojas</a>
                <a href="/">Novidades</a>
                <a href="/">Promoções</a>
            </nav>
        </div>
        <div id="searchBox">
            <input type="search" placeholder="Digite o produto">
            <button>Buscar</button>
        </div>
    </header>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    let showMenu = ref<boolean>(false)

    const toogleMenu =()=>{
        showMenu.value = !showMenu.value
    }
</script>

<style scoped>
    header{
        @apply bg-black w-full text-white flex flex-col md:items-center md:flex-row md:justify-between;
    }

    img{
        @apply w-32 h-5
    }

    #btnMenuMobile{
        @apply text-lime-300 text-lg md:hidden;
    }

    #navegationBox{
        @apply flex items-end justify-between p-5 md:w-full md:justify-start;
    }

    .menuMobile{
        @apply absolute right-0 top-0 w-36 flex flex-col bg-gray-700 py-2 px-4 md:hidden;
    }

    .menuDesktop{
        @apply hidden md:flex w-full px-5 gap-5 bg-transparent grow;
    }

    .menuMobile > button{
        @apply self-end text-lime-300 text-xl w-5 h-5 md:hidden;
    }

    a{
        @apply border-t border-gray-400 p-2 md:border-none md:p-0;
    }

    a.firstLink{
        @apply border-none text-lime-300 font-bold md:text-inherit md:font-normal;
    }

    #searchBox{
        @apply w-full bg-white p-4 flex items-center justify-between gap-4 md:w-64 md:bg-transparent;
    }

    
    #searchBox > input{
        @apply border border-black text-xs font-semibold text-black w-full h-10 px-2 shadow-md md:w-36;
    }

    #searchBox > button{
        @apply border border-black font-semibold text-black w-24 h-10 shadow-md md:text-white md:border-white md:w-16 xl:w-20;
    }
</style>