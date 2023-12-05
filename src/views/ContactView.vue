<template>
  <div>
    <!-- Common hero -->
    <section class="page-hero pt-16 pb-6">
      <div class="container">
        <div class="page-hero-content mx-auto max-w-[768px] text-center">
          <h1 class="mb-5 mt-8">
            Ponte en contacto con el<br />
            equipo de Agua Inmaculada
          </h1>
        </div>
      </div>
    </section>
    <!-- end Common hero -->

    <section class="section pt-0">
      <div class="container">
        <div class="row">
          <div class="mb-10 text-center md:col-6 md:order-2 md:mb-0 md:pt-9">
            <div class="contact-img relative inline-flex pl-5 pb-5">
              <img src="/images/contact-img.jpeg" class="rounded-md border-8" alt="" />
              <img
                class="absolute bottom-0 left-0 -z-[1] h-14 w-14"
                src="/images/shape-2.svg"
                alt=""
              />
            </div>
          </div>
          <div class="md:col-6 md:order-1">
            <form class="lg:max-w-[484px]" action="#" method="POST">
              <div class="form-group mb-5">
                <label class="form-label" for="name">Nombre Completo</label>
                <input
                  class="form-control"
                  type="text"
                  id="name"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div class="form-group mb-5">
                <label class="form-label" for="eamil">E-mail</label>
                <input
                  class="form-control"
                  type="text"
                  id="email"
                  placeholder="Tu correo electrónico"
                />
              </div>
              <div class="form-group mb-5">
                <label class="form-label" for="reason">Razón/propósito</label>
                <select name="reason" id="reason" class="form-select" required>
                  <option value="">Seleccione Razón/propósito</option>
                  <option value="investment plane">Razón 1</option>
                  <option value="investment plane-2">Razón 1 2</option>
                  <option value="investment plane-3">Razón 1 3</option>
                </select>
              </div>
              <div class="form-group mb-5">
                <label class="form-label" for="message">Agrega un mensaje</label>
                <textarea
                  class="form-control h-[150px]"
                  id="message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <input class="btn btn-primary block w-full" type="submit" value="Enviar mensaje" />
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactMainComponent",
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
