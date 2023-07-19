<template>
    <div id="searchBox">
        <input type="search" placeholder="Digite o produto">
        <button>Buscar</button>
    </div>
</template>

<style scoped>
    #searchBox{
        @apply w-full bg-white p-4 flex items-center justify-between gap-4 md:w-64 md:bg-transparent;
    }

    #searchBox *{
        @apply transition-all
    }

    #searchBox > input{
        @apply border border-black text-xs font-semibold text-black w-full h-10 px-2 shadow-md md:w-36;
    }

    #searchBox > input:hover,#searchBox > input:focus{
        @apply outline-none border-lime-300
    }

    #searchBox > button{
        @apply border border-black font-semibold text-black w-24 h-10 shadow-md md:text-white md:border-white md:w-16 xl:w-20;
    }

    #searchBox > button:hover,#searchBox > button:focus{
        @apply border-lime-300 text-lime-300
    }
</style>