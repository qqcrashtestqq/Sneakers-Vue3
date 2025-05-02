<script lang="ts" setup>
import { defineProps } from "vue";
import IconButtonDelete from "@/components/icons/IconButtonDelete.vue";
import Close from "@/components/app/Close.vue";
defineProps<{
  id: number;
  image: string;
  name: string;
  price: number;
  foldable: boolean;
}>();
</script>

<template>
  <li class="basket__item">
    <div class="basket__image">
      <img :src="image" alt="product image" />
    </div>
    <div class="basket__info">
      <div class="basket__name">
        {{ name }}
      </div>
      <div class="basket__price">{{ price }} $</div>
    </div>
    <Close class="basket__delete" />
  </li>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/basket/basket.scss";
</style>
