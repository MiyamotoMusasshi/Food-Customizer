<script setup lang="ts">
interface IngredientInfo {
  x: number
  y: number
  key: string
  src: string
}

interface Props {
  isClicked: boolean
  ingredients: IngredientInfo[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="pizza" :class="{ 'pizza-active': props.isClicked }">
    <img src="../../assets/img/pizza.svg" class="pizza-base" />
    <div class="pizza_ingredients">
      <img
        class="pizza_filing"
        v-for="ingredient in ingredients"
        :key="ingredient.key"
        :src="ingredient.src"
        :style="{
          left: ingredient.x + '%',
          top: ingredient.y + '%',
        }"
      />
    </div>
  </div>
</template>
