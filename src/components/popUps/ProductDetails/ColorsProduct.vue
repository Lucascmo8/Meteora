<template>
  <div class="colorsContainer">
    <h2>Cores:</h2>
    <div class="colorsOptionsContainer">
      <div
        class="colorsBox"
        v-for="(color, index) in Props.colors"
        :key="index"
      >
        <input
          type="radio"
          name="colors"
          :id="color"
          :value="color"
          :checked="index === 0"
        />
        <label :for="color" name="colors">{{ color }}</label>
      </div>
    </div>
  </div>
  <hr />
</template>

<script setup lang="ts">
  const Props = defineProps({
    colors: Array as () => string[]
  })
</script>

<style scoped>
  .colorsContainer {
    @apply py-4 flex flex-col gap-4;
  }

  h2 {
    @apply font-bold;
  }

  .colorsOptionsContainer {
    @apply flex gap-4;
  }
  .colorsBox {
    @apply flex flex-col items-center gap-2 text-xs;
  }
</style>
