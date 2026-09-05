<script setup lang="ts">
import Cookies from 'js-cookie'
import managingIngredientQuantities from '@/function/Customize/managingIngredientQuantities'
import { ref } from 'vue'

interface Props {
  imgSrc: string
  name: string
}

const props = defineProps<Props>()

const count = ref(Cookies.get(props.imgSrc) ?? '0')

const emit = defineEmits(['changed'])

function changeInValues(ingredient: string, isAdd: boolean) {
  managingIngredientQuantities(ingredient, isAdd)

  count.value = Cookies.get(props.imgSrc) ?? '0'

  emit('changed')
}
</script>
<template>
  <div class="ingredient">
    <img :src="props.imgSrc" class="ingredient_img" />
    <p class="ingredient_name">{{ props.name }}</p>
    <div class="counter">
      <button class="counter_btn" @click="changeInValues(props.imgSrc, false)">-</button>
      <p class="ingredient_name">{{ count }}</p>
      <button class="counter_btn" @click="changeInValues(props.imgSrc, true)">+</button>
    </div>
  </div>
</template>
