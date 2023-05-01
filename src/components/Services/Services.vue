<template>
  <div id="services">
    <div class="servicesFor container mobile tablet">
      <h2 class="h2">Our services are for</h2>
      <ul class="servicesForList" id="serviceItems">
        <li class="service-item" v-for="item in servicesFor">
          <img :src="item.icon" />
          <h4 class="h4">{{ item.name }}</h4>
        </li>
      </ul>
    </div>
    <div class="services">
      <h2 class="h2">Our services</h2>
      <ul class="servicesList">
        <li class="serviceList-item" v-for="item in services">
          <div class="content">
            <img :src="item.icon" />
            <h3 class="h3">{{ item.title }}</h3>
            <p class="subtext">{{ item.text }}</p>
            <button :class="item.id !== 2 ? 'btn' : 'btn orange'">
              Contact us
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
const servicesFor = [
  {
    icon: require("@/assets/icons/yacht.svg"),
    name: "Yachts and Mega Yachts",
    id: 1,
  },
  {
    icon: require("@/assets/icons/cruise.svg"),
    name: "Cruise ships",
    id: 2,
  },
  { icon: require("@/assets/icons/tugboat.svg"), name: "Tugs", id: 3 },
  {
    icon: require("@/assets/icons/commercialVessel.svg"),
    name: "Commercial vessels",
    id: 4,
  },
];
const services = [
  {
    icon: require("@/assets/icons/radar.svg"),
    title: "Installation and maintenance of navigation systems",
    text: "Ship radio navigation. Placerat suspendisse bibendum enim commodo a neque tempus. Diam ipsum faucibus.",
    id: 1,
  },
  {
    icon: require("@/assets/icons/repair.svg"),
    title: "Repair and testing of navigational equipment",
    text: "Satellite communication, Radio and CMDSS. Placerat suspendisse bibendum enim commodo a neque tempus. Diam ipsum faucibus.",
    id: 2,
  },
  {
    icon: require("@/assets/icons/inspection.svg"),
    title: "Annual inspection of navigational equipment",
    text: "Satellite communication, Radio and CMDSS. Placerat suspendisse bibendum enim commodo a neque tempus. Diam ipsum faucibus.",
    id: 3,
  },
];
</script>
<style scoped lang="scss">
#services {
  .h2 {
    margin-bottom: 60px;
    text-align: center;
  }

  .servicesForList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;

    li {
      width: 44%;
      margin-bottom: 40px;
      @media screen and (min-width: 768px) {
        width: 20%;
        margin-bottom: 0;
      }

      img {
        margin: 0 auto;
        @media screen and (min-width: 390px) {
          width: 60px;
        }
        @media screen and (min-width: 768px) {
          width: 50px;
          margin-bottom: 15px;
        }
      }

      .h4 {
        text-align: center;
      }
    }

    @media screen and (min-width: 768px) {
      flex-wrap: nowrap;
      width: 68%;
      max-width: 524px;
    }
  }

  .servicesForList li:nth-last-of-type(-n + 2) {
    margin-bottom: 0;
  }

  .servicesForList li:first-child {
    @media screen and (min-width: 768px) {
      order: 1;
    }
  }

  .servicesForList li:nth-child(2) {
    @media screen and (min-width: 768px) {
      order: 2;
    }
  }

  .servicesForList li:nth-child(3) {
    @media screen and (min-width: 768px) {
      order: 4;
    }
  }

  .servicesForList li:nth-child(4) {
    @media screen and (min-width: 768px) {
      order: 3;
    }
  }

  .services {
    background-image: url("../../assets/icons/transp-bg.png");
    background-repeat: no-repeat;
    background-position: left;
    margin-top: 120px;
    @media screen and (min-width: 768px) {
      margin-top: 120px;
    }
    @media screen and (min-width: 1440px) {
      margin-top: 160px;
    }
  }

  .servicesList {
    border-top: 1px solid $main-blue;
    padding-top: 30px;
    padding-bottom: 30px;
    @media screen and (min-width: 768px) {
      display: flex;
      flex-wrap: nowrap;
      margin: 0 auto;
      padding: 0;
      max-width: 720px;
    }
    @media screen and (min-width: 1440px) {
      margin: 0 auto;
      max-width: 1110px;
    }

    .serviceList-item {
      padding: 0 20px 30px 20px;
      border-bottom: 1px solid $main-blue;
      margin-top: 30px;
      @media screen and (min-width: 768px) {
        padding: 30px 13px;
        margin-top: 0;
      }
      @media screen and (min-width: 1440px) {
        padding: 60px 58px 30px 35px;
      }

      .content {
        width: 79%;
        @media screen and (min-width: 768px) {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }

        img {
          margin-bottom: 40px;
        }

        .h3 {
          margin-bottom: 20px;
        }

        .subtext {
          color: $main-blue;
          margin-bottom: 20px;
        }
      }
    }

    .serviceList-item:nth-child(1) {
      margin-top: 0;
      @media screen and (min-width: 768px) {
        border-right: 1px solid $main-blue;
      }
    }

    .serviceList-item:nth-child(even) {
      border-right: 1px solid $main-blue;
    }

    .serviceList-item:nth-child(even) .content {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      margin: 30px 0 0 auto;
      align-items: flex-end;
      @media screen and (min-width: 768px) {
        margin: 0;
        align-items: flex-start;
      }

      .h3 {
        text-align: right;
        @media screen and (min-width: 768px) {
          text-align: left;
        }
      }

      .subtext {
        text-align: right;
        @media screen and (min-width: 768px) {
          text-align: left;
        }
      }
    }
  }

  .orange {
    background-color: $main-orange;
  }
}
</style>
