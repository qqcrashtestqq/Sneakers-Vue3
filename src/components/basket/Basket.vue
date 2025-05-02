<script lang="ts" setup>
import { ref } from "vue";
import { useIsOpenBasketStore } from "@/stores/isOpenBasket.ts";
import BasketItem from "./BasketItem.vue";
import Link from "@/components/app/Link.vue";
import Close from "@/components/app/Close.vue";
import IconArrowBack from "@/components/icons/IconArrowBack.vue";

const storeBasket = useIsOpenBasketStore();

interface BasketItems {
  id: number;
  image: string;
  name: string;
  price: string | number;
  foldable: boolean;
}

const data: BasketItems[] = [
  {
    id: 1,
    image: "images/product/1.jpg",
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "12 999",
    foldable: false,
  },
  {
    id: 2,
    image: "images/product/2.jpg",
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "8 499",
    foldable: false,
  },
  {
    id: 3,
    image: "images/product/3.jpg",
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "8 499",
    foldable: false,
  },
  {
    id: 4,
    image: "images/product/4.jpg",
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "8 499",
    foldable: false,
  },
  {
    id: 5,
    image: "images/product/5.jpg",
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "8 499",
    foldable: false,
  },
  {
    id: 6,
    image: "images/product/6.jpg",
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "8 499",
    foldable: false,
  },
  {
    id: 7,
    image: "images/product/7.jpg",
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "8 499",
    foldable: false,
  },
  {
    id: 8,
    image: "images/product/8.jpg",
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "8 499",
    foldable: false,
  },
];

function closeBasket() {
  storeBasket.closeBasket();
}
</script>

<template>
  <div class="basket">
    <div class="basket__body">
      <div class="basket__inner">
        <!-- if empty basket -->
        <div v-if="data.langth === 0" class="basket__empty"></div>
        <!-- if basket products -->
        <div class="basket__products">
          <div class="basket__content">
            <div class="basket__head">
              <div class="basket__title">Корзина</div>
              <Close @click="closeBasket" />
            </div>
            <ul class="basket__list">
              <BasketItem
                v-for="item in data"
                :key="item.id"
                :image="item.image"
                :name="item.name"
                :price="item.price"
                :foldable="item.foldable"
              />
            </ul>
          </div>

          <div class="basket__content">
            <div class="basket__total">
              <div class="basket__result">
                <p class="basket__result-title">Итого:</p>
                <span class="basket__result-decor"></span>
                <p class="basket__result-value">21 498 руб.</p>
              </div>
              <div class="basket__result">
                <p class="basket__result-title">Налог 5%:</p>
                <span class="basket__result-decor"></span>
                <p class="basket__result-value">1074 руб.</p>
              </div>
            </div>
            <Link text="Оформить заказ" :icon="IconArrowBack" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/basket/basket.scss";
</style>
