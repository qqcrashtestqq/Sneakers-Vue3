<script lang="ts" setup>
import { ref } from "vue";
import ProductItem from "../product/ProductItem.vue";
import FavritesEmpty from "./FavoritesEmpty.vue";
import LinkBack from "@/components/app/LinkBack.vue";
import { useFavoriteStore } from "@/stores/favoriteStore.ts";

const favoriteStore = useFavoriteStore();
</script>

<template>
  <section class="favorites">
    <div class="container">
      <div v-if="favoriteStore.products.length" class="favorites__block">
        <LinkBack link="/" text="Мои закладки" />
        <ul class="favorites__list">
          <ProductItem
            v-for="item in favoriteStore.products"
            :key="item.id"
            :product="item"
          />
        </ul>
      </div>

      <FavritesEmpty v-else />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/favorites/favorites.scss";
</style>
