<template>
  <footer>
    <p>
      2023 &copy; Desenvolvido por
      <a href="https://github.com/Lucascmo8" target="_blank"
        >Lucas Costa e Alura</a
      >
      | Projeto fictício sem fins comerciais.
    </p>
  </footer>
</template>

<style scoped>
  footer {
    @apply w-full p-4 flex justify-center items-center text-center text-xs bg-black text-white;
  }

  p {
    @apply w-52 sm:w-full text-center;
  }

  a {
    @apply font-bold underline;
  }
</style>
