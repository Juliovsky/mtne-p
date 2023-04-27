<template>
  <ul class="info-list">
    <li class="info-item" v-for="item in menu">
      <h4 class="h2">{{ item.title }}</h4>
      <p class="subtext">{{ item.subtitle }}</p>
    </li>
  </ul>
</template>

<script setup>
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
<style scoped lang="scss">
.info-list {
  margin: 30px auto 136px auto;
  display: flex;
  justify-content: space-between;
  .info-item {
    width: 20%;
    .h2 {
      margin-bottom: 5px;
    }
  }
}
</style>
