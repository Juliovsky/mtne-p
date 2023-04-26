<template>
  <div class="centered">
    <nav class="navigation">
      <ul class="nav-list">
        <li
          v-for="navItem in navigationList"
          :key="navItem.name"
          @click="openSubMenu(navItem.isExtraInfo)"
          class="navLink"
        >
          <div class="main-content">
            <a
              :href="navItem.href"
              class="text"
              v-smooth-scroll="{
                duration: 1000,
                offset: -50,
                container: '#container',
              }"
              >{{ navItem.name }}</a
            >
            <img
              src="@/assets/icons/arrow.svg"
              alt="arrow"
              :class="isArrowOpen ? 'rotate down' : 'rotate'"
              v-if="navItem.isExtraInfo"
            />
          </div>
          <div class="subContent" v-if="navItem.isExtraInfo && isArrowOpen">
            <ul>
              <li v-for="item in navItem.extraContent" class="subContent-item">
                <img :src="item.icon" />
                <a
                  :href="item.text"
                  :class="item.id === 1 ? 'phone subtext' : 'subtext'"
                  >{{ item.text }}</a
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const navigationList = [
  { name: "Services", href: "#services", isExtraInfo: false },
  { name: "About us", href: "#about", isExtraInfo: false },
  {
    name: "Contact us",
    href: "#contact",
    isExtraInfo: true,
    extraContent: [
      { icon: require("@/assets/icons/phone.svg"), text: "00-000-000", id: 1 },
      {
        icon: require("@/assets/icons/mail.svg"),
        text: "aaaaa@gmail.com",
        id: 2,
      },
      { icon: require("@/assets/icons/location.svg"), text: "Location", id: 3 },
    ],
  },
  { name: "Feedbacks", href: "#feedbacks", isExtraInfo: false },
  { name: "Our blog", href: "#blog", isExtraInfo: false },
];
const isArrowOpen = ref(false);
const openSubMenu = function (isExtra) {
  if (isExtra) {
    isArrowOpen.value = !isArrowOpen.value;
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
  .navLink {
    padding: 20px 0;
    border-bottom: 1px solid rgba(52, 140, 147, 0.5);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .main-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .subContent {
      width: 100%;
      margin-top: 20px;
      .subContent-item {
        display: flex;
        flex-wrap: nowrap;
        margin-bottom: 15px;
        margin-left: 40px;
        img {
          margin-right: 15px;
        }
        .phone {
          color: $main-blue;
          text-decoration: underline;
        }
      }
    }
  }
  .rotate {
    -moz-transition: all 0.5s linear;
    -webkit-transition: all 0.5s linear;
    transition: all 0.5s linear;
  }
  .rotate.down {
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
</style>
