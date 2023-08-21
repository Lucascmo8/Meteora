<template>
  <header :class="{ scroll: scrolling }">
    <div id="navigationBox">
      <img src="../../assets/logo.png" alt="Logo da Meteora" />
      <button @click="toogleMenu" v-show="!showMenu" id="btnMenuMobile">
        <i class="uil uil-bars"></i>
      </button>
      <MobileMenu
        v-show="showMenu"
        @closeMenu="closeMenu"
        id="menuMobile"
        class="menuMobile animate__animated animate__slideInDown"
      />
      <DesktopMenu />
    </div>
    <SearchProduct />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue"
import DesktopMenu from "./DesktopMenu.vue"
import MobileMenu from "./MobileMenu.vue"
import SearchProduct from "./SearchProduct.vue"

let showMenu = ref<boolean>(false)

const toogleMenu = () => {
  let menuMobile: HTMLElement | null = document.getElementById("menuMobile")
  menuMobile?.classList.add("animate__slideInDown")
  menuMobile?.classList.remove("animate__slideOutUp")
  showMenu.value = !showMenu.value
}

const closeMenu = () => {
  let menuMobile: HTMLElement | null = document.getElementById("menuMobile")
  menuMobile?.classList.remove("animate__slideInDown")
  menuMobile?.classList.add("animate__slideOutUp")
  setTimeout(toogleMenu, 1100)
}

const scrolling = ref<boolean>(false)

window.addEventListener("scroll", () => {
  scrolling.value = window.scrollY > 0
})
</script>

<style scoped>
header {
  @apply w-full fixed flex flex-col md:flex-row md:justify-between md:items-center top-0 z-50 bg-black text-white;
}

header.scroll {
  @apply shadow-lg;
}

img {
  @apply h-5 w-32;
}

#btnMenuMobile {
  @apply md:hidden text-lg text-lime-300;
}

#navigationBox {
  @apply h-16 md:w-full px-5 flex justify-between items-center md:justify-start;
}
</style>