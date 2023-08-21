<template>
  <div id="carousel" @mouseenter="stopCarousel" @mouseleave="startCarousel">
    <div id="carouselInner">
      <Transition :name="animateName">
        <picture v-if="indexImg == 0">
          <source
            media="(max-width: 548px)"
            srcset="../assets/Mobile/BannerCarousel1.png"
          />
          <source
            media="(max-width: 900px)"
            srcset="../assets/Tablet/BannerCarousel1.png"
          />
          <img
            src="../assets/Desktop/BannerCarousel1.png"
            alt="Banner Principal"
          />
        </picture>
      </Transition>
      <Transition :name="animateName">
        <picture v-show="indexImg == 1">
          <source
            media="(max-width: 548px)"
            srcset="../assets/Mobile/BannerCarousel2.png"
          />
          <source
            media="(max-width: 900px)"
            srcset="../assets/Tablet/BannerCarousel2.png"
          />
          <img
            src="../assets/Desktop/BannerCarousel2.png"
            alt="Segundo banner"
          />
          <figcaption id="captionBanner2">
            <h1>COLEÇÃO ATEMPORAL</h1>
            <p>Estilo e qualidade para durar.</p>
          </figcaption>
        </picture>
      </Transition>
      <Transition :name="animateName">
        <picture v-show="indexImg == 2">
          <source
            media="(max-width: 548px)"
            srcset="../assets/Mobile/BannerCarousel3.png"
          />
          <source
            media="(max-width: 900px)"
            srcset="../assets/Tablet/BannerCarousel3.png"
          />
          <img
            src="../assets/Desktop/BannerCarousel3.png"
            alt="Terceiro Banner"
          />
          <figcaption id="captionBanner3">
            <h1>COLEÇÃO ATEMPORAL</h1>
            <p>Alto impacto visual, baixo impacto ambiental!</p>
          </figcaption>
        </picture>
      </Transition>
    </div>
    <div class="controlsButtons">
      <button
        @click="prevImg"
        :disabled="isAnimating"
        aria-label="Voltar Banner"
      >
        <i class="uil uil-previous"></i>
      </button>
      <button
        @click="nextImg"
        :disabled="isAnimating"
        aria-label="Próximo Banner"
      >
        <i class="uil uil-step-forward"></i>
      </button>
    </div>
    <div class="spotlightPosition">
      <span
        :class="[indexImg == 0 ? 'active animate__zoomIn' : '']"
        class="spotlightBar animate__animated"
        aria-label="Indicador de slide 1"
      ></span>
      <span
        :class="[indexImg == 1 ? 'active animate__zoomIn' : '']"
        class="spotlightBar animate__animated"
        aria-label="Indicador de slide 2"
      ></span>
      <span
        :class="[indexImg == 2 ? 'active animate__zoomIn' : '']"
        class="spotlightBar animate__animated"
        aria-label="Indicador de slide 3"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue"

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

  onMounted(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange)
    startCarousel()
  })

  onUnmounted(() => {
    document.removeEventListener("visibilitychange", handleVisibilityChange)
    stopCarousel()
  })

  const startCarousel = () => {
    intervalTimer = setTimeout(nextImgWithTimeout, 5000)
  }

  const stopCarousel = () => {
    clearInterval(intervalTimer)
  }

  const nextImg = () => {
    animateName.value = "slide"
    if (!isAnimating.value) {
      isAnimating.value = true
      indexImg.value++
      setTimeout(() => (isAnimating.value = false), 2000)
      indexImg.value > 2 ? (indexImg.value = 0) : indexImg.value
    }
  }

  const prevImg = () => {
    animateName.value = "slideBack"
    if (!isAnimating.value) {
      isAnimating.value = true
      indexImg.value--
      indexImg.value < 0 ? (indexImg.value = 2) : indexImg.value
      setTimeout(() => (isAnimating.value = false), 2000)
    }
  }

  const nextImgWithTimeout = () => {
    nextImg()
    intervalTimer = setInterval(nextImg, 5000)
  }
</script>

<style scoped>
  #carousel {
    @apply h-[415px] mt-36 md:mt-16 flex justify-center bg-black cursor-pointer;
  }

  #carouselInner {
    @apply h-full w-full relative transition ease-in-out overflow-hidden;
  }

  picture {
    @apply h-full w-full absolute top-0 right-0  bottom-0 left-0;
  }

  img {
    @apply h-full w-full;
  }

  figcaption {
    @apply w-80 m-auto py-6 flex flex-col gap-2 absolute top-1/2 right-0 left-0 text-white; 
  }

  #captionBanner2 {
    @apply tablet:w-auto tablet:-mt-8 tablet:p-0 tablet:right-12 tablet:left-auto;
  }

  #captionBanner2 h1,
  #captionBanner2 p {
    @apply tablet:text-right;
  }

  #captionBanner3 {
    @apply tablet:w-auto tablet:-mt-8 tablet:p-0 tablet:right-auto tablet:left-12;
  }

  #captionBanner3 h1,
  #captionBanner3 p {
    @apply tablet:text-left;
  }

  figcaption h1 {
    @apply text-3xl tablet:text-[32px] lg:text-5xl text-center;
  }

  figcaption p {
    @apply lg:text-xl text-center;
  }

  .controlsButtons {
    @apply w-full flex justify-between self-center absolute text-sm text-white;
  }

  .controlsButtons > button {
    @apply h-full w-8 text-3xl transition-all duration-500;
  }

  button:disabled {
    @apply text-gray-400;
  }

  .spotlightPosition {
    @apply w-full pb-8 flex justify-center gap-2 self-end absolute;
  }
  .spotlightBar {
    @apply w-9 border border-gray-400;
  }

  .active {
    @apply border-white;
  }

  /* Animação */

  .slideBack-enter-active,
  .slide-enter-active {
    transition: all 2s linear;
  }

  .slide-enter-to,
  .slideBack-enter-to {
    transition: all 2s linear;
    transform: translatex(0);
  }

  .slide-leave-active,
  .slide-leave-to,
  .slideBack-enter-from {
    transition: all 2s linear;
    transform: translateX(-100%);
  }

  .slide-enter-from,
  .slideBack-leave-active,
  .slideBack-leave-to {
    transition: all 2s linear;
    transform: translateX(100%);
  }
</style>