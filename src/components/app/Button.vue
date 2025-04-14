<script lang="ts" setup>
import { ref } from "vue";
import IconCheckMark from "../icons/IconCheckMark.vue";
import IconPlus from "../icons/IconPlus.vue";

const statusButton = ref<boolean>(false);

function clickButton() {
  statusButton.value = !statusButton.value;
}
</script>

<template>
  <button
    :class="{ 'button--active': statusButton }"
    class="button"
    @click="clickButton"
  >
    <component v-if="statusButton === false" :is="IconPlus" />
    <component v-if="statusButton === true" :is="IconCheckMark" />
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/button.scss";
</style>
