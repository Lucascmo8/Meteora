<template>
    <div class="sizeContainer">
        <h2>Tamanho:</h2>
        <div class="sizesOptionsContainer">
            <div class="sizeBox">
                <input type="radio" name="sizes" id="PP" value="pp" checked>
                <label for="PP">PP</label>
            </div>
            <div class="sizeBox">
                <input type="radio" name="sizes" id="P" value="p">
                <label for="P">P</label>
            </div>
            <div class="sizeBox">
                <input type="radio" name="sizes" id="M" value="m">
                <label for="M">M</label>
            </div>
            <div class="sizeBox">
                <input type="radio" name="sizes" id="G" value="g">
                <label for="G">G</label>
            </div>
            <div class="sizeBox">
                <input type="radio" name="sizes" id="GG" value="gg">
                <label for="GG">GG</label>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .sizeContainer{
        @apply flex flex-col py-4 gap-4
    }

    h2{
        @apply font-bold
    }

    .sizesOptionsContainer{
        @apply flex gap-4
    }
    .sizeBox{
        @apply flex flex-col items-center gap-2 text-xs
    }
</style>