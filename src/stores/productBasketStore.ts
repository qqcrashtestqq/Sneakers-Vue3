import { defineStore } from "pinia";
import type { Product } from "../types/products";

export const useProductBasketStore = defineStore("productBasket", {
  state: () => ({
    defaultBasketPrice: 0 as number,
    productsOnBasket: [] as Product[],
  }),

  actions: {
    addProductToBasket(product: Product) {
      this.productsOnBasket.push(product);
      // this.defaultBasketPrice += product.price;
      console.log("Product added to basket:", this.productsOnBasket);
      localStorage.setItem(
        "productBasket",
        JSON.stringify(this.productsOnBasket)
      );
    },
  },

  getters: {
    totalBasketPrice(state): number {
      return state.productsOnBasket.reduce(
        (acc, product) => acc + product.price,
        0
      );
    },
  },
});
