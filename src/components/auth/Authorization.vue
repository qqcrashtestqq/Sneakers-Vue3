<script lang="ts" setup>
import { ref } from "vue";
import Input from "../../components/Input.vue";

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
        <!-- register  -->
        <form v-if="statusBab === 'auth'" class="authorization__form">
          <Input v-for="item in registerUser" :placeholder="item.text" />
          <button class="authorization__button">Зарегистрироваться</button>
        </form>
        <!-- login -->
        <form v-if="statusBab === 'login'" class="authorization__form">
          <Input v-for="item in loginUser" :placeholder="item.text" />
          <button class="authorization__button">Войти</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/authorization.scss";
</style>
