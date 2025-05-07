<script lang="ts" setup>
import ProductItem from "../components/product/ProductItem.vue";
import LinkBack from "./app/LinkBack.vue";

const products = [
  {
    id: 1,
    name: "Кроссовки",
    price: 123,
  },
  {
    id: 2,
    name: "Кроссовки",
    price: 123,
  },
  {
    id: 3,
    name: "Кроссовки",
    price: 123,
  },
];
</script>

<template>
  <section class="profile">
    <div class="container">
      <LinkBack link="/" text="Мои покупки" />
      <ul class="profile__list">
        <ProductItem v-for="item in products" :key="item.id" :product="item" />
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/profile.scss";
</style>
