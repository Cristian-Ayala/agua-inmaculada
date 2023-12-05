<template>
  <header class="header pt-0">
    <nav class="navbar container">
      <!-- logo -->
      <div class="order-0">
        <router-link v-slot="{ href, navigate }" to="/" custom>
          <a :href="href" @click.prevent="navigate()">
            <img src="/images/logo.webp" height="30" width="147" alt="logo" />
          </a>
        </router-link>
      </div>
      <!-- navbar toggler -->
      <input id="nav-toggle" type="checkbox" class="hidden" />
      <label
        id="show-button"
        for="nav-toggle"
        class="order-1 flex cursor-pointer items-center lg:order-1 lg:hidden"
      >
        <svg class="h-6 fill-current" viewBox="0 0 20 20">
          <title>Menu Open</title>
          <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
        </svg>
      </label>
      <label
        id="hide-button"
        for="nav-toggle"
        class="order-2 hidden cursor-pointer items-center lg:order-1"
      >
        <svg class="h-6 fill-current" viewBox="0 0 20 20">
          <title>Menu Close</title>
          <polygon
            points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
            transform="rotate(45 10 10)"
          ></polygon>
        </svg>
      </label>
      <!-- /navbar toggler -->
      <ul
        id="nav-menu"
        class="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-center lg:space-x-5"
      >
        <router-link v-slot="{ href, navigate, isExactActive }" to="/" custom>
          <li class="nav-item">
            <a
              :href="href"
              class="nav-link"
              :class="{ active: $route.hash === '' && isExactActive }"
              @click.prevent="navigate()"
              >Inicio</a
            >
          </li>
        </router-link>
        <router-link v-slot="{ href, navigate }" to="/#aboutUs" custom>
          <li class="nav-item">
            {{}}
            <a
              :href="href"
              class="nav-link"
              :class="{ active: $route.hash === '#aboutUs' }"
              @click.prevent="navigate()"
              >Acerca de nosotros</a
            >
          </li>
        </router-link>
        <router-link v-slot="{ href, navigate, isExactActive }" to="/productos" custom>
          <li class="nav-item">
            <a
              :href="href"
              class="nav-link"
              :class="{ active: isExactActive }"
              @click.prevent="navigate()"
              >Productos</a
            >
          </li>
        </router-link>
        <router-link v-slot="{ href, navigate, isExactActive }" to="/blank" custom>
          <li class="nav-item">
            <a
              :href="href"
              class="nav-link"
              :class="{ active: isExactActive }"
              @click.prevent="navigate()"
              >Blank</a
            >
          </li>
        </router-link>
        <router-link v-slot="{ href, navigate, isExactActive }" to="/contactanos" custom>
          <li class="nav-item">
            <a
              :href="href"
              class="nav-link"
              :class="{ active: isExactActive }"
              @click.prevent="navigate()"
              >Contactanos</a
            >
          </li>
        </router-link>
        <li class="nav-item lg:hidden">
          <a href="#" class="nav-link">Iniciar sesión</a>
        </li>
        <li class="nav-item mt-3.5 lg:hidden">
          <a class="btn btn-white btn-sm border-border" href="#">Regístrate</a>
        </li>
      </ul>
      <div class="order-1 ml-auto mr-3 hidden items-center md:order-2 md:ml-0 lg:flex">
        <a class="text-slate-800" href="#">Iniciar sesión</a>
      </div>
      <div class="order-2 ml-auto hidden items-center md:order-3 md:ml-0 lg:flex">
        <a class="btn btn-white btn-sm" href="#">Regístrate</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
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
