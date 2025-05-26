<script lang="ts" setup>
import Slider from "../Slider.vue";
import CatalogItem from "./CatalogItem.vue";
import Input from "@/components/app/Input.vue";
import { onMounted } from "vue";
import { useCatalogStore } from "../../stores/catalog";
// import { useAddcatalogStore } from "@/stores/addcatalogStore.ts";

const catalogStore = useCatalogStore();
// const basketStore = useAddcatalogStore();

onMounted(() => {
  catalogStore.fetchProducts();
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
          <CatalogItem
            v-for="item in catalogStore.product"
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
