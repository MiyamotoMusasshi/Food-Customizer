<script setup lang="ts">
interface Props {
  isClicked: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <div class="pizza" :class="{ 'pizza-active': props.isClicked }">
    <img src="../../assets/img/pizza.svg" class="pizza-base" />
  </div>
</template>
