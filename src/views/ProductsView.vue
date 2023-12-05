<template>
  <section class="section pt-0">
    <div class="container">
      <h2 class="h4 mb-4">Productos disponibles</h2>
      <div class="row">
        <div class="mb-8 md:col-6 lg:col-4" v-for="product in products" :key="product.id">
          <div class="card">
            <img class="card-img" width="335" height="210" :src="product.image" alt="" />
            <div class="card-content">
              <h3 class="h4 card-title">
                <a href="blog-single.html">
                  {{ product.name }}
                </a>
              </h3>
              <p>${{ product.price }}</p>
              <div class="flex justify-between items-center">
                Cantidad:
                <CountComponent v-model="product.count"></CountComponent>
              </div>
              <div class="card-footer mt-6 flex space-x-4 text-center">
                <button
                  class="btn btn-primary h-[48px] w-full rounded-[50px] leading-[30px]"
                  @click="addToCart(product); product.count = 1;"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CountComponent from "@/components/ProductView/CountComponent.vue";
import { mapActions } from "pinia";
import { productsStore } from "@/stores/products.js";

export default {
  name: "ProductsView",
  components: { CountComponent },
  props: {},
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Agua",
          image: "images/agua.jpg",
          price: 3.5,
          count: 1,
        },
        {
          id: 2,
          name: "Agua",
          image: "images/agua.jpg",
          price: 3.5,
          count: 1,
        },
        {
          id: 3,
          name: "Agua",
          image: "images/agua.jpg",
          price: 3.5,
          count: 1,
        },
        {
          id: 4,
          name: "Agua",
          image: "images/agua.jpg",
          price: 3.5,
          count: 1,
        },
        {
          id: 5,
          name: "Agua",
          image: "images/agua.jpg",
          price: 3.5,
          count: 1,
        },
      ],
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    ...mapActions(productsStore, ["addToCart"]),
  },
};
</script>

<style scoped>
.blank {
  background: rgba(242, 140, 255, 0.5);
}
</style>
