<template>
    <section>
        <div class="newsletterBox">
            <p>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>
            <form @submit.prevent="teste">
                <input type="email" placeholder="Digite seu email">
                <button type="submit">Enviar</button>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
    const teste= ()=>{
        alert(`nada ainda!`)
    }
</script>

<style scoped>
    section{
        @apply py-10 px-6
    }

    .newsletterBox{
        @apply border border-black p-6 flex flex-col items-center gap-6 shadow-md w-full
    }

    p{
        @apply text-center sm:text-xl sm:max-w-[520px] lg:max-w-[660px]
    }

    form{
        @apply flex justify-center w-full lg:max-w-[550px]
    }
    
    input{
        @apply border border-black text-xs font-semibold text-black w-full h-10 px-2 shadow-md sm:w-1/2;
    }

    button{
        @apply py-2 px-4 bg-purple-500 text-white shadow-md
    }
</style>