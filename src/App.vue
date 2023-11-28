<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from "vue-router"

export default {
  components: { RouterView },
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

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
