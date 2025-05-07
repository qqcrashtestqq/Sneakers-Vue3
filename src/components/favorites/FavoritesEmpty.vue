<script lang="ts" setup>
import Link from "@/components/app/Link.vue";
</script>

<template>
  <div class="empty">
    <div class="empty__block">
      <div class="empty__image">
        <img src="/images/smail.png" alt="" />
      </div>
      <div class="empty__box">
        <div class="empty__title">Закладок нет :(</div>
        <p class="empty__description">Вы ничего не добавляли в закладки</p>
      </div>
      <Link text="Вернуться назад" link="/" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/favorites/empty.scss";
</style>
