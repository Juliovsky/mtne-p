<template>
  <div id="contact">
    <div class="info">
      <h2 class="h2">Contact us</h2>
      <p class="subtext">
        Our specialists will contact you as soon as possible, for this, leave
        your contact details and a request in the form.
      </p>
      <div class="contacts desktop">
        <div class="subContent">
          <ul>
            <li v-for="item in contactData" class="subContent-item">
              <img :src="item.icon" />
              <a
                :href="item.text"
                :class="item.id === 1 ? 'phone item-link' : 'item-link'"
                >{{ item.text }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <form>
      <InputBase label="Name" />
      <InputBase label="Email or phone number" />
      <InputBase label="Message" />
      <button class="btn">Send</button>
    </form>
  </div>
</template>

<script setup>
const contactData = [
  { icon: require("@/assets/icons/phone.svg"), text: "00-000-000", id: 1 },
  {
    icon: require("@/assets/icons/mail.svg"),
    text: "aaaaa@gmail.com",
    id: 2,
  },
  { icon: require("@/assets/icons/location.svg"), text: "Location", id: 3 },
];
</script>

<style scoped lang="scss">
.h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: 0em;
  @media screen and (min-width: 1440px) {
    text-align: left;
  }
}
.subtext {
  color: $text-blue;
  margin-bottom: 69px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 91px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
    text-align: left;
    margin-bottom: 50px;
  }
}
.subContent-item {
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      margin-right: 10px;
    }
  }
}
ul .subContent-item:last-child {
  margin-bottom: 0;
}
.btn {
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    display: block;
    margin: 30px auto 0 auto;
  }
}
#contact {
  margin: 120px auto;
  max-width: 320px;
  @media screen and (min-width: 768px) {
    width: 62%;
    max-width: 450px;
    display: block;
    margin: 120px auto 0 auto;
  }
  .item-link {
    @media screen and (min-width: 1440px) {
      font-size: 15px;
      font-weight: 300;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      color: black;
    }
  }
  @media screen and (min-width: 1440px) {
    margin-top: 160px;
    display: flex;
    justify-content: space-between;
  }
  .info {
    @media screen and (min-width: 1440px) {
      width: 43%;
    }
  }
  form {
    @media screen and (min-width: 1440px) {
      width: 50%;
    }
    .btn {
      margin: 30px 0 0 0;
      @media screen and (min-width: 1440px) {
        margin: 30px auto 0 0;
      }
    }
  }
}
</style>
<script>
import InputBase from "@/components/base/InputBase";
export default {
  components: { InputBase },
};
</script>
