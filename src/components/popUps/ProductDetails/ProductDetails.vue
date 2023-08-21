<template>
  <div class="modal">
    <div id="detailsContainer" class="animate__animated animate__zoomIn">
      <div class="titleBox">
        <i class="uil uil-check-circle"></i>
        <h1>Confira detalhes sobre o produto</h1>
        <button @click="productStore.closeDetails">
          <i class="uil uil-multiply"></i>
        </button>
      </div>
      <div class="detailsBox">
        <div class="detailsImageBox">
          <img
            :src="productStore.selectedProduct?.image"
            :alt="productStore.selectedProduct?.name"
          />
        </div>
        <div class="detailsTextBox">
          <DescriptionProduct
            :name="productStore.selectedProduct?.name"
            :text="productStore.selectedProduct?.text"
          />
          <PriceProduct :price="productStore.selectedProduct?.price" />
          <ColorsProduct :colors="productStore.selectedProduct?.colors" />
          <SizesProduct />
          <button class="btnAddCart">Adicionar à sacola</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DescriptionProduct from "./DescriptionProduct.vue"
import PriceProduct from "./PriceProduct.vue"
import ColorsProduct from "./ColorsProduct.vue"
import SizesProduct from "./SizesProduct.vue"

import { useProductsStore } from "../../../stores/products"

const productStore = useProductsStore()
</script>

<style scoped>
  .modal {
    @apply h-auto w-full flex justify-center absolute p-4 top-0 left-0 z-50 box-border bg-[#00000088];
  }

  #detailsContainer {
    @apply h-auto w-5/6 sm:w-3/4 md:w-[668px]  flex flex-col overflow-y-visible bg-white;
  }
  .titleBox {
    @apply flex justify-between items-center p-4 text-xl shadow-lg bg-black text-white;
  }

  .detailsBox {
    @apply flex flex-col items-center md:flex-row md:items-start p-4;
  }

  .detailsImageBox {
    @apply h-96 md:h-[422px] w-full max-w-[415px] md:w-full;
  }

  img {
    @apply w-full h-full;
  }

  .detailsTextBox {
    @apply p-4;
  }

  i {
    @apply text-lime-300;
  }

  .btnAddCart {
    @apply py-2 px-4 transition-all ease-linear bg-purple-500 hover:bg-purple-400 text-white;
  }
</style>