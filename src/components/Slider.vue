<template>
  <div id="main-slider">
    <vueper-slides fade :touchable="false" autoplay>
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
    <ul class="info-list container">
      <li class="info-item" v-for="item in menu">
        <h4 class="h2">{{ item.title }}</h4>
        <p class="subtext">{{ item.subtitle }}</p>
      </li>
    </ul>
  </div>
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
const menu = [
  {
    title: "10+",
    subtitle: "years of experience",
  },
  {
    title: "6k+",
    subtitle: "satisfied customers",
  },
  {
    title: "14+",
    subtitle: "reliable partners",
  },
];
</script>

<style lang="scss">
#main-slider {
  @media screen and (min-width: 1440px) {
    max-width: 1110px;
    margin: 0 auto;
    position: relative;
  }
  .vueperslides__parallax-wrapper {
    min-height: 609px;
    @media screen and (min-width: 390px) {
      min-height: 620px;
    }
    @media screen and (min-width: 768px) {
      min-height: 446px;
    }
    @media screen and (min-width: 1440px) {
      min-height: 564px;
    }
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
  .slider-subtitle {
    @media screen and (min-width: 1440px) {
      max-width: 262px;

    }
  }
  .vueperslides__arrow {
    display: none;
    @media screen and (min-width: 1440px) {
      display: block;
    }
  }

  .vueperslide {
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .container {
      @media screen and (min-width: 768px) {
        width: 42%;
        margin: 16px auto 0 39px;
      }
      @media screen and (min-width: 1440px) {
        margin: 0px auto 0 95px;
        width: 45%;
      }
    }
  }
  .vueperslide:nth-child(1) {
    @media screen and (min-width: 768px) {
      background-image: url("../assets/slider/boat1Tab.png") !important;
    }
  }
  .vueperslide:nth-child(2) {
    @media screen and (min-width: 768px) {
      background-image: url("../assets/slider/compassTab.png") !important;
    }
  }
  .vueperslide:nth-child(3) {
    @media screen and (min-width: 768px) {
      background-image: url("../assets/slider/capTab.png") !important;
    }
  }
  .info-list {
    margin: 30px auto 0px auto;
    display: flex;
    justify-content: space-between;
    .info-item {
      width: 23%;
      .h2 {
        margin-bottom: 5px;
      }
    }
    @media screen and (min-width: 768px) {
      width: 41%;
    }
    @media screen and (min-width: 1440px) {
      position: absolute;
      bottom: -1px;
      right: -1px;
      z-index: 9999;
      width: 476px;
      background-color: white;
      padding: 14px 30px;
    }
  }
  .info-list::before {
    display: block;
    content: "";
    height: 1px;
    width: 415px;
    position: absolute;
    background-color: white;
    top: -20px;
  }
}
</style>
