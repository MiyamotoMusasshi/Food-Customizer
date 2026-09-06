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
import Cookies from 'js-cookie'
import { ref } from 'vue'

interface IngredientResource {
  ingredient_name: string
  img_src: string
}
interface Props {
  isClicked: boolean
}

interface IngredientInfo {
  x: number
  y: number
  key: string
  src: string
}

const props = defineProps<Props>()

const ingredientsForRender = ref<IngredientInfo[]>([])
function updateIngredientsForRender(ingredientInfo: IngredientInfo | string) {
  if (typeof ingredientInfo === 'string') {
    const index = ingredientsForRender.value.findIndex((i) => i.key == ingredientInfo)

    ingredientsForRender.value.splice(index, 1)
  } else {
    ingredientsForRender.value.push(ingredientInfo)
  }
}

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

const price = ref(Cookies.get('price') ?? '0')
function updatePrice() {
  price.value = Cookies.get('price') ?? '0'
}

const emit = defineEmits<{ changed: [IngredientInfo[]] }>()
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
          @changed="
            (ingredientInfo: IngredientInfo | string) => {
              updateIngredientsForRender(ingredientInfo)
              updatePrice()
              emit('changed', ingredientsForRender)
            }
          "
        />
      </div>
      <div class="menu_other">
        <p class="ingredient_name price">
          {{ 'Итоговая цена: ' + price + 'р' }}
        </p>
        <button class="pay ingredient_name">Перейти к оплате -></button>
      </div>
    </div>
  </Transition>
</template>
