<script lang="ts" setup>
defineProps({
  text: String,
  icon: "IconArrow",
  link: String,
  isVisabilety: Boolean,
});
</script>

<template>
  <a href="#" class="link">
    <Icon v-if="isVisabilety" :name="icon" size="13" />
    {{ text }}
  </a>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/link.scss";
</style>
