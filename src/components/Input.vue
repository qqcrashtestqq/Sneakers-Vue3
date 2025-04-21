<script lang="ts" setup>
defineProps({
  placeholder: String,
  label: String,
  icon: String,
  isVisabiletyLabel: Boolean,
  isVisabiletyIcon: Boolean,
});
</script>

<template>
  <label for="" class="input">
    <div class="input__wrapper">
      <input type="text" class="input__input" :placeholder="placeholder" />
    </div>
    <span class="input__label"> {{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/input.scss";
</style>
