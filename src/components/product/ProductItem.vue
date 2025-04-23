<script lang="ts" setup>
import AppButton from "../app/Button.vue";
import AppLike from "../app/Like.vue";

const apiUrl = import.meta.env.VITE_API_URL;

const props = defineProps<{
  name: string;
  price: number;
  image: string;
  // favorite: boolean;
}>();
</script>

<template>
  <li class="product__item">
    <AppLike class="product__like" />
    <div class="product__image">
      <img :src="`${apiUrl}${props.image}`" alt="photo product" />
    </div>
    <a href="#" target="_blank" class="product__name">{{ name }}</a>
    <div class="product__info">
      <div class="product__price">
        <span class="product__price-text">Цена</span>
        <p class="product__price-value">{{ price }}$</p>
      </div>
      <AppButton />
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/product/product.scss";
</style>
