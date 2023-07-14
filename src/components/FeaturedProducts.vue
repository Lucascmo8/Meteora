<template>
    <section>
        <h2>
            Produtos que estão bombando!
        </h2>
        <div class="featuredProductsBox">
            <div class="productCard" v-for="(product,index) in products" :key="index">
                <img :src="product.image" alt="">
                <div class="textCardBox">
                    <h3>{{ product.name }}</h3>
                    <p class="aboutText">{{ product.text }}</p>
                    <p class="price">R$ {{ product.price.toFixed(2).replace('.',',')}}</p>
                </div>
                <button class="btnSeeMore">Ver mais</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    interface Product{
        image:string;
        name:string;
        text:string;
        price:number
    }

  const products = ref<Product[]>([
    {image: 'src/assets/Desktop/ImagensCards/Camiseta.png', name:"Camiseta Conforto",text:"Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.", price:70},
    {image: 'src/assets/Desktop/ImagensCards/Calca.png', name:"Calça Alfaiataria",text:"Modelo wide leg alfaiataria em linho. Uma peça pra vida toda!", price:180},
    {image: 'src/assets/Desktop/ImagensCards/Tenis.png', name:"Tênis Chunky", text:"Snicker casual om soldado mais alto e modelagem robusta. Modelo unissex.", price:250},
    {image: 'src/assets/Desktop/ImagensCards/Jaqueta.png', name:"Jaqueta Jeans",text:"Modelo unissex oversized com gola de camurça. Atemporal e autêntia!", price:150},
    {image: 'src/assets/Desktop/ImagensCards/Oculos.png', name:"Óculos Redondo",text:"Armação metálica em grafite com lentes arredondas. Sem erro!", price:120},
    {image: 'src/assets/Desktop/ImagensCards/Bolsa.png', name:"Bolsa coringa",text:"Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!", price:120},
    ])
</script>

<style scoped>
    h2{
        @apply text-center text-3xl font-medium
    }

    .featuredProductsBox{
        @apply flex flex-wrap justify-center gap-8 w-11/12 m-auto
    }

    .productCard{
        @apply w-80 border border-gray-200 shadow-lg
    }

    img{
        @apply w-full h-96
    }

    .textCardBox{
        @apply flex flex-col gap-4 p-4
    }

    h3{
        @apply font-bold
    }

    .aboutText{
        @apply text-sm
    }

    .price{
        @apply text-lg font-bold
    }

    .btnSeeMore{
        @apply py-2 px-4 ml-4 mb-4 bg-purple-500 text-white
    }
</style>