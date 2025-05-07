<script lang="ts" setup>
import IconArrowBack from "@/components/icons/IconArrowBack.vue";

defineProps<{
  link: string;
  text: string;
}>();
</script>

<template>
  <div class="back">
    <RouterLink :to="link" class="back__link">
      <IconArrowBack />
    </RouterLink>
    <div class="back__title">{{ text }}</div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/back.scss";
</style>
