<script lang="ts" setup>
import ProductList from "./ProdictList.vue";
import Slider from "../Slider.vue";
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
        <ProductList />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/product/product.scss";
</style>
