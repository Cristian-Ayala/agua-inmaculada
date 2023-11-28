<template>
  <section class="section services">
    <div class="container">
      <div id="aboutUs" class="tab row gx-5 items-center" data-tab-group="integration-tab">
        <div class="lg:col-7 lg:order-2">
          <div class="tab-content flex justify-center" data-tab-content>
            <div class="tab-content-panel active text-center" data-tab-panel="0">
              <img class="w-full object-contain max-w-sm" src="/images/mapa-agua_inmaculada.webp" />
            </div>
            <div class="tab-content-panel" data-tab-panel="1">
              <img class="w-full object-contain" src="/images/people.webp" />
            </div>
            <div class="tab-content-panel" data-tab-panel="2">
              <img class="w-full object-contain" src="/images/water4all.webp" />
            </div>
          </div>
        </div>
        <div class="mt-6 lg:col-5 lg:order-1 lg:mt-0">
          <div class="text-container">
            <h2 class="lg:text-4xl">Somos una franquicia con presencia internacional</h2>
            <p class="mt-4">Tenemos presencia en los siguientes paises:</p>
            <ul class="-ml-4 mt-8 border-b-0 grid grid-cols-2 gap-4" data-tab-nav>
              <li
                v-for="(country, index) in countries"
                :key="country.name"
                class="tab-nav-item items-center"
                :data-tab="index"
              >
                <img
                  class="w-10 h-10 rounded-full object-cover center"
                  :src="country.flag"
                  :alt="country.name"
                />
                <label class="ml-3">{{ country.name }}</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="mision" class="row gx-5 mt-12 items-center lg:mt-0">
        <div class="lg:col-7">
          <div class="relative rounded-2xl overflow-hidden">
            <img class="w-full object-contain" src="/images/people.webp" />
          </div>
        </div>
        <div class="mt-6 lg:col-5 lg:mt-0">
          <div class="text-container">
            <h2 class="lg:text-4xl">Misión</h2>
            <p class="mt-4">Agua purificada a un precio justo para todos.</p>
          </div>
        </div>
      </div>
      <div id="vision" class="row gx-5 mt-12 items-center lg:mt-10">
        <div class="lg:col-7 lg:order-2">
          <div class="video pb-5 pr-9">
            <div class="video-thumbnail overflow-hidden rounded-2xl">
              <img class="w-full object-contain" src="/images/water4all.webp" alt="" />
            </div>
          </div>
        </div>
        <div class="mt-6 lg:col-5 lg:order-1 lg:mt-0">
          <div class="text-container">
            <h2 class="lg:text-4xl">Visión</h2>
            <p class="mt-4">
              En 2023 queremos inspirar a más personas a través de nuestra marca y acciones para
              llevar agua purificada a un precio justo a todo el mundo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesHome",
  components: {},
  props: {},
  data() {
    return {
      countries: [
        {
          name: "Chile",
          flag: "images/icons/country-flags/cl.svg"
        },
        {
          name: "Brazil",
          flag: "images/icons/country-flags/br.svg"
        },
        {
          name: "Bolivia",
          flag: "images/icons/country-flags/bo.svg"
        },
        {
          name: "Ecuador",
          flag: "images/icons/country-flags/ec.svg"
        },
        {
          name: "Peru",
          flag: "images/icons/country-flags/pe.svg"
        },
        {
          name: "Colombia",
          flag: "images/icons/country-flags/co.svg"
        },
        {
          name: "El Salvador",
          flag: "images/icons/country-flags/sv.svg"
        },
        {
          name: "Guatemala",
          flag: "images/icons/country-flags/gt.svg"
        },
        {
          name: "Honduras",
          flag: "images/icons/country-flags/hn.svg"
        },
        {
          name: "Mexico",
          flag: "images/icons/country-flags/mx.svg"
        },
        {
          name: "Panamá",
          flag: "images/icons/country-flags/pa.svg"
        }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped></style>
