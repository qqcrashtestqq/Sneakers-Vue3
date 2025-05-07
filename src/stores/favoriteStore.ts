import { defineStore } from "pinia";
import type { Product } from "@/types/product";

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    getProducts(product: Product) {
      // if (product.id) return;
      this.products.push(product);
      // console.log("this.products", this.products);
    },
  },
});
