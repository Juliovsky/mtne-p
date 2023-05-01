<template>
  <nav class="navigation">
    <div class="nav">
      <ul class="nav-list">
        <li
          v-for="navItem in navigationList"
          :key="navItem.name"
          class="navLink"
        >
          <a :href="navItem.href" class="subtext" v-smooth-scroll>{{
            $t(navItem.name)
          }}</a>
        </li>
      </ul>
      <div class="lang-swiper">
        <select
          id="locale-select"
          v-model="$i18n.locale"
          class="focus:border-baseGreen ml-5 block w-full rounded-lg border border-gray-300 bg-gray-50 p-1 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        >
          <option value="en">{{ $t("english") }}</option>
          <option value="esp">{{ $t("spanish") }}</option>
        </select>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navigationList = [
  { name: "aboutUs", href: "#about" },
  { name: "services", href: "#serviceItems" },
  { name: "feedbacks", href: "#feedbacks" },
  { name: "ourBlog", href: "#blog" },
  {
    name: "contactUs",
    href: "#contact",
  },
];
</script>

<style scoped lang="scss">
.nav-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: 40px;
}
.nav {
  display: flex;
  justify-content: space-between;
}
.navigation {
  @media screen and (min-width: 1440px) {
    width: 53%;
  }
}
</style>
