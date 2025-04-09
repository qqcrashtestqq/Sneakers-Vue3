<script lang="ts" setup>
interface Link {
  text: string;
  isVisibiletyIcon: boolean;
}

// icon: String,
//   text: String,
//   isVisibiletyIcon: boolean,

defineProps<Link>();
</script>

<template>
  <a isVisibiletyIcon="true" href="#">
    <Icon name="IconArrow" size="13" />
    {{ text }}</a
  >
</template>

<style lang="scss" scoped>
@use "../../assets/scss/app/link.scss";
</style>
