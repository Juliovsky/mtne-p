<template>
  <header class="header container">
    <img src="@/assets/logo.svg" class="logo" />
    <Slide class="mobile">
      <Navigation />
    </Slide>
    <NavigationDesktop class="desktop" />
  </header>
</template>

<script>
import { Slide } from "vue3-burger-menu";
import Navigation from "@/components/Header/Navigation/Navigation";
import NavigationDesktop from "@/components/Header/Navigation/NavigationDesktop";

export default {
  components: {
    NavigationDesktop,
    Slide,
    Navigation,
  },
};
</script>

<style lang="scss">
.header {
  @media screen and (min-width: 1440px) {
    display: flex;
    padding: 10px 0;
    justify-content: space-between;
    align-items: center;
  }
}
.bm-burger-bars {
  background-color: $white;
}
.bm-burger-button {
  width: 21px;
  height: 15px;
  top: 38px;
  z-index: 999;
  @media screen and (min-width: 390px) {
    width: 26px;
    height: 21px;
    left: 39px;
    top: 41px;
  }
}
.bm-item-list {
  margin: 65px 0 0 0;
  .centered {
    padding: 0 20px;
  }
}
.bm-menu {
  background-color: $white;
}
.bm-cross {
  background: black;
  width: 2px !important;
  height: 17px !important;
}
.cross-style {
  top: 30px;
  left: 20px;
}
</style>

<style scoped lang="scss">
.logo {
  position: absolute;
  top: 20px;
  left: calc(50% - 42px);
  z-index: 9;
  @media screen and (min-width: 390px) {
    width: 100px;
  }
  @media screen and (min-width: 1440px) {
    position: static;
    width: 9%;
  }
}
</style>
