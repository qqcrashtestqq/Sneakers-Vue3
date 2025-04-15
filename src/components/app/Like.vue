<script lang="ts" setup>
import IconLike from "../icons/IconLike.vue";
</script>

<template>
  <button class="like like--active">
    <component :is="IconLike" class="like__icon" />
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/like.scss";
</style>
