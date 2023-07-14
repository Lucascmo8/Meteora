<template>
  <HeaderBar />
  <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header> -->

  <RouterView />
</template>

<script setup lang="ts">
  // import { RouterLink, RouterView } from 'vue-router'
  import HeaderBar from './components/HeaderBar.vue';

</script>

<style scoped>

</style>