<template>
  <HeaderBar />
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
  import HeaderBar from './components/Header/HeaderBar.vue';
  import Footer from './components/Footer.vue';

</script>

<style scoped>
  *{
    @apply font-[Inter]
  }
</style>