import "../src/assets/scss/main.scss";
import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router).use(createPinia()).mount("#app");
