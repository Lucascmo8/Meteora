<template>
  <main :class="{ activeDetails: productStore.showDetails }">
    <CarouselImages />
    <CategoryFilter />
    <FeaturedProducts />
    <BenefitsSection />
    <NewsletterSection />
  </main>
</template>

<script setup lang="ts">
import CarouselImages from "../components/CarouselImages.vue"
import CategoryFilter from "../components/CategoryFilter.vue"
import FeaturedProducts from "../components/FeaturedProducts.vue"
import BenefitsSection from "../components/BenefitsSection.vue"
import NewsletterSection from "../components/NewsletterSection.vue"
import { useProductsStore } from "../stores/products"

const productStore = useProductsStore()
</script>

<style>
  main.activeDetails {
    @apply h-auto w-full fixed overflow-y-auto;
  }
</style>