<script lang="ts" setup>
import { ref } from "vue";
import { useRegisterStore } from "../../stores/auth";
import Input from "../app/Input.vue";

const statusBab = ref<string>("auth");
const registerStore = useRegisterStore();

const tabs = ref<{ key: string; name: string }[]>([
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
  { text: "Имя", value: "" },
  { text: "Почта", value: "" },
  { text: "Пароль", value: "", type: "password" },
]);

// login user data
const loginUser = ref([
  { text: "Почта", value: "" },
  { text: "Пароль", value: "" },
]);

function openTab(status: string) {
  statusBab.value = status;
}

async function onRegisterUser() {
  const data = {
    name: registerUser.value[0].value,
    email: registerUser.value[1].value,
    password: registerUser.value[2].value,
  };

  await registerStore.fetchRegister(data);

  registerUser.value.forEach((value) => {
    value.value = "";
  });
}

function onLoginUser() {}
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
            <Input
              v-for="item in registerUser"
              :placeholder="item.text"
              :type="item.type"
              v-model="item.value"
            />
            <button class="authorization__button" @click="onRegisterUser">
              Зарегистрироваться
            </button>
          </template>
          <!-- login -->
          <template v-else>
            <Input
              v-for="item in loginUser"
              v-mode="item.value"
              :placeholder="item.text"
              :iv-visability-label="false"
            />
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
