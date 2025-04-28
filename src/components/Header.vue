<script lang="ts" setup>
import { computed, toRefs, type Component } from "vue";
import IconBasket from "./icons/IconBasket.vue";
import IconLike from "./icons/IconLike.vue";
import IconProfile from "./icons/IconProfile.vue";
import useAuthStore from "@/stores/auth";

const { accessToken } = toRefs(useAuthStore());

const headerProfileUser = computed(() => {
  return {
    name: accessToken.value ? "Профиль" : "Вход",
    link: accessToken.value ? "/profile" : "/auth",
  };
});
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <RouterLink to="/" class="header__logo">
        <img src="/images/logo.png" alt="logo" />
      </RouterLink>

      <nav class="header__nav">
        <div class="">
          <button class="header__burger">
            <span class="header__burger-span"></span>
            <span class="header__burger-span"></span>
            <span class="header__burger-span"></span>
          </button>
          <!-- <ul class="header__list">
            <li
              v-for="(item, index) in listItems"
              :key="index"
              class="header__item"
            >
              <RouterLink :to="item.link" class="header__link">
                <component :is="item.icon" />
                {{ item.name }}
              </RouterLink>
            </li>
          </ul> -->
          <ul class="header__list">
            <li class="header__item">
              <RouterLink to="/basket" class="header__link">
                <component :is="IconBasket" />
                0$</RouterLink
              >
            </li>
            <li class="header__item">
              <RouterLink to="/like" class="header__link">
                <component :is="IconLike" />Закладки</RouterLink
              >
            </li>
            <li class="header__item">
              <RouterLink :to="headerProfileUser.link" class="header__link">
                <component :is="IconProfile" />
                {{ headerProfileUser.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/header.scss";
</style>
