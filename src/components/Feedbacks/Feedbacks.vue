<template>
  <div id="feedbacks" class="container">
    <h2 class="h2">Our satisfied clients</h2>
    <vueper-slides
      fade
      :touchable="false"
      :bullets="false"
      class="mobile tablet"
      autoplay
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i">
        <template #content>
          <div class="content">
            <img :src="slide.image" class="photo" />
            <div class="feedback-content">
              <img src="@/assets/icons/quote.svg" alt="quote" />
              <h4 class="subtext">
                {{ slide.content }}
              </h4>
              <p class="name">{{ slide.author }}</p>
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
    <vueper-slides
      class="no-shadow desktop container"
      :visible-slides="2"
      :bullets="false"
      slide-multiple
      :slide-ratio="1 / 4"
      :gap="5"
      :arrows-outside="false"
    >
      <vueper-slide v-for="(slide, i) in slides" :key="i">
        <template #content>
          <div class="container content">
            <img :src="slide.image" class="photo" />
            <div class="feedback-content">
              <img src="@/assets/icons/quote.svg" alt="quote" />
              <h4 class="subtext">
                {{ slide.content }}
              </h4>
              <p class="name">{{ slide.author }}</p>
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script setup>
import "vueperslides/dist/vueperslides.css";
import { VueperSlides, VueperSlide } from "vueperslides";

const slides = [
  {
    image: require("@/assets/photoFirst.png"),
    content:
      "I’m really happy with how things turned out. The team was super professional and really took care of everything. I was especially impressed with how well...",
    author: "Matthew",
  },
  {
    image: require("@/assets/photoSecond.png"),
    content:
      "Thanks for everything, I’ll definitely tell all my yacht buddies to hit up MTNE for top-notch service. You guys are the rrrreal deal!",
    author: "James",
  },
  {
    image: require("@/assets/photoSecond.png"),
    content:
      "Thanks for everything, I’ll definitely tell all my yacht buddies to hit up MTNE for top-notch service. You guys are the rrrreal deal!",
    author: "James",
  },
  {
    image: require("@/assets/photoSecond.png"),
    content:
      "Thanks for everything, I’ll definitely tell all my yacht buddies to hit up MTNE for top-notch service. You guys are the rrrreal deal!",
    author: "James",
  },
];
</script>

<style lang="scss">
#feedbacks {
  width: 100% !important;
  margin-top: 120px;
  @media screen and (min-width: 1440px) {
    margin-top: 160px;
  }
  .vueperslides__track-inner .vueperslide {
    @media screen and (min-width: 1440px) {
      width: 49% !important;
      margin-right: 30px !important;
    }
  }
  .vueperslides__track-inner .vueperslide:nth-child(odd) {
    background-color: $main-blue;
  }
  .vueperslides {
    @media screen and (min-width: 768px) {
      max-width: 690px;
      margin: 0 auto;
    }
    @media screen and (min-width: 1440px) {
      max-width: 100%;
    }
  }

  .vueperslides__track-inner .vueperslide:nth-child(even) {
    background-color: $main-orange;
  }

  .vueperslides__parallax-wrapper {
    height: 170px;
    @media screen and (min-width: 390px) {
      height: 200px;
    }
    @media screen and (min-width: 768px) {
      height: 180px;
      max-height: 180px;
      padding: 0 !important;
    }
  }
  .vueperslide {
    display: flex;
    align-items: center;
  }
  .vueperslides__arrow--prev {
    display: none;
  }
}
</style>

<style scoped lang="scss">
.h2 {
  text-align: center;
  margin-bottom: 60px;
}
.content {
  display: flex;
  align-items: center;

  .photo {
    margin-right: 10px;
    margin-left: 20px;
    @media screen and (min-width: 768px) {
      height: 180px;
      margin-right: 30px;
      margin-left: 0;
    }
  }
  .subtext {
    color: white;
    margin-top: 5px;
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    @media screen and (min-width: 1440px) {
      font-size: 15px;
      font-weight: 300;
      line-height: 22px;
      letter-spacing: 0em;
      margin-top: 3px;
    }
  }
  .feedback-content {
    width: 53%;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (min-width: 1440px) {
      height: 140px;
    }
    .name {
      font-family: Outfit;
      font-size: 15px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: white;
      @media screen and (min-width: 1440px) {
        font-size: 24px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0em;
      }
    }
  }
}
</style>
