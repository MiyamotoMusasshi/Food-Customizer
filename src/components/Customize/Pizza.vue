<script setup>
const props = defineProps(['isClicked'])
</script>

<template>
  <div class="pizza" :class="{ 'pizza-active': props.isClicked }">
    <img src="../../assets/img/pizza.svg" class="pizza-base" />
  </div>
</template>
