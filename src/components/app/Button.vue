<script lang="ts" setup>
import { computed, ref } from "vue";
import IconCheckMark from "@/components/icons/IconCheckMark.vue";
import IconPlus from "@/components/icons/IconPlus.vue";

const props = defineProps<{
  statusBoolean: boolean;
}>();

const getIcon = computed(() => {
  return props.statusBoolean ? IconCheckMark : IconPlus;
});
</script>

<template>
  <button :class="{ 'button--active': statusBoolean }" class="button">
    <component :is="getIcon" />
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/button.scss";
</style>
