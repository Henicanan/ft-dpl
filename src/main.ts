import { createApp } from "vue";
import { router } from "./router/index";
import App from "./App.vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";

const app = createApp(App);
const pinia = createPinia();

app.use(Antd);
app.use(pinia);
app.use(router);

app.mount("#app");
