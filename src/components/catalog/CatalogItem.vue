<script lang="ts" setup>
import AppButton from "../app/Button.vue";
import AppLike from "../app/Like.vue";
import Counter from "@/components/app/Counter.vue";
import { Product } from "@/types/products";
import { useProductBasketStore } from "@/stores/productBasketStore.ts";
import { computed } from "vue";
import { useFavoriteStore } from "@/stores/favoriteStore.ts";

const apiUrl = import.meta.env.VITE_API_URL;
const productBasketStore = useProductBasketStore();
const favoriteStore = useFavoriteStore();

const props = defineProps<{
  product: Product;
}>();

// TODO добавить компьютед для оперделения товара лежащего в корзине

const computedBasket = computed(() => {
  return productBasketStore.productsOnBasket.find((item: object) => {
    console.log("item", item);

    return item.id === props.product.id;
  });
});

function addProductInBasket() {
  if (computedBasket.value) return;
  productBasketStore.addProductToBasket(props.product);
}

function addFavorite() {
  favoriteStore.getProducts(props.product);
  console.log("favoriteStore", favoriteStore.products);
}
</script>

<template>
  <li class="product__item">
    <AppLike class="product__like" @click="addFavorite" />

    <div class="product__image">
      <img
        :src="`${apiUrl}/${props.product.image}`"
        :alt="props.product.name"
      />
    </div>
    <a
      :href="`${apiUrl}/products/${props.product.id}`"
      target="_blank"
      class="product__name"
      >{{ props.product.name }}</a
    >
    <!-- <Counter class="product__counter" /> -->
    <div class="product__info">
      <div class="product__price">
        <span class="product__price-text">Цена</span>
        <p class="product__price-value">{{ props.product.price }}$</p>
      </div>

      <AppButton :statusBoolean="computedBasket" @click="addProductInBasket" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/product/product.scss";
</style>
