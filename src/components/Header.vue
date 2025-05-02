<script lang="ts" setup>
import { computed, ref, toRefs } from "vue";
import { useIsOpenBasketStore } from "@/stores/isOpenBasket.ts";
const { accessToken } = toRefs(useAuthStore());
import IconBasket from "./icons/IconBasket.vue";
import IconLike from "./icons/IconLike.vue";
import IconProfile from "./icons/IconProfile.vue";
import useAuthStore from "@/stores/auth";
import Basket from "./basket/Basket.vue";

const burgerStatus = ref<boolean>(false);
const isOpenBasketStore = useIsOpenBasketStore();

const headerProfileUser = computed(() => {
  return {
    name: accessToken.value ? "Профиль" : "Вход",
    link: accessToken.value ? "/profile" : "/auth",
  };
});

// open modal basket
function openBasket() {
  isOpenBasketStore.openBasket();
}
</script>

<template>
  <header class="header">
    <Transition name="fade">
      <Basket v-if="isOpenBasketStore.isOpenBasket" />
    </Transition>
    <div class="container header__container">
      <RouterLink to="/" class="header__logo">
        <img src="/images/logo.png" alt="logo" />
      </RouterLink>

      <div class="header__block">
        <div class="header__box">
          <nav class="header__nav">
            <ul class="header__list">
              <li class="header__item">
                <button class="header__link" @click="openBasket">
                  <component :is="IconBasket" />
                  0$
                </button>
                <!-- <RouterLink to="/basket" class="header__link" >
                  <component :is="IconBasket" />
                  0$</RouterLink
                > -->
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
          </nav>
        </div>

        <!-- <button
          class="header__burger"
          :class="{ 'header__burger--active': burgerStatus }"
          @click="burgerMenu"
        >
          <span class="header__burger-span"></span>
          <span class="header__burger-span"></span>
          <span class="header__burger-span"></span>
        </button> -->
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/header.scss";
</style>
