<template>
    <div id="carousel" @mouseenter="stopCarousel" @mouseleave="startCarousel">
        <div id="carouselInner">
            <Transition :name="animateName">
                <picture v-if="indexImg == 0">
                    <source media="(max-width: 548px)" srcset="../assets/Mobile/BannerCarousel1.png">
                    <source media="(max-width: 900px)" srcset="../assets/Tablet/BannerCarousel1.png">
                    <img src="../assets/Desktop/BannerCarousel1.png" alt="Banner Principal">
                </picture>
            </Transition>
            <Transition :name="animateName">
                <picture v-show="indexImg == 1">
                    <source media="(max-width: 548px)" srcset="../assets/Mobile/BannerCarousel2.png">
                    <source media="(max-width: 900px)" srcset="../assets/Tablet/BannerCarousel2.png">
                    <img src="../assets/Desktop/BannerCarousel2.png" alt="Segundo banner" >
                    <figcaption id="captionBanner2">
                        <h1>COLEÇÃO ATEMPORAL</h1>
                        <p>Estilo e qualidade para durar.</p>
                    </figcaption>
                </picture>
            </Transition>
            <Transition :name="animateName">
                <picture v-show="indexImg == 2">
                    <source media="(max-width: 548px)" srcset="../assets/Mobile/BannerCarousel3.png">
                    <source media="(max-width: 900px)" srcset="../assets/Tablet/BannerCarousel3.png">
                    <img src="../assets/Desktop/BannerCarousel3.png" alt="Terceiro Banner">
                    <figcaption id="captionBanner3">
                        <h1>COLEÇÃO ATEMPORAL</h1>
                        <p>Alto impacto visual, baixo impacto ambiental!</p>
                    </figcaption>
                </picture>
            </Transition>
        </div>
        <div class="controlsButtons">
            <button @click="prevImg" class="" :disabled="isAnimating"><i class="uil uil-previous"></i></button>
            <button @click="nextImg" class="" :disabled="isAnimating"><i class="uil uil-step-forward"></i></button>
        </div>
        <div class="spotlightPosition">
            <span :class="[ indexImg == 0 ? 'active animate__zoomIn':'']" class="spotlightBar animate__animated"></span>
            <span :class="[indexImg == 1 ? 'active animate__zoomIn':'']" class="spotlightBar animate__animated"></span>
            <span :class="[indexImg == 2 ? 'active animate__zoomIn':'']" class="spotlightBar  animate__animated"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref , onMounted , onUnmounted  } from "vue";

    let indexImg = ref<number>(0)

    let intervalTimer: number | any = null

    let isAnimating = ref<boolean>(false)

    let animateName = ref<string>("slide")

    const handleVisibilityChange = () => {
        if (document.visibilityState === "hidden") {
            stopCarousel()
        } else if (isAnimating.value) {
            startCarousel()
        }
        
    }
    
    onMounted(() =>{
        document.addEventListener("visibilitychange", handleVisibilityChange)
        startCarousel()
    })

    onUnmounted(()=>{
        document.removeEventListener("visibilitychange", handleVisibilityChange)
        stopCarousel()
    })

    const startCarousel = () => {
       intervalTimer = setTimeout(nextImgWithTimeout,5000)
       
    }

    const stopCarousel = () => {
        clearInterval(intervalTimer)
        
    }

    const nextImg = () =>{
        animateName.value = "slide"
        if(!isAnimating.value){
            isAnimating.value = true
            indexImg.value++
            setTimeout(() => (isAnimating.value = false), 2000)
            indexImg.value > 2 ? indexImg.value = 0:indexImg.value
            
        }
        
    }

    const prevImg = () =>{
        animateName.value = "slideBack"
        if(!isAnimating.value){
            isAnimating.value = true
            indexImg.value--
            indexImg.value < 0 ? indexImg.value = 2:indexImg.value
            setTimeout(() => (isAnimating.value = false), 2000)
            
        }
        
    }

    const nextImgWithTimeout = () => {
        nextImg()
        intervalTimer = setInterval(nextImg,5000)
        
    }
</script>

<style scoped>
    #carousel {
        @apply flex h-[415px] justify-center cursor-pointer bg-black mt-36 md:mt-16
    }

    #carouselInner{
        @apply relative w-full h-full overflow-hidden transition ease-in-out
    }

    picture{
        @apply absolute top-0 right-0 left-0 bottom-0 w-full h-full
    }

    img{
        @apply h-full w-full
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
        @apply h-full w-8 text-3xl transition-all duration-500
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
    
    button:disabled{
        @apply text-gray-400
    }

    .slide-enter-active{
        transition: all 2s linear;
    }

    .slide-enter-to{
        transition: all 2s linear;
        transform: translatex(0);
    }

    .slide-leave-active{
        transition: all 2s linear;
        transform: translateX(-100%)
    }

    .slide-enter-from{
        transition: all 2s linear;
        transform: translateX(100%)
    }

    .slide-leave-to{
        transition: all 2s linear;
        transform: translateX(-100%)
    }

    .slideBack-enter-active{
        transition: all 2s linear;
    }

    .slideBack-enter-to{
        transition: all 2s linear;
        transform: translatex(0);
    }

    .slideBack-leave-active{
        transition: all 2s linear;
        transform: translateX(100%)
    }

    .slideBack-enter-from{
        transition: all 2s linear;
        transform: translateX(-100%)
    }

    .slideBack-leave-to{
        transition: all 2s linear;
        transform: translateX(100%)
    }
</style>