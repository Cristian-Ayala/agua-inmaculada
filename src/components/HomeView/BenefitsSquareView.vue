<template>
  <div class="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg">
    <div>
      <h3 class="h4 text-xl lg:text-2xl">{{ benefit.title }}</h3>
      <p>{{ benefit.description }}</p>
    </div>
    <span class="icon mt-4">
      <img class="objec-contain" :src="benefit.icon" :alt="`${benefit.title}.icon`" />
    </span>
  </div>
</template>

<script>
export default {
  name: "BenefitsSquareView",
  components: {},
  props: {
    benefit: {
      type: Object,
      required: true
    }
  },
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
