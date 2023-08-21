<template>
  <div
    id="RegistrationMessageContainer"
    class="menuMobile animate__animated animate__slideInDown"
  >
    <div class="titleBox">
      <i class="uil uil-check-circle"></i>
      <h1>E-mail cadastrado com sucesso!</h1>
      <button @click="$emit('closeMessage')">
        <i class="uil uil-multiply"></i>
      </button>
    </div>
    <p>Em breve você receberá novidades exclusivas da Meteora.</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  #RegistrationMessageContainer {
    @apply flex flex-col fixed top-0 w-full z-50;
  }

  .titleBox {
    @apply p-4 flex justify-between items-center text-xl bg-black text-white shadow-lg;
  }

  i {
    @apply text-lime-300;
  }

  p {
    @apply p-4 pb-6 bg-white shadow-lg;
  }
</style>
