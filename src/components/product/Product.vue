<script lang="ts" setup>
import Slider from "../Slider.vue";
import ProductItem from "./ProductItem.vue";
import Input from "@/components/app/Input.vue";
import { onMounted } from "vue";
import { useProductStore } from "../../stores/products";
// import { useAddProductStore } from "@/stores/addProductStore.ts";

const productStore = useProductStore();
// const basketStore = useAddProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<template>
  <section class="product">
    <div class="container product__container">
      <Slider />
      <div class="product__content">
        <div class="product__head">
          <h1 class="product__title">Все кроссовки</h1>
          <Input placeholder="Поиск..." />
        </div>
        <ul class="product__list">
          <ProductItem
            v-for="item in productStore.product"
            :key="item.id"
            :product="item"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/product/product.scss";
</style>
