<template>
  <Teleport to="body">
    <RegistrationMessage v-show="showMessage" @closeMessage="closeMessage" />
  </Teleport>
  <section>
    <div class="newsletterBox">
      <p>
        Quer receber nossas novidades, promoções exclusivas e 10% OFF na
        primeira compra? Cadastre-se!
      </p>
      <form @submit.prevent="register">
        <input type="email" placeholder="Digite seu email" v-model="email" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  import RegistrationMessage from "../components/popUps/RegistrationMessage.vue"

  let showMessage = ref<boolean>(false)
  const email = ref<string>("")

  let closeMessageTimer: number | any = null

  const register = () => {
    showMessage.value = true
    email.value = ""
    closeMessageTimer = setTimeout(closeMessage, 5000)
  }

  const closeMessage = () => {
    let RegistrationMessage: HTMLElement | null = document.getElementById(
      "RegistrationMessageContainer"
    )
    RegistrationMessage?.classList.add("animate__slideOutUp")
    setTimeout(() => {
      showMessage.value = false
      RegistrationMessage?.classList.remove("animate__slideOutUp")
    }, 1100)
  }
</script>

<style scoped>
  section {
    @apply py-10 px-6;
  }

  .newsletterBox {
    @apply w-full p-6 border flex flex-col items-center gap-6 border-black shadow-md;
  }

  p {
    @apply sm:max-w-[520px] lg:max-w-[660px] text-center sm:text-xl;
  }

  form {
    @apply w-full lg:max-w-[550px] flex justify-center;
  }

  input {
    @apply h-10 w-full sm:w-1/2 px-2 border font-semibold text-xs text-black 
    border-black shadow-md transition-all ease-linear hover:outline-none hover:border-lime-300;
  }

  button {
    @apply py-2 px-4 bg-purple-500 text-white shadow-md transition-all ease-linear hover:text-lime-300 hover:bg-purple-400;
  }
</style>