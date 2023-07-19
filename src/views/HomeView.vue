<template>
  <main>
    <CarouselImages />
    <CategoryFilter />
    <FeaturedProducts />
    <BenefitsSection />
    <NewsletterSection />
  </main>
</template>

<script setup lang="ts">
  import CarouselImages from '../components/CarouselImages.vue';
  import CategoryFilter from '../components/CategoryFilter.vue'; 
  import FeaturedProducts from '../components/FeaturedProducts.vue';
  import BenefitsSection from '../components/BenefitsSection.vue';
  import NewsletterSection from '../components/NewsletterSection.vue';
</script>