<template>
  <div class="container flex min-h-screen min-w-full flex-col items-center justify-center text-white">
    <h1 class="text-7xl font-bold md:text-9xl">Congratulations</h1>
    <p class="text-4xl">Time: {{ formatTime(timer) }}</p>
    <button @click="onStartAgain"
      class="mt-10 rounded-xl border-2 p-3 text-3xl text-white transition-all duration-300 hover:bg-white hover:text-black">
      Start Again
    </button>
  </div>
</template>

<!-- <script>
import moment from 'moment';

export default {
  emits: ['onStartAgain'],

  props: {
    timer: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    formatTime(time) {
      return moment(time).format('mm:ss');
    },

    onStartAgain() {
      this.$emit('onStartAgain');
    },
  }
}
</script> -->
<script setup>
import moment from "moment";

const { timer } = useConfig();
const emit = defineEmits(["onStartAgain"]);

const formatTime = (time) => {
  return moment(time).format("mm:ss");
};
const onStartAgain = () => {
  emit("onStartAgain");
};
</script>

<style lang="scss" scoped>
.container {
  background-image: linear-gradient(rgba(50, 61, 104, 0.5),
      rgba(44, 119, 118, 0.5)),
    url("../assets/images/bg_home.jpg");
  background-size: cover;
  background-position: top;
}
</style>
