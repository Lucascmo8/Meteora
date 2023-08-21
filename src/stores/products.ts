import { ref } from "vue"
import { defineStore } from "pinia"

interface Product {
  id: number
  image: string
  name: string
  text: string
  price: number
  colors: string[]
}

export const useProductsStore = defineStore("productsStore", () => {
  const products = ref<Product[]>([
    {
      id: 1,
      image: "/assets/ImagensCards/Camiseta.png",
      name: "Camiseta Conforto",
      text: "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
      price: 70,
      colors: ["Amarelo", "Offwhite", "Verde"]
    },
    {
      id: 2,
      image: "/assets/ImagensCards/Calca.png",
      name: "Calça Alfaiataria",
      text: "Modelo wide leg alfaiataria em linho. Uma peça pra vida toda!",
      price: 180,
      colors: ["Rosa", "Preto", "Bege"]
    },
    {
      id: 3,
      image: "/assets/ImagensCards/Tenis.png",
      name: "Tênis Chunky",
      text: "Snicker casual om soldado mais alto e modelagem robusta. Modelo unissex.",
      price: 250,
      colors: ["Offwhite", "Vermelho", "Azul Escuro"]
    },
    {
      id: 4,
      image: "/assets/ImagensCards/Jaqueta.png",
      name: "Jaqueta Jeans",
      text: "Modelo unissex oversized com gola de camurça. Atemporal e autêntica!",
      price: 150,
      colors: ["Azul Claro", "Offwhite", "Preto"]
    },
    {
      id: 5,
      image: "/assets/ImagensCards/Oculos.png",
      name: "Óculos Redondo",
      text: "Armação metálica em grafite com lentes arredondas. Sem erro!",
      price: 120,
      colors: ["Preto", "Branco", "Cinza"]
    },
    {
      id: 6,
      image: "/assets/ImagensCards/Bolsa.png",
      name: "Bolsa coringa",
      text: "Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!",
      price: 120,
      colors: ["Marron", "Amarelo", "Branca"]
    }
  ])

  let selectedProduct = ref<Product | undefined>(undefined)

  let showDetails = ref<boolean>(false)

  const chooseProduct = (productId: number) => {
    selectedProduct.value = products.value.find(
      (product) => product.id == productId
    )
    showDetails.value = true
  }

  const closeDetails = () => {
    showDetails.value = false
  }

  return {
    products,
    selectedProduct,
    chooseProduct,
    showDetails,
    closeDetails
  }
})
