<script setup>
import { ref } from 'vue'

const pizzaIsClicked = ref(false)

function handlePizzaClick() {
  pizzaIsClicked.value = !pizzaIsClicked.value
}
</script>

<template>
  <div class="pizza" @click="handlePizzaClick" :class="{ 'pizza-active': pizzaIsClicked }">
    <img src="../../assets/img/pizza.svg" class="pizza-base" />
  </div>
</template>
