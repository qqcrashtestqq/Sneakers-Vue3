<script lang="ts" setup>
import { ref } from "vue";
import Input from "../app/Input.vue";

const statusBab = ref<string>("auth");

const tabs = ref([
  {
    key: "auth",
    name: "Регистрация",
  },
  {
    key: "login",
    name: "Авторизация",
  },
]);

// register user data
const registerUser = ref([
  { text: "Имя", error: "не корректные данные" },
  { text: "Почта", error: "не корректные данные" },
  { text: "Пароль", error: "пароль должен содержать не менее 8 символов" },
]);

// login user data
const loginUser = ref([
  { text: "Почта", error: "не корректные данные" },
  { text: "Пароль", error: "пароль должен содержать не менее 8 символов" },
]);

function openTab(status: string) {
  statusBab.value = status;
}

function onLoginUser() {
  console.log("Vlad gay");
}
</script>

<template>
  <section class="authorization">
    <div class="container">
      <div class="authorization__inner">
        <div class="authorization__tabs">
          <!-- authorization__tab--active -->
          <button
            v-for="(item, index) in tabs"
            :key="index"
            :class="{ 'authorization__tab--active': item.key === statusBab }"
            class="authorization__tab"
            @click="openTab(item.key)"
          >
            {{ item.name }}
          </button>
        </div>
        <form class="authorization__form" @submit.prevent="onLoginUser">
          <!-- register  -->
          <template v-if="statusBab === 'auth'">
            <Input v-for="item in registerUser" :placeholder="item.text" />
            <button class="authorization__button">Зарегистрироваться</button>
          </template>
          <!-- login -->
          <template v-else>
            <Input v-for="item in loginUser" :placeholder="item.text" />
            <button class="authorization__button">Войти</button>
          </template>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/authorization.scss";
</style>
