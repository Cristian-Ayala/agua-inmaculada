<template>
  <main>
    <BannerHome />

    <BenefitsAndCharacteristics />

    <ServicesHome />

    <HelpBanner />
  </main>
</template>

<script>
import BenefitsAndCharacteristics from "@/components/HomeView/BenefitsAndCharacteristics.vue";
import BannerHome from "@/components/HomeView/BannerHome.vue";
import ServicesHome from "@/components/HomeView/ServicesHome.vue";
import HelpBanner from "@/components/HomeView/HelpBanner.vue";

export default {
  name: "HelloWorld",
  components: {
    BannerHome,
    BenefitsAndCharacteristics,
    ServicesHome,
    HelpBanner,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {
    $route: {
      handler($to) {
        this.scrollTo($to.hash);
      },
      immediate: true,
    },
  },

  mounted() {},
  methods: {
    scrollTo(hash) {
      hash = hash.replace("#", "");
      this.$nextTick(() => {
        const hashElement = document.getElementById(hash);
        if (!hashElement) return;
        hashElement.scrollIntoView({ behavior: "smooth" });
      });
    },
  },
};
</script>

<style scoped></style>
