<template>
  <footer class="footer bg-theme-light/50">
    <div class="container">
      <div class="row gx-5 pb-10 pt-[52px]">
        <div class="col-12 mt-12 md:col-6 lg:col-3">
          <a href="#">
            <img src="/images/logo.webp" alt="" />
          </a>
        </div>
        <div class="col-12 mt-12 md:col-6 lg:col-3">
          <h6>Redes Sociales</h6>
          <p>aguainmaculadasv@gmail.com</p>
          <ul class="social-icons mt-4 lg:mt-6">
            <li>
              <a href="#">
                <svg
                  width="19"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path
                    d="M19.1056 10.4495C19.1056 5.09642 15 0.759277 9.9327 0.759277C4.86539 0.759277 0.759766 5.09642 0.759766 10.4495C0.759766 15.2946 4.08865 19.3191 8.49018 20.0224V13.2627H6.15996V10.4495H8.49018V8.33951C8.49018 5.91696 9.85872 4.54939 11.93 4.54939C12.9657 4.54939 14.0013 4.74476 14.0013 4.74476V7.12823H12.8547C11.7081 7.12823 11.3382 7.87063 11.3382 8.65209V10.4495H13.8904L13.4835 13.2627H11.3382V20.0224C15.7398 19.3191 19.1056 15.2946 19.1056 10.4495Z"
                    fill="#222222"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/aguainmaculada.santaelena/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="19"
                  height="21"
                  viewBox="0 0 48 48"
                >
                  <title>Instagram</title>
                  <path
                    d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  role="img"
                  width="19"
                  height="21"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>X</title>
                  <path
                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-12 mt-12 md:col-6 lg:col-3">
          <h6>Enlaces rápidos</h6>
          <ul>
            <router-link v-slot="{ href, navigate }" to="/" custom>
              <li>
                <a :href="href" @click.prevent="navigate()">Inicio</a>
              </li>
            </router-link>
            <router-link v-slot="{ href, navigate }" to="/#aboutUs" custom>
              <li>
                <a :href="href" @click.prevent="navigate()">Acerca de nosotros</a>
              </li>
            </router-link>
            <router-link v-slot="{ href, navigate }" to="/productos" custom>
              <li>
                <a :href="href" @click.prevent="navigate()">Productos</a>
              </li>
            </router-link>
          </ul>
        </div>
        <div class="col-12 mt-12 md:col-6 lg:col-3">
          <h6>Ubicación y contacto</h6>
          <p>9na calle oriente, Col. Centro, El Salvador</p>
          <p>(503) 5555-5555</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
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
