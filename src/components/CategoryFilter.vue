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
      {image: 'src/assets/Desktop/Categorias/CategoriaCamiseta.png', name:"Camiseta"},
      {image:"src/assets/Desktop/Categorias/CategoriaBolsa.png", name:"Bolsa"},
      {image:"src/assets/Desktop/Categorias/CategoriaCalcados.png",name:"Calçados"},
      {image:"src/assets/Desktop/Categorias/CategoriaCalca.png", name:"Calça"},
      {image:"src/assets/Desktop/Categorias/CategoriaCasacos.png", name:"Casacos"},
      {image:"src/assets/Desktop/Categorias/CategoriaOculos.png", name:"Óculos"}])
  </script>
  
  <style scoped>
    .categoryBox{
      @apply grid grid-cols-2 gap-4 justify-items-center md:grid-cols-3 lg:grid-cols-6 w-11/12 m-auto
    }
  
    .categoryCard{
      @apply w-36 h-48 md:w-40 lg:w-36 shadow-md cursor-pointer
    }
  
    img{
      @apply w-full h-40;
    }
  
    .textCard{
      @apply bg-black text-white font-medium text-center px-2 py-1;
    }
  </style>