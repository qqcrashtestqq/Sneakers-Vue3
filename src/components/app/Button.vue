<script lang="ts" setup>
import { ref } from "vue";

const statusButton = ref(false);

function clickButton() {
  statusButton.value = !statusButton.value;
}
</script>

<template>
  <!-- button--active active class -->
  <button
    :class="{ 'button--active': statusButton }"
    class="button"
    @click="clickButton"
  >
    <Icon name="IconCheckMark" size="10" />
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/button.scss";
</style>
