<template>
  <div>
    <component :is="$route.meta.layout || 'div'"> </component>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
