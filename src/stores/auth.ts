import { defineStore } from "pinia";
import type { Login } from "../types/login";
import type { Register } from "../types/register";

// register user
export default defineStore("auth", {
  state: () => ({
    register: [] as Register[],
    login: [] as Login[],
    accessToken: JSON.parse(localStorage.getItem("accessToken") || "null"),
  }),
  actions: {
    async fetchRegister(payload: Register) {
      const responseFields = { data: null, errors: null };

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

        const result = await response.json();
        console.log("result", result);

        if ("message" in result) responseFields.errors = result.message;
        else responseFields.data = result;
      } catch (error) {
        console.error(error);
      }

      return responseFields;
    },
    async fetchLogin(payload: Login) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/auth/sign-in`,
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();

        localStorage.setItem("accessToken", JSON.stringify(result.accessToken));
        this.accessToken = result.accessToken;
      } catch (error) {
        throw new Error("Ошибка авторизации");
      }
    },
  },
});
