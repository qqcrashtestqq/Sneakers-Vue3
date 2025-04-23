<script lang="ts" setup>
import ProductItem from "../components/product/ProductItem.vue";
import IconArrowBack from "../components/icons/IconArrowBack.vue";

const products = [
  {
    id: 1,
    name: "Кроссовки",
    price: 123,
  },
  {
    id: 1,
    name: "Кроссовки",
    price: 123,
  },
  {
    id: 1,
    name: "Кроссовки",
    price: 123,
  },
];
</script>

<template>
  <section class="profile">
    <div class="container">
      <div class="profile__head">
        <RouterLink to="/" class="profile__button">
          <component is="IconArrowBack" />
        </RouterLink>
        <div class="profile__title">Мои покупки</div>
      </div>
      <ul class="profile__list">
        <ProductItem
          v-for="item in products"
          :key="item.id"
          :name="item.name"
          :price="item.price"
        />
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/profile.scss";
</style>
