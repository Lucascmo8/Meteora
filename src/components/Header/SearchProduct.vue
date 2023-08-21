<template>
  <div id="searchBox">
    <input type="search" placeholder="Digite o produto" />
    <button>Buscar</button>
  </div>
</template>

<style scoped>
#searchBox {
  @apply w-full md:w-64 p-4 flex justify-between items-center gap-4 bg-white md:bg-transparent;
}

#searchBox * {
  @apply transition-all;
}

#searchBox > input {
  @apply h-10 w-full md:w-36 px-2 border font-semibold text-xs text-black shadow-md border-black;
}

#searchBox > input:hover,
#searchBox > input:focus {
  @apply outline-none border-lime-300;
}

#searchBox > button {
  @apply h-10 w-24 md:w-16 xl:w-20 border font-semibold shadow-md text-black md:text-white border-black md:border-white;
}

#searchBox > button:hover,
#searchBox > button:focus {
  @apply border-lime-300 text-lime-300;
}
</style>