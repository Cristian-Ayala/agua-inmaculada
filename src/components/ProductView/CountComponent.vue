<template>
  <button
    type="button"
    class="w-6 h-6 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-0.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
    @click="reduceCount()"
  >
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>minus sign</title>
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15"></path>
    </svg>
  </button>
  <input
    v-model="count"
    @input="validateCount($event.target.value)"
    type="text"
    id="small-input"
    class="w-36 text-center block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
  <button
    type="button"
    class="w-6 h-6 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-0.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
    @click="increaseCount()"
  >
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      stroke-width="2.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>plus sign</title>
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
    </svg>
  </button>
</template>

<script>
export default {
  name: "CountComponent",
  components: {},
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      count: this.modelValue,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    reduceCount() {
      if (!(this.count > 1)) return;
      this.count -= 1;
      this.$emit("update:modelValue", this.count);
    },
    increaseCount() {
      this.count += 1;
      this.$emit("update:modelValue", this.count);
    },
    validateCount(value) {
      const onlyIntegerNumbers = value.replace(/^[^1-9]|[^\d]/g, "");
      if (!onlyIntegerNumbers || parseInt(onlyIntegerNumbers) < 1) {
        this.$emit("update:modelValue", 1);
        this.count = 1;
      }
      this.$emit("update:modelValue", parseInt(onlyIntegerNumbers));
      this.count = onlyIntegerNumbers;
    },
  },
};
</script>

<style scoped></style>
