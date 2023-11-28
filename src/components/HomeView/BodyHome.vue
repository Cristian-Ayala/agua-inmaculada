<template>
  <BannerHome />

  <BenefitsAndCharacteristics />

  <ServicesHome />

  <HelpBanner />
</template>

<script>
import BenefitsAndCharacteristics from "./BenefitsAndCharacteristics.vue"
import BannerHome from "./BannerHome.vue"
import ServicesHome from "./ServicesHome.vue"
import HelpBanner from "./HelpBanner.vue"

export default {
  name: "HelloWorld",
  components: {
    BannerHome,
    BenefitsAndCharacteristics,
    ServicesHome,
    HelpBanner
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped></style>
