<template>
  <HeaderBar />
  <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header> -->

  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
  // import { RouterLink, RouterView } from 'vue-router'
  import HeaderBar from './components/Header/HeaderBar.vue';
  import Footer from './components/Footer.vue';

</script>

<style scoped>
  *{
    @apply font-[Inter]
  }
</style>