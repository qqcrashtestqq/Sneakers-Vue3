<script lang="ts" setup>
import { defineProps } from "vue";
import IconButtonDelete from "@/components/icons/IconButtonDelete.vue";
import Close from "@/components/app/Close.vue";
import type { Product } from "../../types/products";

const props = defineProps<{
  product: Product;
}>();
</script>

<template>
  <li class="basket__item">
    <div class="basket__image">
      <!-- <img :src="image" alt="product image" /> -->
    </div>
    <div class="basket__info">
      <div class="basket__name">
        {{ props.product.name }}
      </div>
      <div class="basket__price">{{ props.product.price }} $</div>
    </div>
    <Close class="basket__delete" @click="" />
  </li>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/basket/basket.scss";
</style>
