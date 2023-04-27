import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import { CoWhatsapp, CoFacebookF, CoInstagram } from "oh-vue-icons/icons";
import { BiPhoneFill } from "oh-vue-icons/icons";
import { FaPhoneAlt, FaUserAlt } from "oh-vue-icons/icons";

addIcons(
  CoWhatsapp,
  CoFacebookF,
  CoInstagram,
  BiPhoneFill,
  FaPhoneAlt,
  FaUserAlt
);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);

app.mount("#app");
