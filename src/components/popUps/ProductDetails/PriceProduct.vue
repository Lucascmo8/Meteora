<template>
    <div>
        <h3>R$ {{ Props.price?.toFixed(2).replace('.',',')}}</h3>
        <p>Vendido e entregue por Riachuelo</p>
        <hr>
    </div>
</template>

<script setup lang="ts">
    const Props = defineProps({
        price:Number
    })
</script>


<style scoped>
    div{
        @apply flex flex-col gap-6 pt-6
    }

    h3{
        @apply text-xl font-medium
    }

    p{
        @apply text-xs text-gray-400
    }
</style>