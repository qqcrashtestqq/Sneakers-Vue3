<script lang="ts" setup>
import Slider from "../Slider.vue";
import ProductItem from "./ProdictItem.vue";
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
          <ProductItem />
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/product/product.scss";
</style>
