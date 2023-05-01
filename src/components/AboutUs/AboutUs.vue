<template>
  <div class="full">
    <div id="about" class="container">
      <h4 class="h2">About us</h4>
      <div class="au-content">
        <div class="au-text">
          <h5 class="subtext mb-desk">
            MTNE is a professional marine engineering company specializing in
            yacht maintenance, repair, and installation of high-quality yacht
            equipment. With years of experience in the field, MTNE has
            established itself as a reputable company providing comprehensive
            marine services to yacht owners and captains around the world.No
            matter what type of yacht you have - we are ready to service it!
          </h5>
          <h5 class="subtext mb">
            The MTNE team is made up of qualified and experienced technicians
            with a wealth of knowledge and experience in the marine industry.
            They are committed to providing quality services so that customers'
            vessels are always in perfect condition.State-of-the-art technology
            for quality ship and yacht maintenance.
          </h5>
          <h5 class="subtext">
            One of the advantages of choosing MTNE is the company's commitment
            to use the latest technology in engineering. With a focus on
            innovation and efficiency, MTNE uses state-of-the-art tools and
            equipment to provide services that meet the highest standards in the
            industry.
          </h5>
          <div class="servicesFor container desktop">
            <h2 class="h2">Our services are for</h2>
            <ul class="servicesForList" id="serviceItems">
              <li class="service-item" v-for="item in servicesFor">
                <img :src="item.icon" />
                <h4 class="h4">{{ item.name }}</h4>
              </li>
            </ul>
          </div>
        </div>
        <div class="imgs-container desktop">
          <img src="@/assets/compass.png" alt="compass" class="compass" />
          <img src="@/assets/boat.png" alt="compass" class="boat" />
        </div>
      </div>
    </div>
  </div>
</template>
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
</script>
<style lang="scss" scoped>
#about {
  margin: 120px auto;
  @media screen and (min-width: 1440px) {
    margin-top: 236px;
  }
  .h2 {
    position: relative;
    padding-left: 12px;
    margin-bottom: 32px;
    @media screen and (min-width: 1440px) {
      margin-bottom: 30px;
    }
  }

  .h2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 36px;
    background-color: $main-blue;
    transition: all 1s;
  }
  .full {
    position: relative;
  }
  .mb-desk {
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .mb {
    margin-bottom: 20px;
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
    }
    @media screen and (min-width: 1440px) {
      width: 100%;
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
  .imgs-container {
    @media screen and (min-width: 1440px) {
      position: absolute;
      right: 0;
      .compass {
        position: absolute;
        top: -120px;
        left: -100px;
      }
    }
  }
  .servicesFor.container {
    @media screen and (min-width: 1440px) {
      width: 100%;
      margin-top: 45px;
    }
  }
  .au-content {
    @media screen and (min-width: 1440px) {
      display: flex;
    }
  }
  .au-text {
    @media screen and (min-width: 1440px) {
      display: flex;
      flex-direction: column;
      width: 48%;
    }
    @media screen and (min-width: 1920px) {
      width: 75%;
    }
  }
}
</style>
