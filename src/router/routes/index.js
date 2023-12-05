// import { authGuard } from "@auth0/auth0-vue";
import Default from "@/layouts/Default.vue";
import Blank from "@/layouts/Blank.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      layout: Default,
    },
  },
  {
    path: "/productos",
    name: "productos",
    component: () => import("@/views/ProductsView.vue"),
    meta: {
      layout: Default,
      renderFloatingAssets: true,
    },
  },
  {
    path: "/blank",
    name: "blank",
    component: () => import("@/views/BlankView.vue"),
    meta: {
      layout: Blank,
    },
  },
  {
    path: "/contactanos",
    name: "contactanos",
    component: () => import("@/views/ContactView.vue"),
    meta: {
      layout: Default,
      renderFloatingAssets: true,
    },
  },
];

export default routes;
