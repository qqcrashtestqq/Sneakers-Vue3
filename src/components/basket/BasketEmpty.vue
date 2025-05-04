<script lang="ts" setup>
import Link from "@/components/app/Link.vue";
import { useIsOpenBasketStore } from "@/stores/isOpenBasket.ts";
import IconArrowBack from "@/components/icons/IconArrowBack.vue";

const storeBasket = useIsOpenBasketStore();

function closeBsket() {
  storeBasket.closeBasket();
}
</script>

<template>
  <div class="empty">
    <div class="empty__img">
      <img src="/images/box.png" alt="icon for empty basket" />
    </div>
    <div class="empty__box">
      <p class="empty__title">Корзина пустая</p>
      <p class="empty__description">
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </p>
    </div>
    <Link text="Вернуться назад" :icon="IconArrowBack" @click="closeBsket" />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/basket/empty.scss";
</style>
