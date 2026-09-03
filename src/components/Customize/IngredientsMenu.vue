<script setup>
const props = defineProps(['isClicked'])
</script>

<template>
  <Transition name="menu">
    <div class="menu" v-show="props.isClicked"></div>
  </Transition>
</template>
