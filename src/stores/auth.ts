import { defineStore } from "pinia";
import type { Login } from "../types/login";
import type { Register } from "../types/register";

// register user
export const useRegisterStore = defineStore("register", {
  state: () => ({
    register: [] as Register[],
  }),
  actions: {
    async fetchRegister(payload: Register) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/auth/sign-up`,
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response", response);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

// login user
export const useLoginStore = defineStore("login", {
  state: () => ({
    login: [] as Login[],
  }),
  actions: {
    async fetchLogin() {},
  },
});
