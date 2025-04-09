<script lang="ts" setup>
import { reactive } from "vue";

interface ItemProducts {
  id?: number;
  image: string;
  title: string;
  text: string;
  value: number;
}

const items = reactive<ItemProducts>([
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
  {
    image: "",
    title: "Nike Blazer Mid Suede",
    text: "Цена:",
    value: 50.99,
  },
]);
</script>

<template>
  <li v-for="(item in index) in items" :key="index" class="product__item">
    <div class="product__image">
      <img :src="item.image" alt="" />
    </div>
    <div class="product__name">Мужские Кроссовки{{ item.title }}</div>
    <div class="product__info">
      <div class="product__price">
        <span class="product__price-text">{{ item.text }}</span>
        <p class="product__price-value">{{ item.value }}$</p>
      </div>
      <AppButton />
    </div>
  </li>
</template>
