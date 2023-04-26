<template>
  <header>
    <img src="@/assets/logo.svg" class="logo" />
    <div class="container">
      <Navigation class="desktop" />
      <Slide class="mobile">
        <Navigation />
      </Slide>
    </div>
  </header>
</template>

<script>
import { Slide } from "vue3-burger-menu";
import Navigation from "@/components/Header/Navigation/Navigation";

export default {
  components: {
    Slide,
    Navigation,
  },
};
</script>

<style lang="scss">
.bm-burger-bars {
  background-color: $white;
}
.bm-burger-button {
  width: 21px;
  height: 15px;
  z-index: 999;
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
}
</style>
