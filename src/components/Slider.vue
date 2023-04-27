<template>
  <vueper-slides fade :touchable="false" autoplay :arrows="false">
    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
      <template #content>
        <div class="container">
          <h2 class="h1 slider-title">
            {{ slide.content }}
          </h2>
          <h4 class="subtext slider-subtitle">
            {{ slide.subContent }}
          </h4>
          <button class="btn">Contact us</button>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script setup>
import "vueperslides/dist/vueperslides.css";
import { VueperSlides, VueperSlide } from "vueperslides";

const slides = [
  {
    image: require("@/assets/slider/boat1.png"),
    content:
      "Expert ship services in Florida. Installation and repair of radio & navigation equipment.",
    subContent:
      "No matter what type of yacht you have - we are ready to service it! Call us now!",
  },
  {
    image: require("@/assets/slider/compass2.png"),
    content:
      "Expert ship services in Florida. Installation and repair of radio & navigation equipment.",
    subContent:
      "No matter what type of yacht you have - we are ready to service it! Call us now!",
  },
  {
    image: require("@/assets/slider/cap3.png"),
    content:
      "Expert ship services in Florida. Installation and repair of radio & navigation equipment.",
    subContent:
      "No matter what type of yacht you have - we are ready to service it! Call us now!",
  },
];
</script>

<style lang="scss">
.vueperslides__parallax-wrapper {
  min-height: 609px;
}
.vueperslides__bullets .vueperslides__bullet .default {
  width: 20px;
  height: 2px;
  border-radius: 1px;
  background: rgba(255, 255, 255, 0.5);
}
.vueperslides__bullets
  .vueperslides__bullet.vueperslides__bullet--active
  .default {
  width: 36px;
  height: 2px;
  background-color: $accent-orange;
  border: none;
}
.vueperslides__bullet {
  margin: 40px 0.6em;
}
.slider-title,
.slider-subtitle {
  color: $white;
  margin-bottom: 30px;
}
.vueperslide {
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
