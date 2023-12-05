<template>
  <div>
    <transition name="transition" mode="out-in">
      <FloatingAssets v-if="$route.meta.renderFloatingAssets" />
    </transition>
    <HeaderHtml />
    <router-view v-slot="{ Component }">
      <transition name="transition" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterComponent />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import HeaderHtml from "../components/Header.vue";
import FooterComponent from "../components/Footer.vue";
import FloatingAssets from "../components/FloatingAssets.vue";

export default {
  name: "App",
  components: {
    RouterView,
    HeaderHtml,
    FooterComponent,
    FloatingAssets,
  },
  setup() {},
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
/* .transition-enter-active,
.transition-leave-active {
  transition: all 0.3s ease;
}
.transition-enter-from,
.transition-leave-to {
  opacity: 0;
} */

.transition-enter-active {
  transition: all 0.3s ease-out;
}

.transition-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.transition-enter-from,
.transition-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
