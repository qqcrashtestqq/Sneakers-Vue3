<script lang="ts" setup>
import Slider from "../Slider.vue";
import ProductItem from "./ProductItem.vue";
import { onMounted } from "vue";
import { useProductStore } from "../../stores/products";

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
  console.log("productStore", productStore.product);
});
</script>

<template>
  <section class="product">
    <div class="container product__container">
      <Slider />
      <div class="product__content">
        <div class="product__head">
          <h1 class="product__title">Все кроссовки</h1>
          <!-- TODO input -->
        </div>
        <ul class="product__list">
          <ProductItem
            v-for="item in productStore.product"
            :key="item.id"
            :name="item.name"
            :price="item.price"
            :image="item.image"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/product/product.scss";
</style>
