import plugins from "./plugins/index";
import { createApp } from "vue";
import { createPinia } from "pinia";

function installPlugins({ app }) {
  plugins.forEach((plugin) => {
    try {
      plugin({ app, router });
    } catch (error) {
      window.console.error("Error occurred while loading plugin:", error, plugin);
    }
  });
}

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
installPlugins({ app });
const pinia = createPinia();
pinia.use(({ store }) => {
  store.$twoDecimalsOnly = app.config.globalProperties.$twoDecimalsOnly;
})
app.use(pinia);
app.use(router);
app.mount("#app");
