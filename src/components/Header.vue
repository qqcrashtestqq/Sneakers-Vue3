<script lang="ts" setup>
import IconBasket from "./icons/IconBasket.vue";

interface ListItems {
  name: string | number;
  icon: string;
  link: string;
}

const listItems: ListItems[] = [
  {
    name: 0,
    icon: IconBasket,
    link: "/basket",
  },
  {
    name: "Закладки",
    icon: "IconLike",
    link: "/like",
  },
  {
    name: "Профиль",
    icon: "IconProfile",
    link: "/profile",
  },
];
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <RouterLink href="/" class="header__logo">
        <img src="/images/logo.png" alt="logo" />
      </RouterLink>
      <nav class="header__nav">
        <ul class="header__list">
          <li
            v-for="(item, index) in listItems"
            :key="index"
            class="header__item"
          >
            <RouterLink :to="item.link" class="header__link">
              {{ item.icon }}
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/header.scss";
</style>
