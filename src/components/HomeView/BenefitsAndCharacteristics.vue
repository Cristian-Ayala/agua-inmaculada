<template>
  <section id="benefits" class="section key-feature relative">
    <img
      class="absolute left-0 top-0 -z-[1] -translate-y-1/2"
      src="images/icons/feature-shape.svg"
      alt=""
    />
    <div class="container">
      <div class="row justify-between text-center lg:text-start items-center">
        <div class="lg:col-5">
          <h2>Beneficios y características destacadas</h2>
        </div>
        <div class="mt-6 lg:col-5 lg:mt-0">
          <p>
            nuestro compromiso con la sostenibilidad se refleja en cada botella, utilizando
            materiales reciclables y prácticas ecoamigables para preservar la pureza del medio
            ambiente mientras disfrutas de la pureza del agua Inmaculada.
          </p>
        </div>
      </div>
      <div class="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
        <BenefitsSquareView
          v-for="beneficio in beneficios"
          :key="beneficio.title"
          :benefit="beneficio"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BenefitsSquareView from "./BenefitsSquareView.vue"

export default {
  name: "BenefitsAndCharacteristics",
  components: { BenefitsSquareView },
  props: {},
  data() {
    return {
      beneficios: [
        {
          title: "Pureza sin igual",
          description: "Se somete a un avanzado proceso de purificación.",
          icon: "images/icons/feature-icon-1.svg"
        },
        {
          title: "Libre de impurezas",
          description: "Eliminación de contaminantes para una calidad superior.",
          icon: "images/icons/feature-icon-2.svg"
        },
        {
          title: "Riqueza mineral",
          description: "Contiene minerales esenciales para una hidratación óptima.",
          icon: "images/icons/feature-icon-3.svg"
        },
        {
          title: "Sabor fresco y natural",
          description: "Experiencia sensorial agradable y pura al paladar.",
          icon: "images/icons/feature-icon-4.svg"
        },
        {
          title: "Equilibrio mineral perfecto",
          description: "Ideal para el bienestar y la salud.",
          icon: "images/icons/feature-icon-5.svg"
        },
        {
          title: "Sin aditivos ni químicos",
          description: "Garantía de pureza y naturalidad.",
          icon: "images/icons/feature-icon-6.svg"
        },
        {
          title: "Envases ecoamigables",
          description: "Compromiso con la sostenibilidad y el medio ambiente.",
          icon: "images/icons/feature-icon-7.svg"
        },
        {
          title: "Certificaciones de calidad",
          description: "Cumplimiento de estándares rigurosos para asegurar la excelencia.",
          icon: "images/icons/feature-icon-8.svg"
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
