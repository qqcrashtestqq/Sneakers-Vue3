import { defineStore } from "pinia";
import type { Product } from "../types/products";

export const useProductBasketStore = defineStore("productBasket", {
  state: () => ({
    productsOnBasket: [] as Product[],
  }),

  actions: {
    // add product for basket
    addProductToBasket(product: Product) {
      this.productsOnBasket.push(product);
      localStorage.setItem(
        "productBasket",
        JSON.stringify(this.productsOnBasket)
      );
    },
    // delete product from basket
    deleteProductFromBasket(product: Product) {
      if (!this.productsOnBasket) return;
      this.productsOnBasket = this.productsOnBasket.filter(
        (item) => item.id !== product.id
      );
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
