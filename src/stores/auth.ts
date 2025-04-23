import { defineStore } from "pinia";
import type { Login } from "../types/login";
import type { Register } from "../types/register";

// register user
export const useRegisterStore = defineStore("register", {
  state: () => ({
    register: [] as Register[],
  }),
  actions: {
    async fetchRegister() {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}auth/sign-up`
      );
    },
  },
});

// login user
