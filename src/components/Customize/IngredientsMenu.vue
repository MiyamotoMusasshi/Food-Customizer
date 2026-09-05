<script setup lang="ts">
import Ingredient from './Ingredient.vue'
import SausageImg from '../../assets/img/Sausage.svg'
import BasilImg from '../../assets/img/Basil.svg'
import CornImg from '../../assets/img/Corn.svg'
import GreenPepperImg from '../../assets/img/GreenPepper.svg'
import HamImg from '../../assets/img/Ham.svg'
import JalapenoImg from '../../assets/img/Jalapeno.svg'
import MozzarellaImg from '../../assets/img/Mozzarella.svg'
import MushroomImg from '../../assets/img/Mushroom.svg'
import OliveImg from '../../assets/img/Olive.svg'
import OnionImg from '../../assets/img/Onion.svg'
import PineAppleImg from '../../assets/img/Pineapple.svg'
import RedChillImg from '../../assets/img/RedChili.svg'
import TomatoImg from '../../assets/img/Tomato.svg'

interface IngredientResource {
  ingredient_name: string
  img_src: string
}
interface Props {
  isClicked: boolean
}

const props = defineProps<Props>()

const availableIngredients: IngredientResource[] = [
  { ingredient_name: 'Пеперони', img_src: SausageImg },
  { ingredient_name: 'Базилик', img_src: BasilImg },
  { ingredient_name: 'Кукуруза', img_src: CornImg },
  { ingredient_name: 'Зеленый перец', img_src: GreenPepperImg },
  { ingredient_name: 'Ветчина', img_src: HamImg },
  { ingredient_name: 'Халапеньо', img_src: JalapenoImg },
  { ingredient_name: 'Моццарелла', img_src: MozzarellaImg },
  { ingredient_name: 'Гриб', img_src: MushroomImg },
  { ingredient_name: 'Оливка', img_src: OliveImg },
  { ingredient_name: 'Лук', img_src: OnionImg },
  { ingredient_name: 'ананас', img_src: PineAppleImg },
  { ingredient_name: 'Красный перец', img_src: RedChillImg },
  { ingredient_name: 'Помидор', img_src: TomatoImg },
]
</script>

<template>
  <Transition name="menu">
    <div class="menu" v-show="props.isClicked">
      <div class="menu_choice">
        <Ingredient
          v-for="ingredient in availableIngredients"
          :key="ingredient.ingredient_name"
          :imgSrc="ingredient.img_src"
          :name="ingredient.ingredient_name"
        />
      </div>
      <div class="menu_other">
        <p class="ingredient_name price">Итоговая цена: 0р</p>
        <button class="pay ingredient_name">Перейти к оплате -></button>
      </div>
    </div>
  </Transition>
</template>
