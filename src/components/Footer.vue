<template>
  <div id="footer">
    <img src="@/assets/logo.svg" class="logo mobile tablet" />
    <img src="@/assets/logo-full.png" alt="logo" class="logo desktop" />
    <ul class="contacts-list container">
      <li class="contacts-item" v-for="icon in socialSites">
        <a :href="icon.link">
          <img :src="icon.icon" :alt="icon.link" />
        </a>
      </li>
    </ul>
    <div class="footer-nav">
      <ul class="footerNav-list tablet">
        <li
          v-for="navItem in navigationList"
          :key="navItem.name"
          class="navLink"
        >
          <a :href="navItem.href" class="subtext" v-smooth-scroll>{{
            navItem.name
          }}</a>
        </li>
      </ul>
    </div>
    <p class="subtext">All rights reserved</p>
  </div>
</template>

<script setup>
const socialSites = [
  {
    icon: require("@/assets/icons/fb-soc.svg"),
    link: "#",
  },
  {
    icon: require("@/assets/icons/insta-soc.svg"),
    link: "#",
  },
  {
    icon: require("@/assets/icons/phone-soc.svg"),
    link: "#",
  },
  {
    icon: require("@/assets/icons/mail-soc.svg"),
    link: "#",
  },
];
const navigationList = [
  { name: "About us", href: "#about" },
  { name: "Services", href: "#serviceItems" },
  { name: "Feedbacks", href: "#feedbacks" },
  { name: "Our blog", href: "#blog" },
  {
    name: "Contact us",
    href: "#contact",
  },
];
</script>

<style lang="scss" scoped>
#footer {
  padding: 30px 0;
  border-top: 1px solid $main-blue;

  .logo {
    margin: 0 auto 20px auto;
    @media screen and (min-width: 1440px) {
      margin: 0 auto 30px auto;
    }
  }
  .subtext {
    text-align: center;
    color: #acacac;
  }
  .contacts-list {
    display: flex;
    margin: 0 auto 30px auto;
    align-items: center;
    justify-content: center;
    li {
      margin-right: 30px;
    }
  }
  .contacts-list li:last-child {
    margin-right: 0;
  }
  .navLink {
    color: $grey;
  }
  .footerNav-list {
    display: flex;
    justify-content: space-between;
  }
  .footer-nav {
    max-width: 566px;
    margin: 0 auto 30px auto;
  }
}
</style>
