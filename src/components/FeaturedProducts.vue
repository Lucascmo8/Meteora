<template>
    <Teleport to="body">
      <ProductDetails v-show="productsStore.showDetails"/>
    </Teleport>
    <section>
        <h2>
            Produtos que estão bombando!
        </h2>
        <div class="featuredProductsBox">
            <div class="productCard" v-for="(product,index) in productsStore.products" :key="index">
                <img :src="product.image" alt="">
                <div class="textCardBox">
                    <h3>{{ product.name }}</h3>
                    <p class="aboutText">{{ product.text }}</p>
                    <p class="price">R$ {{ product.price.toFixed(2).replace('.',',')}}</p>
                </div>
                <button class="btnSeeMore" @click="productsStore.chooseProduct(product.id)">Ver mais</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    // import { ref } from 'vue';
    import { useProductsStore } from '../stores/products';
    import ProductDetails from './popUps/ProductDetails/ProductDetails.vue';

    const productsStore = useProductsStore()
</script>

<style scoped>
    section{
        @apply py-6
    }

    h2{
        @apply text-center text-3xl font-medium mb-8 
    }

    .featuredProductsBox{
        @apply grid justify-center gap-8 w-11/12 m-auto md:grid-cols-2 xl:grid-cols-3
    }

    .productCard{
        @apply w-80 border border-gray-200 shadow-lg m-auto
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
        @apply py-2 px-4 ml-4 mb-4 bg-purple-500 text-white hover:bg-purple-400
    }
</style>