<script lang="ts" setup>
import AppButton from "../app/Button.vue";
import AppLike from "../app/Like.vue";
import Counter from "@/components/app/Counter.vue";
import { catalog } from "@/types/catalogs";
import { useCatalogStore } from "../../stores/catalogBasketStore.ts";
import { computed } from "vue";
import { useFavoriteStore } from "@/stores/favoriteStore.ts";

const apiUrl = import.meta.env.VITE_API_URL;
const catalogBasketStore = usecatalogBasketStore();
const favoriteStore = useFavoriteStore();

const props = defineProps<{
  catalog: catalog;
}>();

// TODO добавить компьютед для оперделения товара лежащего в корзине

const computedBasket = computed(() => {
  return catalogBasketStore.catalogsOnBasket.find((item: object) => {
    console.log("item", item);

    return item.id === props.catalog.id;
  });
});

function addcatalogInBasket() {
  if (computedBasket.value) return;
  catalogBasketStore.addcatalogToBasket(props.catalog);
}

function addFavorite() {
  favoriteStore.getcatalogs(props.catalog);
  console.log("favoriteStore", favoriteStore.catalogs);
}
</script>

<template>
  <li class="catalog__item">
    <AppLike class="catalog__like" @click="addFavorite" />

    <div class="catalog__image">
      <img
        :src="`${apiUrl}/${props.catalog.image}`"
        :alt="props.catalog.name"
      />
    </div>
    <a
      :href="`${apiUrl}/catalogs/${props.catalog.id}`"
      target="_blank"
      class="catalog__name"
      >{{ props.catalog.name }}</a
    >
    <!-- <Counter class="catalog__counter" /> -->
    <div class="catalog__info">
      <div class="catalog__price">
        <span class="catalog__price-text">Цена</span>
        <p class="catalog__price-value">{{ props.catalog.price }}$</p>
      </div>

      <AppButton :statusBoolean="computedBasket" @click="addcatalogInBasket" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/catalog/catalog.scss";
</style>
