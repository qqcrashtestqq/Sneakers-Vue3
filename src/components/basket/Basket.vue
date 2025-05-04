<script lang="ts" setup>
import { ref } from "vue";
import { useIsOpenBasketStore } from "@/stores/isOpenBasket.ts";
import { useProductBasketStore } from "@/stores/productBasketStore.ts";
import BasketItem from "./BasketItem.vue";
import Link from "@/components/app/Link.vue";
import Close from "@/components/app/Close.vue";
import IconArrowBack from "@/components/icons/IconArrowBack.vue";
import BasketEmpty from "./BasketEmpty.vue";

const storeBasket = useIsOpenBasketStore();
const tax = ref<number>(0.5);
const productBasketStore = useProductBasketStore();

function closeBasket() {
  storeBasket.closeBasket();
}
</script>

<template>
  <div class="basket">
    <div class="basket__body">
      <div class="basket__inner">
        <div class="basket__head">
          <div class="basket__title">Корзина</div>
          <Close @click="closeBasket" />
        </div>
        <!-- if empty basket -->
        <BasketEmpty v-if="productBasketStore.productsOnBasket.length === 0" />
        <!-- if basket products -->
        <div v-else class="basket__products">
          <div class="basket__content">
            <ul class="basket__list">
              <BasketItem
                v-for="item in productBasketStore.productsOnBasket"
                :key="item.id"
                :product="item"
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
                <p class="basket__result-value">{{ tax }}</p>
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
