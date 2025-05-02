<script lang="ts" setup>
import IconButtonDelete from "@/components/icons/IconButtonDelete.vue";
</script>

<template>
  <button class="close">
    <component :is="IconButtonDelete" class="close__icon" />
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/close.scss";
</style>
