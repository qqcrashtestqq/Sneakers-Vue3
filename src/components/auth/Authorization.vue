<script lang="ts" setup>
import { ref } from "vue";
import useAuthStore from "@/stores/auth";
import Input from "../app/Input.vue";
import { useRouter } from "vue-router";

// utills
const router = useRouter();

const { registerStore, fetchLogin } = useAuthStore();
const statusTab = ref<string>("auth");
const userName = ref<string>("");
const userEmail = ref<string>("test@gmail.com");
const userPassword = ref<string>("213");

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

// error register text
const authErrors = ref<string[]>([]);

// login user data

function openTab(status: string) {
  statusTab.value = status;
}

// register user
async function onRegisterUser() {
  authErrors.value = [];

  const userCredentials = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };

  // if (data.password.length < 8 || data.password.length > 12) return;

  const { data, errors } = await registerStore.fetchRegister(userCredentials);

  console.log("dataResponse", data, errors);
  if (errors) return (authErrors.value = errors);
}

// login user
async function onLoginUser() {
  const userLoginUser = {
    email: userEmail.value,
    password: userPassword.value,
  };
  console.log("userLoginUser", userLoginUser);

  await fetchLogin(userLoginUser);
  router.push("/");
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
            :class="{ 'authorization__tab--active': item.key === statusTab }"
            class="authorization__tab"
            @click="openTab(item.key)"
          >
            {{ item.name }}
          </button>
        </div>
        <form class="authorization__form" @submit.prevent>
          <!-- register  -->
          <template v-if="statusTab === 'auth'">
            <Input v-model="userName" placeholder="Имя" />
            <Input v-model="userEmail" placeholder="Почта" />
            <Input
              v-model="userPassword"
              type="password"
              placeholder="Пароль"
            />
            <ul class="authorization__errors" v-if="authErrors.length">
              <li
                v-for="(item, index) in authErrors"
                :key="index"
                style="color: red"
              >
                {{ item }}
              </li>
            </ul>
            <button class="authorization__button" @click="onRegisterUser">
              Зарегистрироваться
            </button>
          </template>
          <!-- login -->
          <template v-else>
            <Input v-model="userEmail" placeholder="Почта" />
            <Input
              v-model="userPassword"
              type="password"
              placeholder="Пароль"
            />
            <button class="authorization__button" @click="onLoginUser">
              Войти
            </button>
          </template>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/authorization.scss";
</style>
