<template>
  <section>
    <h2>Busque por categoria:</h2>
    <div class="categoryBox">
      <div
        class="categoryCard"
        v-for="(category, index) in categories"
        :key="index"
      >
        <div class="imageCard">
          <img :src="category.image" alt="" />
        </div>
        <div class="textCard">
          <p>{{ category.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface Item {
  image: string
  name: string
}

const categories = ref<Item[]>([
  { image: "/assets/Categorias/CategoriaCamiseta.png", name: "Camiseta" },
  { image: "/assets/Categorias/CategoriaBolsa.png", name: "Bolsa" },
  { image: "/assets/Categorias/CategoriaCalcados.png", name: "Calçados" },
  { image: "/assets/Categorias/CategoriaCalca.png", name: "Calça" },
  { image: "/assets/Categorias/CategoriaCasacos.png", name: "Casacos" },
  { image: "/assets/Categorias/CategoriaOculos.png", name: "Óculos" }
])
</script>

<style scoped>
  section {
    @apply py-6;
  }

  h2 {
    @apply mb-6 xl:mb-8 text-[28px] font-medium text-center;
  }
  .categoryBox {
    @apply w-11/12 m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center gap-4;
  }

  .categoryCard:hover img {
    @apply transform scale-110;
  }

  .categoryCard:hover .textCard {
    @apply text-lime-300;
  }

  .categoryCard {
    @apply h-48 w-36 md:w-40 lg:w-36 relative  shadow-md overflow-hidden cursor-pointer;
  }

  .imageCard {
    @apply relative object-cover;
  }

  img {
    @apply h-40 object-cover relative transition-all duration-200 ease-linear;
  }

  .textCard {
    @apply h-full w-full px-2 py-1 absolute font-medium text-center bg-black text-white transition-all duration-150 ease-linear;
  }
</style>