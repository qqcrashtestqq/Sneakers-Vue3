<script lang="ts" setup>
import { defineProps } from "vue";
import IconButtonDelete from "@/components/icons/IconButtonDelete.vue";
import Close from "@/components/app/Close.vue";
import type { Product } from "../../types/products";
import { useProductBasketStore } from "@/stores/productBasketStore.ts";

const storeBasket = useProductBasketStore();
const apiUrl = import.meta.env.VITE_API_URL;

const props = defineProps<{
  product: Product;
}>();

function deleteProduct() {
  storeBasket.deleteProductFromBasket(props.product);
}
</script>

<template>
  <li class="basket__item">
    <div class="basket__image">
      <img :src="`${apiUrl}${props.product.image}`" alt="product image" />
    </div>
    <div class="basket__info">
      <div class="basket__name">
        {{ props.product.name }}
      </div>
      <div class="basket__price">{{ props.product.price }} $</div>
    </div>
    <Close class="basket__delete" @click="deleteProduct" />
  </li>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/basket/basket.scss";
</style>
