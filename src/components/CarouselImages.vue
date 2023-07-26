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
                <figcaption v-show="indexImg == 1" class="animate__animated animate__slideInRight" id="captionBanner2">
                    <h1>COLEÇÃO ATEMPORAL</h1>
                    <p>Estilo e qualidade para durar.</p>
                </figcaption>
            </picture>
            <picture>
                <source media="(max-width: 548px)" srcset="../assets/Mobile/BannerCarousel3.png">
                <source media="(max-width: 900px)" srcset="../assets/Tablet/BannerCarousel3.png">
                <img src="../assets/Desktop/BannerCarousel3.png" alt="" v-show="indexImg == 2" class="animate__animated animate__slideInRight">
                <figcaption v-show="indexImg == 2" class="animate__animated animate__slideInRight" id="captionBanner3">
                    <h1>COLEÇÃO ATEMPORAL</h1>
                    <p>Alto impacto visual, baixo impacto ambiental!</p>
                </figcaption>
            </picture>
        </div>
        <div class="controlsButtons">
            <button @click="prevImg" class=""><i class="uil uil-previous"></i></button>
            <button @click="nextImg" class=""><i class="uil uil-step-forward"></i></button>
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

    figcaption{
        @apply absolute text-white top-1/2 left-0 right-0 m-auto w-80 py-6 flex flex-col gap-2 
    }

    #captionBanner2{
        @apply tablet:left-auto tablet:right-12 tablet:-mt-8 tablet:p-0 tablet:w-auto
    }

    #captionBanner2 h1 , #captionBanner2 p{
        @apply tablet:text-right
    }


    #captionBanner3{
        @apply tablet:left-12 tablet:right-auto tablet:-mt-8 tablet:p-0 tablet:w-auto
    }

    #captionBanner3 h1 , #captionBanner3 p{
        @apply tablet:text-left
    }

    figcaption h1{
        @apply text-3xl tablet:text-[32px] text-center lg:text-5xl
    }

    figcaption p{
        @apply text-center lg:text-xl
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