<template>
  <section id="contactBanner" class="px-5 py-20 xl:py-[120px]">
    <div class="container">
      <div
        class="bg-gradient row justify-center rounded-b-[80px] rounded-t-[20px] px-[30px] pb-[75px] pt-16"
      >
        <div class="lg:col-11">
          <div class="row">
            <div class="lg:col-7">
              <h2 class="h1 text-white">Estamos para ayudarte</h2>
              <router-link v-slot="{ href, navigate }" to="/contactanos" custom>
                {{}}
                <a
                  :href="href"
                  class="btn btn-white mt-8"
                  @click.prevent="navigate()"
                  >Contactate con nosotros</a
                >
              </router-link>
            </div>
            <div class="mt-8 lg:col-5 lg:mt-0">
              <p class="text-white">
                Estamos a tu disposición para proporcionarte la orientación que necesitas para
                disfrutar de la experiencia pura y satisfactoria que ofrecemos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelpBanner",
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

<style scoped></style>
