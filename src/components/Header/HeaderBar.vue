<template>
    <header>
        <div id="navegationBox">
            <img src="../../assets/logo.png" alt="Logo da Meteora">
            <button @click="toogleMenu" v-show="!showMenu" id="btnMenuMobile"><i class="uil uil-bars"></i></button>
            <MobileMenu v-show="showMenu" @closeMenu="closeMenu" id="menuMobile"  class="menuMobile animate__animated animate__slideInDown" />
            <DesktopMenu />
        </div>
        <SearchProduct />
    </header>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import DesktopMenu from './DesktopMenu.vue';
    import MobileMenu from './MobileMenu.vue';
    import SearchProduct from './SearchProduct.vue';
    
    let showMenu = ref<boolean>(false)

    const toogleMenu =()=>{
        let menuMobile: HTMLElement | null = document.getElementById("menuMobile")
        menuMobile?.classList.add("animate__slideInDown")
        menuMobile?.classList.remove("animate__slideOutUp")
        showMenu.value = !showMenu.value
    }

    const closeMenu = () =>{
        let menuMobile: HTMLElement | null = document.getElementById("menuMobile")
        menuMobile?.classList.remove("animate__slideInDown")
        menuMobile?.classList.add("animate__slideOutUp")
        setTimeout(toogleMenu,1100)
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
        @apply flex items-center justify-between px-5 h-16 md:w-full md:justify-start;
    }
</style>