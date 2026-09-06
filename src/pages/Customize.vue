<script setup lang="ts">
import '../assets/styles/Customize.css'
import Pizza from '@/components/Customize/Pizza.vue'
import IngredientsMenu from '@/components/Customize/IngredientsMenu.vue'
import { ref } from 'vue'

const pizzaIsClicked = ref(false)

function handlePizzaClick() {
  pizzaIsClicked.value = !pizzaIsClicked.value
}

interface IngredientInfo {
  x: number
  y: number
  key: string
  src: string
}

const ingredientsForRender = ref<IngredientInfo[]>([])
</script>

<template>
  <main>
    <Pizza
      @click="handlePizzaClick"
      :isClicked="pizzaIsClicked"
      :ingredients="ingredientsForRender"
    />
    <IngredientsMenu
      :isClicked="pizzaIsClicked"
      @changed="
        (newArr: IngredientInfo[]) => {
          ingredientsForRender = newArr
        }
      "
    />
  </main>
</template>
