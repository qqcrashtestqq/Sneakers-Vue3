import { defineStore } from "pinia";
import type { Product } from "../types/products";

// asios шина обработки запросов

export const useProductStore = defineStore("allProducts", {
  state: () => ({
    product: [] as Product[],
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/products`
        );
        const result = await response.json();
        // console.log("result", result);

        this.product = result.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
