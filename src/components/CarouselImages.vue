<template>
    <div id="carousel" @mouseenter="stopCarousel" @mouseleave="startCarousel">
        <div id="carouselInner">
            <picture>
                <source media="(max-width: 548px)" srcset="../assets/Mobile/BannerCarousel1.png">
                <source media="(max-width: 900px)" srcset="../assets/Tablet/BannerCarousel1.png">
                <img src="../assets/Desktop/BannerCarousel1.png" alt=""  v-show="indexImg == 0" class="animate__animated animate__slideInRight"></picture>
            <picture>
                <source media="(max-width: 548px)" srcset="../assets/Mobile/BannerCarousel2.png">
                <source media="(max-width: 900px)" srcset="../assets/Tablet/BannerCarousel2.png">
                <img src="../assets/Desktop/BannerCarousel2.png" alt="" v-show="indexImg == 1" class="animate__animated animate__slideInRight">
            </picture>
            <picture>
                <source media="(max-width: 548px)" srcset="../assets/Mobile/BannerCarousel3.png">
                <source media="(max-width: 900px)" srcset="../assets/Tablet/BannerCarousel3.png">
                <img src="../assets/Desktop/BannerCarousel3.png" alt="" v-show="indexImg == 2" class="animate__animated animate__slideInRight">
            </picture>
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
    import { ref , onMounted , onUnmounted  } from "vue";

    let indexImg = ref<number>(0)

    let intervalTimer: number | any = null

    onMounted(() =>{startCarousel()})

    onUnmounted(()=>{stopCarousel()})

    const startCarousel = () => {
       intervalTimer = setTimeout(nextImgWithTimeout,5000)
    }

    const stopCarousel = () => {
        clearInterval(intervalTimer)
    }

    const nextImg = () =>{
        indexImg.value++
        indexImg.value > 2 ? indexImg.value = 0:indexImg.value
    }

    const prevImg = () =>{
        indexImg.value--
        indexImg.value < 0 ? indexImg.value = 2:indexImg.value
    }

    const nextImgWithTimeout = () => {
        nextImg()
        intervalTimer = setTimeout(nextImg,5000)
    }
</script>

<style scoped>
    #carousel {
        @apply flex h-[415px] justify-center cursor-pointer bg-black
    }

    #carouselInner{
        @apply relative w-full h-full overflow-hidden transform transition-transform duration-500
    }

    img{
        @apply absolute top-0 right-0 left-0 bottom-0 w-full h-full
    }


    .controlsButtons{
        @apply absolute flex justify-between w-full self-center text-white text-sm
    }

    .controlsButtons > button{
        @apply h-full w-8 text-3xl
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