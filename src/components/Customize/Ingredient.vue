<script setup lang="ts">
import Cookies from 'js-cookie'
import managingIngredientQuantities from '@/function/Customize/managingIngredientQuantities'
import { ref } from 'vue'
import IngredientsMenu from './IngredientsMenu.vue'

interface Props {
  imgSrc: string
  name: string
}

interface IngredientInfo {
  x: number
  y: number
  key: string
  src: string
}

const props = defineProps<Props>()

const count = ref(Cookies.get(props.imgSrc) ?? '0')

const emit = defineEmits<{ changed: [IngredientInfo | string] }>()

function changeInValues(ingredient: string, isAdd: boolean) {
  managingIngredientQuantities(ingredient, isAdd)

  count.value = Cookies.get(props.imgSrc) ?? '0'

  const ingredientInfo: IngredientInfo | string = isAdd
    ? {
        x: Math.round(Math.random() * 80 + 10),
        y: Math.round(Math.random() * 50 + 15),
        key: props.name,
        src: props.imgSrc,
      }
    : props.name

  emit('changed', ingredientInfo)
}
</script>
<template>
  <div class="ingredient">
    <img :src="props.imgSrc" class="ingredient_img" />
    <p class="ingredient_name">{{ props.name }}</p>
    <div class="counter">
      <button class="counter_btn" @click="count != '0' ? changeInValues(props.imgSrc, false) : 0">
        -
      </button>
      <p class="ingredient_name">{{ count }}</p>
      <button class="counter_btn" @click="changeInValues(props.imgSrc, true)">+</button>
    </div>
  </div>
</template>
