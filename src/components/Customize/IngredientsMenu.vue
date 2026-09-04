<script setup>
const props = defineProps(['isClicked'])
</script>

<template>
  <Transition name="menu">
    <div class="menu" v-show="props.isClicked">
      <div class="menu_choice">
        <div class="ingredient">
          <img src="../../assets/img/Sausage.svg" class="ingredient_img" />
          <p class="ingredient_name">Пеперони</p>
          <div class="counter">
            <button class="counter_btn">-</button>
            <p class="ingredient_name">0</p>
            <button class="counter_btn">+</button>
          </div>
        </div>
      </div>
      <div class="menu_other">
        <p class="ingredient_name price">Итоговая цена: 0р</p>
        <button class="pay ingredient_name">Перейти к оплате -></button>
      </div>
    </div>
  </Transition>
</template>
