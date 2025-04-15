<script lang="ts" setup>
import { ref } from "vue";
import IconLike from "../icons/IconLike.vue";

const statusLike = ref<boolean>(false);

function clickButton() {
  statusLike.value = !statusLike.value;
}
</script>

<template>
  <button
    class="like"
    :class="{ 'like--active': statusLike }"
    @click="clickButton"
  >
    <component :is="IconLike" class="like__icon" />
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/like.scss";
</style>
