import { defineStore } from "pinia";

export const productsStore = defineStore("products", {
  state: () => ({
    cart: {},
  }),
  actions: {
    addToCart(product) {
      if (this.cart[product.id]) {
        this.cart[product.id].count += product.count;
      } else this.cart[product.id] = product;
      this.cart[product.id].subtotal = this.$twoDecimalsOnly(
        this.cart[product.id].price * this.cart[product.id].count,
      );
    },
  },
});
