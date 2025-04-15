<script lang="ts" setup>
import { reactive } from "vue";
import AppButton from "../app/Button.vue";
import AppLike from "../app/Like.vue";

interface ItemProducts {
  id?: number;
  image: string;
  title: string;
  text: string;
  value: number;
}

const items = reactive<ItemProducts[]>([
  {
    image: "/images/product/1.jpg",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "/images/product/2.jpg",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "/images/product/3.jpg",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "/images/product/4.jpg",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "/images/product/5.jpg",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "/images/product/6.jpg",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "/images/product/7.jpg",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "/images/product/8.jpg",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "/images/product/9.jpg",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "/images/product/10.jpg",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "/images/product/11.jpg",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "/images/product/12.jpg",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
]);
</script>

<template>
  <li v-for="(item, index) in items" :key="index" class="product__item">
    <AppLike />
    <div class="product__image">
      <img :src="item.image" alt="photo product" />
    </div>
    <a href="" class="product__name">Мужские Кроссовки{{ item.title }}</a>
    <div class="product__info">
      <div class="product__price">
        <span class="product__price-text">{{ item.text }}</span>
        <p class="product__price-value">{{ item.value }}$</p>
      </div>
      <AppButton />
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/product/product.scss";
</style>
