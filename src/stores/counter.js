import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useCounterStore1 = defineStore("counter1", {
  state: () => ({
    count: 0,
    name: "Counter",
  }),
  actions: {
    increment() {
      this.count++;
    },
    reverseName() {
      const reverse = this.name.split("").reverse().join("");
      this.name = reverse;
    },
  },
});
