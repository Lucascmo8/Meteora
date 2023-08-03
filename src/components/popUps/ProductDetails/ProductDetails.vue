<template>
    <div class="modal">
        <div id="detailsContainer" class="animate__animated animate__zoomIn">
            <div class="titleBox">
                <i class="uil uil-check-circle"></i>
                <h1>Confira detalhes sobre o produto</h1>
                <button @click="productStore.closeDetails"><i class="uil uil-multiply"></i></button>
            </div>
            <div class="detailsBox">
                <div class="detailsImageBox">
                    <img :src="productStore.selectedProduct?.image" :alt="productStore.selectedProduct?.name">
                </div>
                <div class="detailsTextBox">
                    <DescriptionProduct :name="productStore.selectedProduct?.name" :text="productStore.selectedProduct?.text" />
                    <PriceProduct :price="productStore.selectedProduct?.price"/>
                    <ColorsProduct :colors="productStore.selectedProduct?.colors"/>
                    <SizesProduct />
                    <button class="btnAddCart">Adicionar à sacola</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import DescriptionProduct from './DescriptionProduct.vue';
    import PriceProduct from './PriceProduct.vue';
    import ColorsProduct from './ColorsProduct.vue';
    import SizesProduct from './SizesProduct.vue';

    import { useProductsStore } from '../../../stores/products';

    const productStore = useProductsStore()
</script>

<style scoped>
    .modal{
        @apply h-auto w-full justify-center absolute p-4 top-0 left-0 z-50 flex box-border bg-[#00000088] 
    }

    #detailsContainer{
        @apply bg-white w-5/6 sm:w-3/4 h-auto flex flex-col md:w-[668px] overflow-y-visible
    }
    .titleBox{
        @apply flex justify-between p-4 bg-black text-white items-center text-xl shadow-lg
    }

    .detailsBox{
        @apply flex flex-col items-center p-4 md:flex-row md:items-start
    }

    .detailsImageBox{
        @apply w-full max-w-[415px] h-96 md:h-[422px] md:w-full
    }

    img{
        @apply w-full h-full
    }

    .detailsTextBox{
        @apply p-4
    }

    i{
        @apply text-lime-300 
    }

    .btnAddCart{
        @apply py-2 px-4 bg-purple-500 text-white hover:bg-purple-400
    }
</style>