<template>
  <div id="blog" class="pt-120">
    <h2 class="h2 mobile tablet">Our blog</h2>
    <p class="subtext container mobile tablet">
      Subscribe to our social networks to be the first to know about news and
      updates
    </p>
    <div class="blog-content">
      <div class="titles desktop">
        <h2 class="blog-title">Our blog</h2>
        <h4 class="blog-subtitle">
          Subscribe to our social networks to be the first to know about news
          and updates
        </h4>
      </div>
      <ul class="blog-list container">
        <li v-for="item in blogItems">
          <a :href="item.url" class="blog-item">
            <p class="item-name text">
              {{ item.name }}
              <img src="@/assets/icons/blog-arrow.svg" class="arrow" />
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const blogItems = [
  { name: "Our Instagram", url: "#" },
  { name: "Our Facebook", url: "#" },
];
</script>

<style scoped lang="scss">
#blog {
  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
  .h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .subtext {
    color: $text-blue;
    margin-bottom: 60px;
    text-align: center;
    padding: 0 24px;
    @media screen and (min-width: 768px) {
      width: 40%;
    }
  }

  .item-name {
    width: 165px;
    height: 36px;
    background-color: $main-blue;
    color: white;
    display: flex;
    align-items: center;
    padding-left: 29px;
    position: absolute;

    .arrow {
      margin-left: 20px;
      @media screen and (min-width: 1440px) {
        margin-left: 10px;
        width: 14px;
      }
    }
  }
  .titles {
    @media screen and (min-width: 1440px) {
      background-color: $main-blue;
      height: 167px;
      padding: 30px 50px 30px 30px;
      width: 315px;
      position: absolute;
      z-index: 99;
      top: 20px;
      left: 90px;
    }
    .blog-title {
      @media screen and (min-width: 1440px) {
        color: white;
        font-family: Outfit;
        font-size: 28px;
        font-weight: 600;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 11px;
      }
    }
    .blog-subtitle {
      @media screen and (min-width: 1440px) {
        color: white;
        font-family: Heebo;
        font-size: 15px;
        font-weight: 300;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }

  .blog-list {
    @media screen and (min-width: 768px) {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      max-width: 690px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 1110px;
    }
  }
  .blog-list li:first-child {
    background-image: url("../../assets/insta.png");
    width: 320px;
    height: 229px;
    background-position: center;
    background-size: cover;
    margin: 0 auto 12px auto;
    position: relative;

    .item-name {
      top: 20px;
      left: -20px;
      @media screen and (min-width: 1440px) {
        background-color: transparent;
        right: 20px;
        bottom: 20px;
        top: auto;
        left: auto;
        width: auto;
      }
    }

    @media screen and (min-width: 768px) {
      width: 330px;
      margin: 0;
    }
    @media screen and (min-width: 1440px) {
      width: 540px;
      height: 388px;
    }
  }
  .blog-content {
    @media screen and (min-width: 1440px) {
      position: relative;
    }
  }

  .blog-list li:nth-child(2) {
    background-image: url("../../assets/fb.png");
    width: 320px;
    height: 229px;
    background-position: center;
    background-size: cover;
    position: relative;
    margin: 0 auto;

    .item-name {
      bottom: 20px;
      right: -20px;
      @media screen and (min-width: 1440px) {
        background-color: transparent;
        right: 20px;
        bottom: 20px;
        top: auto;
        left: auto;
        width: auto;
      }
    }

    @media screen and (min-width: 768px) {
      width: 330px;
      margin: 0;
    }
    @media screen and (min-width: 1440px) {
      width: 540px;
      height: 388px;
    }
  }
}
</style>
