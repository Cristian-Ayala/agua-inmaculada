<template>
  <section class="section banner relative">
    <div class="container">
      <div class="row items-center">
        <div class="lg:col-6">
          <h1 class="banner-title">Agua Inmaculada, la mejor agua por el mejor precio.</h1>
          <p class="mt-6">
            la elección más clara y fresca para satisfacer tu sed con pureza incomparable. Nuestra
            agua, destilada de fuentes prístinas y sometida a rigurosos controles de calidad, ofrece
            una pureza cristalina que deleitará tus sentidos.
          </p>
          <a class="btn btn-white mt-8" href="#">Compra Tu agua ¡YA!</a>
        </div>
        <div class="lg:col-6">
          <img
            class="w-full object-contain h-[25rem]"
            src="/images/water_glass-of-water.png"
            height="100"
            alt=""
          />
        </div>
      </div>
    </div>
    <img
      class="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
      src="/images/banner-shape.svg"
      alt="upper buble top rigth side"
    />
  </section>
</template>

<script>
export default {
  name: "BannerHome",
  components: {},
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
