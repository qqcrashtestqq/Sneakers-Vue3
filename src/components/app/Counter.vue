<script lang="ts" setup>
import { ref } from "vue";

const counter = ref<number>(0);

function increment() {
  if (counter.value <= 0) return;
  counter.value--;
}

function decrement() {
  counter.value++;
}
</script>

<template>
  <div class="counter">
    <button class="counter__button" @click="increment">-</button>
    <input
      type="number"
      placeholder="0"
      v-model="counter"
      class="counter__input"
    />
    <button class="counter__button" @click="decrement">+</button>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/counter.scss";
</style>
