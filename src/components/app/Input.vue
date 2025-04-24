<script lang="ts" setup>
withDefaults(
  defineProps<{
    placeholder: string;
    label?: string;
    icon?: string;
    type?: string;
  }>(),
  {
    type: "text",
  }
);

//

const model = defineModel<string>();
</script>

<template>
  <label for="" class="input">
    <div class="input__wrapper">
      <input
        v-model="model"
        :type="type"
        class="input__input"
        :placeholder="placeholder"
      />
    </div>
    <span v-if="label" class="input__label"> {{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/input.scss";
</style>
