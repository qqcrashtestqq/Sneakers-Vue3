<script lang="ts" setup>
import { computed, ref } from "vue";
import IconCheckMark from "@/components/icons/IconCheckMark.vue";
import IconPlus from "@/components/icons/IconPlus.vue";

const statusButton = ref<boolean>(false);

const getIcon = computed(() => {
  return statusButton.value ? IconCheckMark : IconPlus;
});

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
    <component :is="getIcon" />
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/button.scss";
</style>
