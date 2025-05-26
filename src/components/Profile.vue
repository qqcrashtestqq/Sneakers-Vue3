<script lang="ts" setup>
import CatalogItem from "../components/catalog/CatalogItem.vue";
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
        <CatalogItem v-for="item in products" :key="item.id" :product="item" />
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/profile.scss";
</style>
