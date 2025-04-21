<script lang="ts" setup>
import { onMounted } from "vue";
import { useProductStore } from "../../stores/ProductsStore";
import AppButton from "../app/Button.vue";
import AppLike from "../app/Like.vue";

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<template>
  <!-- {{ productStore.product }} -->
  <li v-for="item in productStore.product" :key="item.id" class="product__item">
    <AppLike class="product__like" />
    <div class="product__image">
      <!-- <img :src="item.image" alt="photo product" /> -->
    </div>
    <a href="" class="product__name">{{ item.name }}</a>
    <div class="product__info">
      <div class="product__price">
        <span class="product__price-text">Цена</span>
        <p class="product__price-value">{{ item.price }}$</p>
      </div>
      <AppButton />
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/product/product.scss";
</style>
