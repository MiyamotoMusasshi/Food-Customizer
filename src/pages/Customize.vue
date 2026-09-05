<script setup lang="ts">
import '../assets/styles/Customize.css'
import Pizza from '@/components/Customize/Pizza.vue'
import IngredientsMenu from '@/components/Customize/IngredientsMenu.vue'
import { ref } from 'vue'

const pizzaIsClicked = ref(false)

function handlePizzaClick() {
  pizzaIsClicked.value = !pizzaIsClicked.value
}
</script>

<template>
  <main>
    <Pizza @click="handlePizzaClick" :isClicked="pizzaIsClicked" />
    <IngredientsMenu :isClicked="pizzaIsClicked" />
  </main>
</template>
