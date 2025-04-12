<script lang="ts" setup>
interface ListItems {
  name: string | number;
  icon: string;
  link: string;
}

const listItems: ListItems[] = [
  {
    name: 0,
    icon: "IconBasket",
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
      <RouteerLink href="/" class="header__logo">
        <img src="/images/logo.png" alt="logo" />
      </RouteerLink>
      <nav class="header__nav">
        <ul class="header__list">
          <li
            v-for="(item, index) in listItems"
            :key="index"
            class="header__item"
          >
            <RouterLink :to="item.link" class="header__link">
              <Icon :name="item.icon" size="20" />
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
