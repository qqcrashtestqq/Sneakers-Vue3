<script lang="ts" setup>
interface ListItems {
  name: string;
  link: string;
}

const itemList: ListItems[] = [
  {
    name: "Про нас",
    link: "/about",
  },
  {
    name: "Каталог",
    link: "/catalog",
  },
  {
    name: "Оплата",
    link: "/payment",
  },
  {
    name: "Доставка",
    link: "/delivery",
  },
  {
    name: "Контакты",
    link: "/contacts",
  },
];
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <RouterLink to="/" class="footer__logo">
        <img src="/images/logo.png" alt="" />
      </RouterLink>

      <ul class="footer__list">
        <li v-for="(item, index) in itemList" :key="index" class="footer__item">
          <RouterLink :to="item.link" class="footer__link">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/footer.scss";
</style>
