<script lang="ts" setup></script>

<template>
  <header class="header">
    <div class="container header__container">
      <a href="/" class="header__logo">
        <div class="header__image">
          <img src="/images/logo.png" alt="" />
        </div>
        <div class="header__box">
          <p class="header__title">REACT SNEAKERS</p>
          <p class="header__subtitle">Магазин лучших кроссовок</p>
        </div>
      </a>
      <div class="header__block">
        <!-- burger menu -->
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <Icon name="IconBasket" size="18" />
              <a href="/" class="header__link" to="/cart">0</a>
            </li>
            <li class="header__item">
              <Icon name="IconLike" size="18" />
              <a href="/" class="header__link" to="/favorites">Закладки</a>
            </li>
            <li class="header__item">
              <Icon name="IconProfile" size="18" />
              <a href="/" class="header__link" to="/profile">Профиль</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/app/header.scss";
</style>
