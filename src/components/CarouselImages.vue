<template>
    <div id="carousel">
        <div id="carouselInner">
            <img src="../assets/Mobile/BannerCarousel1.png" alt=""  v-show="indexImg == 0">
            <img src="../assets/Mobile/BannerCarousel2.png" alt="" v-show="indexImg == 1">
            <img src="../assets/Mobile/BannerCarousel3.png" alt="" v-show="indexImg == 2">
        </div>
        <div class="controlsButtons">
            <button @click="prevImg" class=""><i class="uil uil-arrow-circle-left"></i></button>
            <button @click="nextImg" class=""><i class="uil uil-arrow-circle-right"></i></button>
        </div>
        <div class="spotlightPosition">
            <span :class="[indexImg == 0 ? 'active':'']" class="spotlightBar"></span>
            <span :class="[indexImg == 1 ? 'active':'']" class="spotlightBar"></span>
            <span :class="[indexImg == 2 ? 'active':'']" class="spotlightBar"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    let indexImg = ref<number>(0)

    const nextImg = () =>{
        indexImg.value++
        indexImg.value > 2 ? indexImg.value = 0:indexImg.value
    }

    const prevImg = () =>{
        indexImg.value--
        indexImg.value < 0 ? indexImg.value = 2:indexImg.value
    }
</script>

<style scoped>
    #carousel {
        @apply flex justify-center cursor-pointer
    }

    #carouselInner{
        @apply relative w-full h-96 overflow-hidden
    }

    img{
        @apply absolute top-0 right-0 left-0 bottom-0 w-full h-full
    }

    .controlsButtons{
        @apply absolute flex justify-between w-full h-full self-center text-white text-sm 
    }

    .controlsButtons > button{
        @apply h-full w-10
    }

    .spotlightPosition{
        @apply absolute flex justify-center w-full self-end pb-8 gap-2
    }
    .spotlightBar{
        @apply w-9 border border-gray-400
    }

    .active{
        @apply border-white
    }
</style>