import { defineStore } from "pinia";
import { ref } from "vue";

export const useIsOpenBasketStore = defineStore("isOpenBasket", () => {
  const isOpenBasket = ref(false);

  // open basket window
  function openBasket() {
    isOpenBasket.value = true;
  }

  // close basket window
  function closeBasket() {
    isOpenBasket.value = false;
  }

  return {
    isOpenBasket,
    openBasket,
    closeBasket,
  };
});
