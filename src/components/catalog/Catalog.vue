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
  catalogStore.fetchcatalogs();
});
</script>

<template>
  <section class="catalog">
    <div class="container catalog__container">
      <Slider />
      <div class="catalog__content">
        <div class="catalog__head">
          <h1 class="catalog__title">Все кроссовки</h1>
          <Input placeholder="Поиск..." />
        </div>
        <ul class="catalog__list">
          <CatalogItem
            v-for="item in catalogStore.catalog"
            :key="item.id"
            :catalog="item"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/catalog/catalog.scss";
</style>
