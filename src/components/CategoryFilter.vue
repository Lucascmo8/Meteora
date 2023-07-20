<template>
    <section>
      <h2>Busque por categoria:</h2>
      <div class="categoryBox">
          <div class="categoryCard" v-for="(category,index) in categories" :key="index">
              <div class="imageCard">
                  <img :src="category.image" alt="" >
              </div>
              <div class="textCard">
                  <p>{{ category.name}}</p>
              </div>
          </div>
      </div>
    </section>
  </template>
  
<script setup lang="ts">
  import { ref } from 'vue';
  
  interface Item{
    image:string;
    name:string
  }

  const categories = ref<Item[]>([
    {image: '/assets/Categorias/CategoriaCamiseta.png', name:"Camiseta"},
    {image:"/assets/Categorias/CategoriaBolsa.png", name:"Bolsa"},
    {image:"/assets/Categorias/CategoriaCalcados.png",name:"Calçados"},
    {image:"/assets/Categorias/CategoriaCalca.png", name:"Calça"},
    {image:"/assets/Categorias/CategoriaCasacos.png", name:"Casacos"},
    {image:"/assets/Categorias/CategoriaOculos.png", name:"Óculos"}])
</script>
  
  <style scoped>
    section{
        @apply py-6
    }

    h2{
      @apply text-center text-[28px] font-medium mb-6 xl:mb-8
    }
    .categoryBox{
      @apply grid grid-cols-2 gap-4 justify-items-center md:grid-cols-3 lg:grid-cols-6 w-11/12 m-auto
    }

    .categoryCard:hover img{
      @apply transform scale-105;
    }

    .categoryCard:hover .textCard{
      @apply text-lime-300;
    }
  
    .categoryCard{
      @apply w-36 h-48 overflow-hidden relative md:w-40 lg:w-36 shadow-md cursor-pointer;
    }
  
    .imageCard{
      @apply relative object-cover;
    }

    img{
      @apply h-40 object-cover relative transition-all duration-200 ease-linear;
    }
  
    .textCard{
      @apply bg-black h-full w-full absolute transition-all duration-150 ease-linear text-white font-medium text-center px-2 py-1;
    }
  </style>