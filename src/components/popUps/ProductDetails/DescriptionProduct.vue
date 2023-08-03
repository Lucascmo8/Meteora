<template>
    <div>
        <h2>{{ Props.name }}</h2>
        <p>{{ Props.text }}</p>
        <hr>
    </div>
</template>

<script setup lang="ts">
    const Props = defineProps({
        name:{
            type:String
        },
        text:{
            type:String
        }
    })
</script>


<style scoped>
    div{
        @apply flex flex-col gap-6
    }

    h2{
        @apply font-bold
    }

    p{
        @apply text-xs
    }

    hr{
        /* border-width: 2px; */
        border-color: black;
    }
</style>