<script lang="ts" setup>
import ProductSlider from "./ProductSlider.vue";

const dataProduct = [{}];
</script>

<template>
  <section class="product">
    <div class="container">
      <div class="product__inner">
        <!-- slider -->
        <div class="product__slider">
          <ProductSlider />
        </div>
        <!-- info -->
        <div class="product__info">
          <p class="product__title">{{}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/product/product.scss";
</style>
