<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";

import AppLink from "./app/Link.vue";
//
interface SliderLists {
  image: string;
  title: string;
  decor: string;
  button: string;
}

// data for slider
const itemSliders: SliderLists[] = [
  {
    image: "/images/slider/bg.png",
    title: "Stan Smith,Forever!",
    decor: "/images/slider/logo.png",
    button: "Купить",
  },
  {
    image: "/images/slider/bg.png",
    title: "Stan Smith,Forever!",
    decor: "/images/slider/logo.png",
    button: "Узнать больше",
  },
  {
    image: "/images/slider/bg.png",
    title: "Думаешь ты , делаем мы !",
    decor: "/images/slider/logo.png",
    button: "Стать партнером",
  },
  {
    image: "/images/slider/bg.png",
    title: "3 клика и ты с обновой",
    decor: "/images/slider/logo.png",
    button: "Оставить заявку",
  },
];

// breakpoints slider
const breakpoints = {
  1200: {
    slidesPerView: 1,
    spaceBetween: 50,
  },

  768: {
    spaceBetween: 15,
  },
};
</script>
<template>
  <div class="slider">
    <div class="container slider__container">
      <swiper
        :modules="[Navigation, Autoplay]"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :pagination="{ clickable: true }"
        :space-between="50"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :speed="1500"
        :breakpoints="breakpoints"
        class="slider__swiper"
      >
        <swiper-slide
          v-for="(item, index) in itemSliders"
          :key="index"
          class="slider__slide"
        >
          <div class="slider__bg">
            <img :src="item.image" alt=" phote for background" />
          </div>
          <div class="slider__content">
            <div class="slider__decor">
              <img :src="item.decor" alt="decor element" />
            </div>
            <div class="slider__box">
              <div class="slider__title">
                {{ item.title }}
              </div>
              <AppLink
                :isVisabiletyIcon="false"
                :text="item.button"
                class="slider__button"
              />
            </div>
          </div>
        </swiper-slide>

        <!-- 👇 Навигационные стрелки -->
        <div class="swiper-button-prev">
          <Icon name="IconSliderArrowLeft" size="35" />
        </div>
        <div class="swiper-button-next">
          <Icon name="IconSliderArrowRight" size="35" />
        </div>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/slider.scss";
</style>
