<script setup lang="ts">
interface Props {
  imgSrc: string
  name: string
}

const props = defineProps<Props>()
</script>
<template>
  <div class="ingredient">
    <img :src="props.imgSrc" class="ingredient_img" />
    <p class="ingredient_name">{{ props.name }}</p>
    <div class="counter">
      <button class="counter_btn">-</button>
      <p class="ingredient_name">0</p>
      <button class="counter_btn">+</button>
    </div>
  </div>
</template>
