import { createApp } from "vue";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
import { createI18n } from "vue-i18n";
import "./assets/styles.scss";

import en from "@/locales/en.json";
import esp from "@/locales/esp.json";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  messages: {
    en,
    esp,
  },
});

const app = createApp(App);
app.use(VueSmoothScroll, {
  duration: 2000,
  updateHistory: false,
  offset: -200,
});

app.use(i18n);
app.mount("#app");
